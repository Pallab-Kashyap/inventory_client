import ActionButton from "../../common/ActionButton";
import { RiDeleteBin6Line } from "react-icons/ri";

const ImageLibrary = () => {
  const imageList = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      name: "photography",
    },
  ];

  const handleDelete = (id: string) => {
    console.log(id);
  }

  return (
    <div className="space-y-5 p-10">
      <h1 className="text-2xl">Image library</h1>
      <div className="flex justify-between items-center">
        <p>Manage all your images here</p>
        <ActionButton className="" handleFn={() => {}} text="Upload" />
      </div>

      <div>
        {imageList &&
          imageList.length > 0 &&
          imageList.map((img) => (
            <div className="text-center w-fit">
              <div className="relative group h-36 w-28  border-2 border-white/60 rounded-lg flex">
                <button
                  onClick={() => handleDelete(img.id)}
                className="absolute top-2 right-2 hidden group-hover:block"><RiDeleteBin6Line /></button>
                <img src={img.url} alt={img.name} className="object-contain" />
              </div>
              <p>{img.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageLibrary;
