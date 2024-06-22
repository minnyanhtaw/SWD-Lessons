import React from "react";

function List({ name, price }) {
//   console.log(props);
  return (
    <div>
      <b>{name}</b> = {price}
    </div>
  );
}

export default List;
