import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
  createContext,
  useReducer,
} from "react";

// Lesson 10

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
import PostList from "./container/post-list";

export const THEME_TYPE = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContext = createContext(null);

//==

const THEME_ACTION_TYPE = {
  TOGGLE: "toggle",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTION_TYPE.TOGGLE:
      return state === THEME_TYPE.DATK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK;
    default:
      return state;
  }
};

function App() {
  //   const [currentTheme, setTheme] = useState(THEME_TYPE.LIGHT);

  //   const handleChangeTheme = () => {
  //     setTheme((prevTheme) => {
  //       if (prevTheme === THEME_TYPE.DARK) {
  //         return THEME_TYPE.LIGHT;
  //       } else {
  //         return THEME_TYPE.DARK;
  //       }
  //     });
  //   };

  //   const theme = useMemo(
  //     () => ({
  //       value: currentTheme,
  //       toggle: handleChangeTheme,
  //     }),
  //     [currentTheme]
  //   );

  //==

  const [currentTheme, dispatch] = useReducer(themeReducer, THEME_TYPE.DARK);

  const theme = useMemo(
    () => ({
      value: currentTheme,
      toggle: () => dispatch({ type: THEME_ACTION_TYPE.TOGGLE }),
    }),
    [currentTheme]
  );

  return (
    <Page>
      <ThemeContext.Provider value={theme}>
        <PostList />
      </ThemeContext.Provider>
    </Page>
  );
}

export default App;
