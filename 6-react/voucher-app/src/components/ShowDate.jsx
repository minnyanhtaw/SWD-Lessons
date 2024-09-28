import React from "react";

const ShowDate = ({ timestamp }) => {
  const date = new Date(timestamp);
  const currentDate = date.toDateString();
  const currentTime = date.toLocaleTimeString();
  return (
    <>
      <p className=" text-sm">{currentDate}</p>
      <p className=" text-sm">{currentTime}</p>
    </>
  );
};

export default ShowDate;
