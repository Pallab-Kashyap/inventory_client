// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ItemCard from "./ItemCard";
import { getAllProducts } from "../../../API/Item/item";
import { useDispatch } from "react-redux";
import { updateLoaderState } from "../../../store/features/loaderSlice";
import { useEffect, useState } from "react";
import { Product } from "../../../types/productTypes";

const ItemLibrary = () => {
  // const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);
  const [items, setItems] = useState<Product[]>();

  const dispatch = useDispatch();

  const itemQuery = useQuery({
    queryKey: ["items"],
    queryFn: getAllProducts,
    retry: 0,
  });

  useEffect(() => {
    if (itemQuery.isLoading) {
      dispatch(updateLoaderState(true));
    } else {
      dispatch(updateLoaderState(false));
    }

    if (itemQuery.data) {
      {
        setItems(itemQuery.data.products);
      }
    }
  }, [itemQuery.status]);

  return (
    <div className="h-full w-full flex flex-col">
      <div id="headings">
        <div className="flex justify-between p-5">
          <div>Search</div>
          <div className="flex justify-between items-center space-x-4">
            <div className="bg-stone-700 py-2 w-28 text-center rounded-[6px]">
              Action
            </div>
            <div className="py-2 w-28 text-center rounded-[6px] bg-blue-500 font-medium">
              Create item
            </div>
          </div>
        </div>
      </div>

      <div id="products" className=" flex-1 overflow-hidden">
        <div
          id="hedders"
          className="grid grid-cols-16 border-b border-white/35 pb-3"
        >
          <div className="text-center">...</div>
          <div id="image" className=""></div>
          <div className=" border-white col-span-7">Item</div>
          <div className=" border-white col-span-3 text-center">Category</div>
          <div className=" border-white col-span-1 text-center">Stock</div>
          <div className=" border-white col-span-2 text-right">Price</div>
          <div className="text-center">...</div>
        </div>

        <div id="items" className="">
          {items && items.length > 0 && items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemLibrary;
