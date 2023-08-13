import React, { useState, useEffect } from "react";
import jsonData from "../json/data.json";

const InfiniteScroll = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleNames, setVisibleNames] = useState([]);

  const batchSize = 10;

  useEffect(() => {
    loadNames();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadNames = () => {
    const endIndex = Math.min(startIndex + batchSize, jsonData.names.length);
    const newNames = jsonData.names.slice(startIndex, endIndex);
    setStartIndex(endIndex >= jsonData.names.length ? 0 : endIndex);
    setVisibleNames((prevNames) => [...prevNames, ...newNames]);
  };

  const handleScroll = () => {
    if (window.innerWidth + window.scrollX >= document.body.offsetWidth - 200) {
      loadNames();
    }
  };

  return (
    <div className="min-h-min flex flex-row items-center py-10 bg-[#151A22] min-w-fit">
      {visibleNames.map((name, index) => (
        <div
          key={index}
          className="filter-greyscale-blur-md bg-cover bg-card_background text-2xl text-white border-black p-5 rounded-2xl mb-3 ml-10 w-96 h-40 text-center card-animation"
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;
