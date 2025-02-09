import React, { useState } from "react";

export const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="inline-box max-w-sm rounded overflow-hidden my-10 mx-auto">
      {/* <button className="justify-end bg-grey-500 ml-10"> Bottom </button> */}
      <form className="w-full max-w-sm " onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-teal-500 py-2"></div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className=" bg-white appearance-none w-full
         text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Search Image Term...."
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
         hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
