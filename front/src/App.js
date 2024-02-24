import { useEffect, useRef, useState, useMemo, useCallback } from "react"; //Редаговано для Урока 5

// Lesson 9

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
import PostList from "./container/post-list";

function Child({ value }) {
  console.log("child render", value);

  return <div>{value}</div>;
}

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setValue((prev) => prev + 1), 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <Page>
      <Child value={0}></Child>
    </Page>
  );
}

export default App;
