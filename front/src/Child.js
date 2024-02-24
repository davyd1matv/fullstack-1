import { memo } from "react";

const Child = memo(
  ({ value }) => {
    console.log("child render", value);

    return <div>{value}</div>;
  },
  (prev, next) => {
    return next.value % 5 !== 0;
  }
);

export default Child;
