import { useEffect, useRef, useState } from "react"; //Редаговано для Урока 5

// Lesson 8

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
