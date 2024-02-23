import { useEffect, useRef, useState } from "react"; //Редаговано для Урока 5

// Lesson 7

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
// import PostList from "./container/post-list";

function App() {
  //   const firstCatRef = useRef(null);
  //   const secondCatRef = useRef(null);
  //   const thirdCatRef = useRef(null);

  //   function handleSctollBy(ref) {
  //     console.log(ref);
  //     if (ref && ref.current) {
  //       const offsetTop = ref.current.offsetTop;

  //       window.scrollBy({
  //         top: offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   }

  ///=====

  //   const inputRef = useRef(null);

  //   useEffect(() => {
  //     if (inputRef && inputRef.current) inputRef.current.focus(); // Фокус на нвведені після завантаження
  //   }, []);

  ///=====

  //   const prevValueRef = useRef(null);

  //   const [value, setValue] = useState(0);

  //   useEffect(() => {
  //     console.log(value, "value");
  //     console.log(prevValueRef, "prevValueRef");

  //     prevValueRef.current = value;

  //     console.log(prevValueRef, "prevValueRef");
  //   }, [value]);

  //   const handleIncrement = () => {
  //     setValue(value + 1);
  //   };

  //   useEffect(() => {
  //     console.log("newPrevValueRef");
  //   }, [prevValueRef.current]);

  //   console.log("render");

  ///=====

  const scrollPositionRef = useRef(0);

  const handleScroll = () => {
    console.log(scrollPositionRef);
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    console.log("scrollPositionRef", scrollPositionRef);
  }, [scrollPositionRef.current]);

  return (
    <Page>
      {/* <Grid>
        <button onClick={() => handleSctollBy(firstCatRef)}>Tom</button>
        <button onClick={() => handleSctollBy(secondCatRef)}>Jary</button>
        <button onClick={() => handleSctollBy(thirdCatRef)}>Andrew</button>
      </Grid>
      <div>
        <ul style={{ display: "grid", gap: "5000px", marginBottom: "500px" }}>
          <li>
            <img
              src="http://placekitten.com/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>

          <li>
            <img
              src="http://placekitten.com/300/200"
              alt="Jary"
              ref={secondCatRef}
            />
          </li>

          <li>
            <img
              src="http://placekitten.com/250/200"
              alt="Andrew"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div> */}

      {/* ///===== */}

      {/* <Grid>
        <Box>
          <input ref={inputRef} placeholder="Введіть пошту..." />
        </Box>
        <Box>
          <input placeholder="Введіть пошту..." />
        </Box>
      </Grid> */}

      {/* ///===== */}

      {/* <Grid>
        <Box>
          <p>value:{value}</p>
          <p>prevValueRef:{prevValueRef.current}</p>
        </Box>

        <Box>
          <button onClick={handleIncrement}>Increment</button>
        </Box>
      </Grid> */}

      {/* ///===== */}

      <button onClick={handleScroll}>Click</button>
      <p style={{ height: 10000 }}></p>
    </Page>
  );
}

export default App;
