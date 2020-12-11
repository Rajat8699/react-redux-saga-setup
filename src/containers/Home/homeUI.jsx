import React from "react";

export default function HomeUI(props) {
  return (
    <>
      {props.userresult &&
        props.userresult.data.map((items, key) => {
          return <h1 key={key}>{items.username}</h1>;
        })}
    </>
  );
}
