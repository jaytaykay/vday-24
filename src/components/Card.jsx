import React from "react";

const Card = ({ title, children, onClickUrl }) => {
  return (
    <>
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="mb-2">{children}</div>
        {onClickUrl && (
          <a href={onClickUrl} target="_blank" rel="noopener noreferrer">
            <button>Read more</button>
          </a>
        )}
      </div>
    </>
  );
};

export default Card;
