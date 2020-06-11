import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "components/UserContext";
import Button from "components/Button";
import FlipCard from "components/FlipCard";
import { database } from "_firebase";
import { FIREBASE_USER_WORDS, FIREBASE_SINGLE_WORD_DEF } from "constants/index";
import styles from "./styles.module.css";

const getUserWords = async (uid) => {
  const responce = await database.ref(FIREBASE_USER_WORDS(uid)).once("value");
  return responce.val();
};

const getSingleDefinition = async (word) => {
  const responce = await database
    .ref(FIREBASE_SINGLE_WORD_DEF(word.toLowerCase()))
    .once("value");
  return responce.val();
};

const createArrWithEl = (size, el) => {
  return new Array(size).fill(el, 0, size);
};

const shuffleArr = (arr, timesShuffle) => {
  const _arr = [...arr];
  for (let i = 0; i < timesShuffle; i++) {
    _arr.forEach((el, index) => {
      const randomNum = Math.floor(Math.random() * _arr.length);
      const temp = _arr[randomNum];
      _arr[randomNum] = el;
      _arr[index] = temp;
    });
  }
  return _arr;
};

const StudyPage = () => {
  const { user } = useContext(UserContext);
  // data for words
  const [userWords, setUserWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(-2);
  const [currentDef, setCurrentDef] = useState("loading...");

  useEffect(() => {
    if (user.uid)
      getUserWords(user.uid)
        .then((data) => {
          const _userWords = [];
          const _wordPercent = [];
          if (data)
            Object.keys(data).forEach((word, index) => {
              const wordData = data[word];
              _userWords.push(word);
              _wordPercent.push(...createArrWithEl(wordData.amount, index));
            });
          setUserWords(shuffleArr(_userWords, 5));
          setCurrentWordIndex(0);
        })
        .catch(console.error);
  }, [user.uid]);

  useEffect(() => {
    if (currentWordIndex > -1) {
      const nextWord = userWords[currentWordIndex];
      getSingleDefinition(nextWord)
        .then((definition) => setCurrentDef(definition))
        .catch((e) => {
          console.error(e);
          setCurrentDef(null);
        });
    }
    setUserWords(
      currentWordIndex === userWords.length - 1
        ? shuffleArr(userWords, 5)
        : userWords
    );
  }, [currentWordIndex, setUserWords, userWords]);

  const def = currentDef || "No Denifition Found.";
  const word =
    currentWordIndex > -1 ? userWords[currentWordIndex] : "loading...";

  return (
    <div>
      <Button
        className={styles.button}
        onClick={() =>
          setCurrentWordIndex((currentWordIndex + 1) % userWords.length)
        }
        text="Next Word"
        altStyle
      ></Button>
      <FlipCard
        key={userWords[currentWordIndex]}
        frontContent={word}
        backContent={
          typeof def === "string" ? (
            <p className={styles.defText}>def</p>
          ) : (
            def.map((d, i) => (
              <p className={styles.defText}>
                {i + 1}. {d}
              </p>
            ))
          )
        }
      />
    </div>
  );
};

export default StudyPage;
