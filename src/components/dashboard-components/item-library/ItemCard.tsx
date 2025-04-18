import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import ItemVariationCard from "./itemVariationCard";
import { useNavigate } from "react-router-dom";
import ActionCard from "./ActionCard";
import { Product } from "../../../types/productTypes";
import { FaRegImage } from "react-icons/fa";



const ItemCard = ({  item }: { item: Product }) => {
  const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);
  const [isShowActions, setIsShowActions] = useState(false)
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 0
  })

  useEffect(() => {
    const stockQnt = item.productVariation.reduce((acc, currVal) => acc + currVal.stockQuantity, 0)
    setStock(stockQnt) 

    const allPrices = item.productVariation.map((variation) => parseInt(variation.price))
    const minPrice = Math.min(...allPrices)
    const maxPrice = Math.max(...allPrices)

    setPrice({ minPrice, maxPrice })

  }, [])

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${item.id}`, { state: item });
  };

  return (
    <div 
      className={`grid grid-cols-16 ${
        isVariationDisplayed ? `grid-rows-${item.productVariation.length + 1}` : ""
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
          {item.images && item.images.length > 0 ? (
                  <img
                    src={item?.images[0].url}
                    alt={item?.images[0].imageName || "product image"}
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
        <div className=" border-white col-span-7 ">{item.productName}</div>
        <div className=" border-white col-span-3 text-center">
          {item.baseCategory.displayName}
        </div>
        <div className=" border-white col-span-1 text-center">{stock}</div>
        <div className=" border-white col-span-2 text-right">{`${price.maxPrice ? `${price.minPrice} - ${price.maxPrice}` : ''}`}</div>
      </div>
      <div
        onClick={() => setIsShowActions(prev => !prev)}
      className="flex justify-center items-center text-xl text-blue-400 cursor-pointer">
        {<BsThreeDots />}
      </div>
      {isVariationDisplayed &&
        item.productVariation.map((variation) => (
          <ItemVariationCard key={variation.id} variation={variation} />
        ))}

        {isShowActions && <ActionCard />}
    </div>
  );
};

export default ItemCard;
