import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import ItemVariationCard from "./itemVariationCard";
import { useNavigate } from "react-router-dom";
import ActionCard from "./ActionCard";

export interface Variation {
  id: string;
  name: string;
  stock: number;
  price: number;
  image: string[];
}

export interface Item {
  id: string;
  item: string;
  category: string;
  stock: number;
  price: number;
  image: string[];
  variations: Variation[];
}

const ItemCard = ({ item }: { item: Item }) => {
  const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);
  const [isShowActions, setIsShowActions] = useState(false)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div
      className={`grid grid-cols-16 ${
        isVariationDisplayed ? `grid-rows-${item.variations.length + 1}` : ""
      } pt-3 items-center  cursor-pointer`}
      //   hover:bg-blue-500/25
    >
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => setIsVariationDisplayed((prev) => !prev)}
      >
        {isVariationDisplayed ? <FaAngleDown /> : <FaAngleRight />}
      </div>

      <div id="Product_info_container" onClick={handleClick}
       className="col-span-14 grid grid-cols-14 items-center">
        <div id="image" className="h-full w-full p-1 object-contain">
          <img src={item.image[0]} className=" h-12 w-10"></img>
        </div>
        <div className=" border-white col-span-7 ">{item.item}</div>
        <div className=" border-white col-span-3 text-center">
          {item.category}
        </div>
        <div className=" border-white col-span-1 text-center">{item.stock}</div>
        <div className=" border-white col-span-2 text-right">{item.price}</div>
      </div>
      <div
        onClick={() => setIsShowActions(prev => !prev)}
      className="flex justify-center items-center text-xl text-blue-400 cursor-pointer">
        {<BsThreeDots />}
      </div>
      {isVariationDisplayed &&
        item.variations.map((variation) => (
          <ItemVariationCard key={variation.id} variation={variation} />
        ))}

        {isShowActions && <ActionCard />}
    </div>
  );
};

export default ItemCard;
