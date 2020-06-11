import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "components/UserContext";
import { database } from "_firebase";
import { FIREBASE_USER_WORDS } from "constants/index";
import Table from "components/Table";

const StatsPage = () => {
  const { user } = useContext(UserContext);
  const [userWords, setUserWords] = useState(null);

  useEffect(() => {
    if (user.uid)
      database
        .ref(FIREBASE_USER_WORDS(user.uid))
        .once("value")
        .then((snapshot) => setUserWords(snapshot.val()))
        .catch(console.error);
  }, [user.uid]);

  return <Table data={userWords} />;
};

export default StatsPage;
