import { Link, } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
// import { useRef } from "react";

const EditItem = () => {
//   const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
//   const [images, setImages] = useState("");
//   const imageInputRef = useRef<HTMLInputElement | undefined>();

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

      <main className="mx-auto">
        <h1 className="text-2xl">Edit item</h1>

        <section>
          <h2 className="text-xl">Details</h2>

          <div className="flex flex-col space-y-3 pt-4">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-white/35 w-72 py-1 px-3"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-white/35 w-72 py-1 px-3"
            />
            <label htmlFor="file">Upload image</label>
            <input
            //   ref={imageInputRef}
              type="file"
              name="file"
              id="file"
            //   hidden
            />
          </div>
        </section>

        <section>
            <h2>Categorization</h2>
        </section>
      </main>
    </div>
  );
};

export default EditItem;
