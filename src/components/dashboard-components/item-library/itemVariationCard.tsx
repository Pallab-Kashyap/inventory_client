import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import ActionCard from "./ActionCard";
import { ProductVariation } from "../../../types/productTypes";
import { FaRegImage } from "react-icons/fa";

const ItemVariationCard = ({ variation }: { variation: ProductVariation }) => {
  //   const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);
  const [isShowActions, setIsShowActions] = useState(false)

  return (
    <div className={`col-span-16 grid grid-cols-16 pt-3 items-center`}>
      <div></div>
      <div className="col-span-14 grid grid-cols-14 items-center">
        <div></div>
        <div id="image" className="h-full w-full p-1 object-contain">
        {variation.images && variation.images.length > 0 ? (
                  <img
                    src={variation?.images[0].url}
                    alt={variation?.images[0].imageName || "product image"}
                    className="h-8 w-8 rounded-md object-contain"
                  />
                ) : (
                  <div
                    className=" border border-gray-600 flex justify-center items-center  h-8 w-8 rounded-md"
                  >
                    <FaRegImage />
                  </div>
                )}
        </div>
        <div className=" border-white col-span-6">{variation.variationName}</div>
        <div className=" border-white col-span-3 text-center"></div>
        <div className=" border-white col-span-1 text-center">
          {variation.stockQuantity}
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
