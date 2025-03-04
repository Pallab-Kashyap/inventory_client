// import { useState } from "react";
import ItemCard from "./ItemCard";

const ItemLibrary = () => {
  // const [isVariationDisplayed, setIsVariationDisplayed] = useState(false);

  const items = [
    {
      id: "1",
      item: "T-Shirt",
      category: "Clothing",
      stock: 50,
      price: 499,
      image: [
        "https://images.unsplash.com/photo-1537204696486-967f1b7198c8",
        "https://images.unsplash.com/photo-1537204696486-967f1b7198c8",
      ],
      variations: [
        {
          id: "101",
          name: "S, Red",
          stock: 10,
          price: 499,
          image: [
            "https://images.unsplash.com/photo-1537204696486-967f1b7198c8",
          ],
        },
        {
          id: "102",
          name: "M, Blue",
          stock: 20,
          price: 499,
          image: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
          ],
        },
        {
          id: "103",
          name: "L, Black",
          stock: 20,
          price: 499,
          image: [
            "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
          ],
        },
      ],
    },
    {
      id: "2",
      item: "Sneakers",
      category: "Footwear",
      stock: 30,
      price: 1999,
      image: [
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      ],
      variations: [
        {
          id: "104",
          name: "42, Black",
          stock: 10,
          price: 1999,
          image: [
            "https://images.unsplash.com/photo-1533222481259-91b1f1502b28",
          ],
        },
        {
          id: "105",
          name: "40, White",
          stock: 10,
          price: 1999,
          image: ["https://images.unsplash.com/photo-1560072810-1c60179426d3"],
        },
        {
          id: "106",
          name: "41, Red",
          stock: 10,
          price: 1999,
          image: ["https://images.unsplash.com/photo-1549298916-b41d501d3772"],
        },
      ],
    },
    {
      id: "3",
      item: "Backpack",
      category: "Accessories",
      stock: 20,
      price: 1499,
      image: [
        "https://images.unsplash.com/photo-1581287053723-38770dbc1ec2",
        "https://images.unsplash.com/photo-1596478288723-d7e6ac12ffdb",
      ],
      variations: [
        {
          id: "107",
          name: "Medium, Grey",
          stock: 10,
          price: 1499,
          image: [
            "https://images.unsplash.com/photo-1599940832517-9b4b9d6b5833",
          ],
        },
        {
          id: "108",
          name: "Large, Black",
          stock: 10,
          price: 1599,
          image: [
            "https://images.unsplash.com/photo-1540518614846-7eded433c457",
          ],
        },
      ],
    },
  ];

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
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemLibrary;
