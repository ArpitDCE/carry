import React from "react";
import { ProductListProps } from "../../Type";
const ProductList: React.FC<ProductListProps> = ({
  image,
  name,
  location,
  chat,
  setChat,
}) => {
  return (
    <>
      <div className="border border-gray-400 w-[15em] h-[20em] flex items-center flex-col">
        <div className="border border-gray-400 w-[14em] h-[15em] rounded-xl mt-2">
          <img src={image} alt="" />
        </div>
        <div className="mb-1 flex items-start flex-col w-[90%]">
          <p>{name}</p>
          <p>{location}</p>
          <button
            className="text-white bg-black p-2 rounded cursor-pointer"
            onClick={() => (chat ? setChat(false) : setChat(true))}
          >
            Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
