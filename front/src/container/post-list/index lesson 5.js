import { useState, Fragment, useEffect } from "react";

import Title from "../../component/title";
import Grid from "../../component/grid";
import Box from "../../component/box";

import PostCreate from "../post-create";
import PostItem from "../post-item";

import { Skeleton, LOAD_STATUS, Alert } from "../../component/load";
import { getDate } from "../../util/getDate";
import { useWindowListenter } from "../../util/useWindowListenter";

export default function Container() {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  const getData = async () => {
    setStatus(LOAD_STATUS.PROGRESS);

    try {
      const res = await fetch("http://localhost:4000/post-list");
      // 		{
      //     method: "GET",
      //   });

      const data = await res.json();

      if (res.ok) {
        setData(convertData(data));
        setStatus(LOAD_STATUS.SUCCESS);
      } else {
        setMessage(data.message);
        setStatus(LOAD_STATUS.ERROR);
      }
    } catch (error) {
      setMessage(error.message);
      setStatus(LOAD_STATUS.ERROR);
    }
  };

  const convertData = (raw) => ({
    list: raw.list.reverse().map(({ id, username, text, date }) => ({
      id,
      username,
      text,
      date: getDate(date),
    })),

    isEmpty: raw.list.length === 0,
  });

  //Урок 5
  useEffect(() => {
    // alert("render");
    // getData();

    getData();

    // const intervalId = setInterval(() => getData(), 5000);

    // setInterval(() => alert(123), 5000); // Працює не коректно

    ///=====

    // const intervalId = setInterval(() => alert(123), 5000);

    // alert(1);

    return () => {
      //   clearInterval(intervalId);
      //   alert(1);
    };
  }, []);
  //

  if (status === null) {
    getData();
  }

  // Урок 5
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useWindowListenter("pointermove", (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });
  //

  return (
    <Grid>
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />

      <Box>
        <Grid>
          <Title>Home</Title>
          <PostCreate
            onCreate={getData}
            placeholder="What is happening?!"
            button="post"
          />
        </Grid>
      </Box>

      {status === LOAD_STATUS.PROGRESS && (
        <Fragment>
          <Box>
            <Skeleton />
          </Box>
          <Box>
            <Skeleton />
          </Box>
        </Fragment>
      )}

      {status === LOAD_STATUS.ERROR && (
        <Alert status={status} message={message} />
      )}

      {status === LOAD_STATUS.SUCCESS && (
        <Fragment>
          {data.isEmpty ? (
            <Alert message="Список постів пустий" />
          ) : (
            data.list.map((item) => (
              <Fragment key={item.id}>
                {/* {item.username} - {item.date} */}
                <PostItem {...item} />
              </Fragment>
            ))
          )}
        </Fragment>
      )}
    </Grid>
  );
}
