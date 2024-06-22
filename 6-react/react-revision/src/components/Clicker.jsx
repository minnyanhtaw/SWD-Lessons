import React, { useState } from "react";

function Clicker() {
  const [num, setNum] = useState(1);

  const handleBtn = () => {
    setNum((prve) => prve + 1);
    setNum((prve) => prve + 1);
    setNum((prve) => prve + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
  };

  return (
    <div>
      <h1>Your Number : {num}</h1>
      <button onClick={handleBtn}>add</button>
    </div>
  );
}

export default Clicker;
