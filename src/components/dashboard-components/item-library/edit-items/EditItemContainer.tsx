import { Link, useLocation, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";
import ItemDetails from "./ItemDetails";
import ItemCategories from "./ItemCategories";
import ItemOptions from "./ItemOptions";
import ItemVariation from "./ItemVariation";
import { useEffect, useState } from "react";
import { Product } from "../../../../types/productTypes";
import { getProductById } from "../../../../API/Item/item";

const EditItem = () => {
  const { id } = useParams();
  const location = useLocation();

  const [item, setItem] = useState<Product>();

  useEffect(() => {
    (async () => {
      try {
        if (location.state) {
          setItem(location.state);
        } else {
          if (id) {
            const res = await getProductById(id);
            setItem(res);
          } else {
            throw new Error("id missing");
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location.state]);

  const handleSave = () => {};

  return (
    <div className="w-screen">
      <nav className="sticky top-0 z-10">
        <div className="flex justify-between p-5">
          <div className=" h-fit w-fit">
            <Link to={"/item-library"} className="">
              <div className="bg-stone-700 p-4 rounded-sm">
                <RxCross2 />
              </div>
            </Link>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <button className="text-red-400 bg-stone-700 py-2 w-28 text-center rounded-[6px]">
              Delete
            </button>
            <button
              onClick={handleSave}
              className="py-2 w-28 text-center rounded-[6px] bg-blue-500 font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </nav>

      <main className="m-auto px-[16vw] pb-10">
        <h1 className="text-4xl font-medium pb-16">Edit item</h1>

        <div className="space-y-8 ">
          <ItemDetails
            data={{
              productName: item?.productName || "",
              productDescription: item?.description || "",
              productImages: item?.images || [],
            }}
          />
          <ItemCategories />
          <ItemOptions />
          <ItemVariation />
        </div>
      </main>
    </div>
  );
};

export default EditItem;
