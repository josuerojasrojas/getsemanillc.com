// file for all constant variables
export const redirectTo = "/login";

// probably bad to have the key, but it's just reading for definitions and i couldnt use it in functions cause we are using a free plan that doesn't allow outside request
const dictionaryapikey = "b1c304cc-b5e7-4598-a98b-529b72f5d6a9";
export const DICTIONARY_API = (word) =>
  `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictionaryapikey}`;

// firebase 'endpoint'
export const FIREBASE_ALL_WORDS = "/words";
export const FIREBASE_SINGLE_WORD = (word) => `/words/${word}/`;
export const FIREBASE_SINGLE_WORD_DEF = (word) => `/words/${word}/definition`;
export const FIREBASE_USER_WORDS = (uid) => `users/${uid}/words`;
export const FIREBASE_USER_SINGLE_WORD = (uid, word) =>
  `/users/${uid}/words/${word}`;
export const FIREBASE_USER_SINGLE_WORD_SET = (uid, word) =>
  `/users/${uid}/words/${word}/date`;

// user context
export const USER_CONTEXT_INIT = {
  isAuthenticated: false,
  isUserReady: false,
};

// wordsearchcomponent
export const Init_Search_Description_Text =
  "Search for definitions and save them to study later";
export const NO_RESULTS =
  "No results found, try making sure spelling is correct";
export const CLOSE_WORDS_RESULTS = (searchValue) =>
  `Did not find the definition for ${searchValue}. Here are some close words: `;
export const DEFINITION_RESULTS = (searchValue) =>
  `Definitions for ${searchValue}:`;
export const IS_SEARCHING_TEXT = "Searching...";
export const DEFAULT_MESSAGE = {
  isError: false,
  message: "+ Add this to your list",
};
