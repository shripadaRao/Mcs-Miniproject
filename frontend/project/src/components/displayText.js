/// To Display texts

import React from "react";
import { useState } from "react";

function DisplayText() {
  const [details, setDetails] = useState({
    textContent: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { textContent } = details;

    const res = await fetch(
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

  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        <h4>Display Text</h4>
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Text here"
          onChange={(e) =>
            setDetails({ ...details, textContent: e.target.value })
          }
        />
        <button onClick={PostData}>Submit</button>
      </div>
    </div>
  );
}

export default DisplayText;
