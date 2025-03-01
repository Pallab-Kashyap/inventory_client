
import { BsThreeDots } from "react-icons/bs";
// import { useState } from "react";
import { Variation } from "./ItemCard";

const ItemVariationCard = ({ variation }: { variation: Variation }) => {
  //   const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);

  return (
    <div className={`col-span-16 grid grid-cols-16 pt-3 items-center`}>
      <div></div>
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
      <div className="flex justify-center items-center text-xl text-blue-400 cursor-pointer">
        {<BsThreeDots />}
      </div>
    </div>
  );
};

export default ItemVariationCard;
