import { useState, useEffect } from "react"; //Редаговано для Урока 5

import React from "react";
import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  //   const [isHidden, setHidden] = useState();

  //   useEffect(() => {
  //     setTimeout(() => setHidden(true));
  //   }, []);

  //   const [count, setCount] = useState(0);
  //
  // Шматок коду нижче є частою проблемою Новачків.
  // Код будевиконуватися постійно та їсти багато ресурсів комп'ютера,
  // що призведе до його зависання
  // useEffect(() => {
  // 	setCount(count + 1);
  // });

  // Наступний код робить коло навколо курсора

  //   useEffect(() => {
  //     function handleMove(e) {
  //       setPosition({ x: e.clientX, y: e.clientY });
  //     }

  //     window.addEventListener("pointermove", handleMove);

  //     return () => {
  //       window.removeEventListener("pointermove", handleMove);
  //     };
  //   }, []);

  //=====

  //   const [location, setLocation] = useState(null);

  //   useEffect(() => {
  //     if ("geolocation" in navigator) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const { latitude, longitude } = position.coords;
  //           setLocation({ latitude, longitude });
  //         },
  //         (error) => {
  //           console.error("Помилка отримання геолокації:", error.message);
  //         }
  //       );
  //     } else {
  //       console.error("Геолокація не підтримуєтсья в цьомму браузері.");
  //     }
  //   }, []);

  return (
    <Page>
      {/* {isHidden !== true && <PostList />} */}
      {/*  */}
      <PostList />

      {/* <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transorm: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      /> */}

      {/* {location ? (
        <div>
          <h2>Ваша геолокація:</h2>
          <p>Широта: {location.latuitude}</p>
          <p>Довгота: {location.longitude}</p>
        </div>
      ) : (
        <p>Отримання геолокації...</p>
      )} */}
    </Page>
  );
}

export default App;
