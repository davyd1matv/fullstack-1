import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react"; //Редаговано для Урока 5

// Lesson 10

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
import PostList from "./container/post-list";

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
