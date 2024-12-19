import React from "react";
import "./itemCard.css";

interface ItemCardProps {
  title: string;
  description: string;
  photo: string;
  btnColor: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, description, photo, btnColor }) => {
  return (
    <div className="border-gray-500 max-h-[600px] border-2 p-2.5 pl-7 flex flex-col items-center justify-center gap-4">
      <img src={photo} alt="photo" className="w-72 h-44" />
      <h1>{title}</h1>
      <p className="mb-7 max-w-xs max-h-44 overflow-hidden">{description}</p>
      <button
        className="mb-5 px-2.5 py-1 text-white text-lg font-bold border-none cursor-pointer hover:shadow-md hover:shadow-black/50"
        style={{ backgroundColor: btnColor }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;

