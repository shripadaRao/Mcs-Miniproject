/// To Display texts

import React from "react";
import { useState } from "react";
import { useRef } from "react";

function DisplayText() {
  const [details, setDetails] = useState({
    textContent: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { textContent } = details;

    await fetch(
      "https://mcs-miniproject-default-rtdb.firebaseio.com/display.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          textContent,
        }),
      }
    );
  };
  function Post() {
    return PostData;
  }

  const ref = useRef(null);

  function ClearInput() {
    const handleClick = () => {
      ref.current.value = "";
    };
    return handleClick;
  }

  // executeOnClick = ()=> {
  //   Post();
  //   ClearInput();
  // }
  // function alertFunc() {}

  return (
    <div>
      <label htmlFor="price">
        <h4>Display Text</h4>
      </label>
      <div>
        <input
          type="text"
          name="price"
          id="price"
          ref={ref}
          placeholder="Enter Text here"
          onChange={(e) =>
            setDetails({ ...details, textContent: e.target.value })
          }
        />
        <button className="button1" type="button" onClick={Post()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default DisplayText;
