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

// Lesson 9

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
import PostList from "./container/post-list";

// const Child = lazy(() => import("./Child"));

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);

//     return () => clearInterval(id);
//   }, []);

//   console.log("App");

//   //   return <Page>{value > 20 && <Child value={value}></Child>}</Page>;

//   return (
//     <Page>
//       <div>state:{value}</div>
//       <div>
//         {value > 5 && (
//           <Suspense fallback={<div>Loading...</div>}>
//             <Child value={value} />
//           </Suspense>
//         )}
//       </div>
//     </Page>
//   );
// }

//===

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
