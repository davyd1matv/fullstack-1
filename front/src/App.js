import { useRef } from "react"; //Редаговано для Урока 5

// Lesson 6

import React from "react";
import Page from "./component/page";
import Grid from "./component/grid";
import Box from "./component/box";
import PostList from "./container/post-list";

function App() {
  //   const init = (state) => {
  //     if (state.items && state.items.length === 0) {
  //       return {
  //         ...state,
  //         items: [...state.items, { id: 444111, value: "first item" }],
  //       };
  //     } else {
  //       return state;
  //     }
  //   };
  //   console.log("render");

  //   const [state, dispatch] = useReducer(listReducer, initState);

  //   const handleAddItem = (e) => {
  //     const { value } = e.target;

  //     if (value.trim() === "") return null;

  //     // dispatch(value);
  //     dispatch({ type: LIST_ACTION_TYPE.ADD, payload: value });

  //     e.target.value = "";
  //   };

  //   //   const handleRemoveItem = (id) => dispatch(id);
  //   const handleRemoveItem = (id) =>
  //     dispatch({ type: LIST_ACTION_TYPE.DELETE, payload: id });

  //   const handleSelectItem = (id) =>
  //     dispatch({ type: LIST_ACTION_TYPE.SELECT, payload: id });

  //   const handleReverseItems = () => dispatch({ type: LIST_ACTION_TYPE.REVERSE });

  //   console.log(state);

  return (
    // <Page>
    //   <Grid>
    //     <Box>
    //       <Grid>
    //         <h1>Список еементів:</h1>
    //         <ul>
    //           <Grid>
    //             {state.items.map(({ value, id }) => (
    //               <li onClick={() => handleSelectItem(id)} key={id}>
    //                 <Box
    //                   style={{
    //                     borderColor:
    //                       state.selectedId === id ? "blue" : "#e6e6e6",
    //                   }}
    //                 >
    //                   <Grid>
    //                     <span>{value}</span>
    //                     <Box>
    //                       <button
    //                         onClick={(e) => {
    //                           e.stopPropagation();
    //                           handleRemoveItem(id);
    //                         }}
    //                       >
    //                         Видалити
    //                       </button>
    //                     </Box>
    //                   </Grid>
    //                 </Box>
    //               </li>
    //             ))}
    //           </Grid>
    //         </ul>
    //       </Grid>
    //     </Box>
    //     <Box>
    //       <input
    //         onBlur={handleAddItem}
    //         type="text"
    //         placeholder="Введіть новий елемент"
    //       />
    //     </Box>
    //     <Box>
    //       <button onClick={handleReverseItems}>Змінити порядок</button>
    //     </Box>
    //   </Grid>
    // </Page>
    <Page>
      <PostList />
    </Page>
  );
}

export default App;
