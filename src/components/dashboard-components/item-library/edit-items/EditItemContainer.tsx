import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";
import ItemDetails from "./ItemDetails";
import ItemCategories from "./ItemCategories";
import ItemOptions from "./ItemOptions";
import ItemVariation from "./ItemVariation";

const EditItem = () => {
  //   const { id } = useParams();

  return (
    <div className="w-screen">
      <nav className="sticky top-0 z-10">
        <div className="flex justify-between p-5">
          <div className=" h-fit w-fit">
            <Link to={"/item-library"} className="">
              <div className="bg-stone-700 p-2 rounded-sm">
                <RxCross2 />
              </div>
            </Link>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <div className="text-red-400 bg-stone-700 py-2 w-28 text-center rounded-[6px]">
              Delete
            </div>
            <div className="py-2 w-28 text-center rounded-[6px] bg-blue-500 font-medium">
              Save
            </div>
          </div>
        </div>
      </nav>

      <main className="m-auto w-fit pb-10">
        <h1 className="text-4xl font-medium pb-16">Edit item</h1>

        <div className="space-y-8">
          <ItemDetails />
          <ItemCategories />
          <ItemOptions />
          <ItemVariation />
        </div>
      </main>
    </div>
  );
};

export default EditItem;
