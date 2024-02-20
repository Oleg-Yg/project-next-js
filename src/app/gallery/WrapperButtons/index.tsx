import React from "react";
import Button from "@/components/Button";

const WrapperButtons = () => {
  return (
    <>
      <Button onClick={() => alert("Hello :)")} margin={"5px"}>
        Нажми на меня
      </Button>
      <Button
        onClick={() => alert("Hello :)")}
        variant={"outlined"}
        margin={"5px"}
      >
        Нажми на меня
      </Button>
      <Button
        onClick={() => alert("Hello :)")}
        variant={"contained"}
        margin={"5px"}
      >
        Нажми на меня
      </Button>
    </>
  );
};

export default WrapperButtons;
