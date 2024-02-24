import { useEffect, useRef, useState, useMemo, useCallback } from "react"; //Редаговано для Урока 5

// Lesson 8

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
import PostList from "./container/post-list";

// function Child({ state }) {
//   //   const data = useMemo(() => {
//   //     return Math.random() + Math.random + console.log("Hello World");
//   //   }, [state]);
//   //
//   //   const data = useMemo(() => {
//   //     console.log("Hell world");
//   //     return state * 10;
//   //   }, [state]);
//   //
//   // return <div>{Child}</div>;

//   //===

//   //   console.log("render");

//   //   const data = useMemo(() => {
//   //     let result = 0;

//   //     for (let i = 0; i < 1000000; i++) {
//   //       result += i * state;
//   //     }
//   //     return result;
//   //   }, [state]);

//   //   return <div>Child {data}</div>;

//   //===

//   console.log("render");

//   //   const handleClick = console.log("hello world") || (() => alert("click"));
//   const handleClick = () => alert("click");

//   return <div onClick={handleClick}>Child</div>;
// }

///=====

function Child({ state }) {
  const handleClick = useCallback(() => alert(state), [state]);

  console.log("render");

  useEffect(() => {
    console.log("new HandleClick");
  }, [handleClick]);

  return <div onClick={handleClick}>Child</div>;
}

function App() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setState((prev) => prev + 1), 1000);

    const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

    return () => {
      clearInterval(id);
      clearInterval(id2);
    };
  }, []);

  //   const handleClick = () => alert("click");
  const handleClick = useCallback(() => alert(state), [state2]);

  return (
    <Page>
      {/* Hello world {state} <Child state={state2} /> */}
      {/* Hello world {state} <Child state={state2} handleClick={handleClick} /> */}
      Hello world {state} <Child state={state2} handleClick={handleClick} />
      {/* В Chiild прибираємо handleClick на state */}
    </Page>
  );
}

export default App;
