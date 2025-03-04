import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { Variation } from "./ItemCard";
import ActionCard from "./ActionCard";

const ItemVariationCard = ({ variation }: { variation: Variation }) => {
  //   const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);
  const [isShowActions, setIsShowActions] = useState(false)

  return (
    <div className={`col-span-16 grid grid-cols-16 pt-3 items-center`}>
      <div></div>
      <div className="col-span-14 grid grid-cols-14 items-center">
        <div></div>
        <div id="image" className="h-full w-full p-1 object-contain">
          <img src={variation.image[0]} className=" h-12 w-10"></img>
        </div>
        <div className=" border-white col-span-6">{variation.name}</div>
        <div className=" border-white col-span-3 text-center">fjwiefpwj</div>
        <div className=" border-white col-span-1 text-center">
          {variation.stock}
        </div>
        <div className=" border-white col-span-2 text-right">
          {variation.price}
        </div>
      </div>
      <div
        onClick={() => setIsShowActions(prev => !prev)}
      className="flex justify-center items-center text-xl text-blue-400 cursor-pointer">
        {<BsThreeDots />}
      </div>
      {isShowActions && <ActionCard />}
    </div>
  );
};

export default ItemVariationCard;
