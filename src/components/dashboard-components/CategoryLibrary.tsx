// import { Dispatch, SetStateAction, use, useState } from "react";
// import ActionButton from "../common/ActionButton";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { IoIosCheckmarkCircle } from "react-icons/io";

// type Category = {
//   id: string;
//   name: string;
//   subcategories?: Category[];
// };

// const CategoryItem: React.FC<{
//   category: Category;
//   type: number;
//   selectedParentCategory?: string;
//   setSelectedParentCategory?: Dispatch<SetStateAction<string>>;
// }> = ({
//   category,
//   type,
//   selectedParentCategory,
//   setSelectedParentCategory,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   return (
//     <li className="mb-2">
//       <div className="flex items-center justify-between">
//         <div
//           className="flex items-center cursor-pointer"
//           onClick={handleToggle}
//         >
//           {category.subcategories && category.subcategories.length > 0 && (
//             <div className="mr-2">
//               {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
//             </div>
//           )}
//           <span className="text-lg ">{category.name}</span>
//         </div>

//         {type === 1 ? (
//           <p className="text-lg pr-3">{category?.subcategories?.length || 0}</p>
//         ) : (
//           <div
//             onClick={() =>
//               setSelectedParentCategory &&
//               setSelectedParentCategory(category.id)
//             }
//             className="h-fit w-fit min-h-5 min-w-5 rounded-full text-blue-500 border-2 border-white
//           "
//           >
//             {selectedParentCategory === category.id ? (
//               <IoIosCheckmarkCircle />
//             ) : (
//               ""
//             )}
//           </div>
//         )}
//       </div>

//       {category.subcategories && isExpanded && (
//         <ul className="ml-5  pl-3">
//           <CategoryList
//             categories={category.subcategories}
//             type={type}
//             selectedParentCategory={selectedParentCategory}
//             setSelectedParentCategory={setSelectedParentCategory}
//           />
//         </ul>
//       )}
//     </li>
//   );
// };

// const CategoryList: React.FC<{
//   categories: Category[];
//   type: number;
//   selectedParentCategory?: string;
//   setSelectedParentCategory?: Dispatch<SetStateAction<string>>;
// }> = ({
//   categories,
//   type,
//   selectedParentCategory,
//   setSelectedParentCategory,
// }) => {
//   return (
//     <ul className="list-none">
//       {categories.map((category) => (
//         <CategoryItem
//           key={category.id}
//           category={category}
//           type={type}
//           selectedParentCategory={selectedParentCategory}
//           setSelectedParentCategory={setSelectedParentCategory}
//         />
//       ))}
//     </ul>
//   );
// };

// const CreateCategory = ({
//   setIsCreatingCategory,
//   categoryList,
// }: {
//   setIsCreatingCategory: Dispatch<SetStateAction<boolean>>;
//   categoryList: Category[];
// }) => {
//   const [categoryName, setCategoryName] = useState("");
//   const [isSelectingCategory, setIsselectingCategory] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(true);

//   return (
//     <div className="space-y-4">
//       <header className="flex justify-between">
//         <button
//           onClick={() => setIsCreatingCategory(false)}
//           className="text-xl bg-stone-700 p-3 rounded-sm"
//         >
//           <RxCross2 />
//         </button>
//         <ActionButton className="" handleFn={() => {}} text="Save" />
//       </header>
//       <h2 className="text-2xl">Create category</h2>

//       <div>
//         <h3 className="mb-1">Category details</h3>
//         <input
//           type="text"
//           placeholder="Name"
//           value={categoryName}
//           onChange={(e) => setCategoryName(e.target.value)}
//           className="border border-white rounded-md px-2 py-3 w-full"
//         />
//         <div>
//           <div>
//             <div className="flex justify-between">
//               <h4 className="">Parent category</h4>
//               <button
//                 onClick={() => setIsselectingCategory((prev) => !prev)}
//                 className={`${
//                   isSelectingCategory ? "text-red-500" : "text-blue-500"
//                 }`}
//               >
//                 {isSelectingCategory ? "Cancel" : "Select"}
//               </button>
//             </div>
//             {isSelectingCategory && (
//               <CategoryList categories={categoryList} type={2} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CategoryLibrary = () => {
//   const [isCreatingCategory, setIsCreatingCategory] = useState(true);
//   const [selectedParentCategory, setSelectedParentCategory] = useState("");

//   const categoryList: Category[] = [
//     {
//       id: "1",
//       name: "Electronics",
//       subcategories: [
//         {
//           id: "1-1",
//           name: "Mobile Phones",
//           subcategories: [
//             { id: "1-1-1", name: "Smartphones" },
//             { id: "1-1-2", name: "Feature Phones" },
//           ],
//         },
//         {
//           id: "1-2",
//           name: "Laptops",
//           subcategories: [
//             { id: "1-2-1", name: "Gaming Laptops" },
//             { id: "1-2-2", name: "Ultrabooks" },
//           ],
//         },
//         {
//           id: "1-3",
//           name: "Cameras",
//           subcategories: [
//             { id: "1-3-1", name: "DSLR" },
//             { id: "1-3-2", name: "Mirrorless" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "2",
//       name: "Clothing",
//       subcategories: [
//         {
//           id: "2-1",
//           name: "Men",
//           subcategories: [
//             { id: "2-1-1", name: "Shirts" },
//             { id: "2-1-2", name: "Jeans" },
//           ],
//         },
//         {
//           id: "2-2",
//           name: "Women",
//           subcategories: [
//             { id: "2-2-1", name: "Dresses" },
//             { id: "2-2-2", name: "Tops" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "3",
//       name: "Home & Kitchen",
//       subcategories: [
//         {
//           id: "3-1",
//           name: "Furniture",
//           subcategories: [
//             { id: "3-1-1", name: "Sofas" },
//             { id: "3-1-2", name: "Beds" },
//           ],
//         },
//         {
//           id: "3-2",
//           name: "Kitchen Appliances",
//           subcategories: [
//             { id: "3-2-1", name: "Microwaves" },
//             { id: "3-2-2", name: "Refrigerators" },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="p-10 space-y-5">
//       {isCreatingCategory && (
//         <div className="fixed top-0 left-0 h-screen w-screen bg-black/40 flex items-center justify-center">
//           <CreateCategory
//             setIsCreatingCategory={setIsCreatingCategory}
//             categoryList={categoryList}
//           />
//         </div>
//       )}
//       <div className="flex justify-between items-center mb-10">
//         <p className="text-2xl">Categories</p>
//         <ActionButton
//           className=""
//           handleFn={() => {
//             setIsCreatingCategory(true);
//           }}
//           text="Create category"
//         />
//       </div>
//       <div className="flex justify-between text-xl">
//         <p>Name</p>
//         <p>Items</p>
//       </div>
//       {categoryList && categoryList.length > 0 && (
//         <CategoryList
//           categories={categoryList}
//           type={1}
//           selectedParentCategory={selectedParentCategory}
//           setSelectedParentCategory={setSelectedParentCategory}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryLibrary;

// <------------------------------------------------------------------------------------>

// import { Dispatch, SetStateAction, useState } from "react";
// import ActionButton from "../common/ActionButton";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { IoIosCheckmarkCircle } from "react-icons/io";

// type Category = {
//   id: string;
//   name: string;
//   subcategories?: Category[];
// };

// const CategoryItem: React.FC<{
//   category: Category;
//   type: number;
//   selectedParentCategory: string;
//   setSelectedParentCategory: Dispatch<SetStateAction<string>>;
// }> = ({
//   category,
//   type,
//   selectedParentCategory,
//   setSelectedParentCategory,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isEditing, setIsEditing] = useState(true)
//   const [categoryToEdit, setCategoryToEdit] = useState<Category>()

//   const handleToggle = () => {
//     setIsExpanded((prev) => !prev);
//   };

//   const handleCategorySelect = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent triggering the expansion
//     console.log(selectedParentCategory);
//     if (!selectedParentCategory || selectedParentCategory.length === 0) {
//         setSelectedParentCategory(category.id);
//     } else {
//         setSelectedParentCategory("");
//     }
//   };

//   return (
//     <li className="mb-2">
//         {isEditing && (
//         <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center z-50">
//           <EditCategory
//             categoryToEdit={categoryToEdit}
//             setIsEditing={setIsEditing}
//           />
//         </div>
//       )}
//       <div className="flex items-center justify-between">
//         <div
//           className="flex items-center cursor-pointer"
//         >
//           {category.subcategories && category.subcategories.length > 0 && (
//             <div
//             onClick={handleToggle}
//              className="mr-2">
//               {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
//             </div>
//           )}
//           <span
//           onClick={() => {
//             setIsEditing(true)
//             setCategoryToEdit(category)
//         }}
//            className="text-lg">{category.name}</span>
//         </div>

//         {type === 1 ? (
//           <p className="text-lg pr-3">{category?.subcategories?.length || 0}</p>
//         ) : (
//           <div
//             onClick={handleCategorySelect}
//             className="h-5 w-5 rounded-full flex items-center justify-center cursor-pointer border-[1.2px] border-white"
//           >
//             {selectedParentCategory === category.id && (
//               <IoIosCheckmarkCircle className="text-blue-500 text-3xl" />
//             )}
//           </div>
//         )}
//       </div>

//       {category.subcategories && isExpanded && (
//         <ul className="ml-5 pl-3 mt-2">
//           <CategoryList
//             categories={category.subcategories}
//             type={type}
//             selectedParentCategory={selectedParentCategory}
//             setSelectedParentCategory={setSelectedParentCategory}
//           />
//         </ul>
//       )}
//     </li>
//   );
// };

// const CategoryList: React.FC<{
//   categories: Category[];
//   type: number;
//   selectedParentCategory: string;
//   setSelectedParentCategory: Dispatch<SetStateAction<string>>;
// }> = ({
//   categories,
//   type,
//   selectedParentCategory,
//   setSelectedParentCategory,
// }) => {
//   return (
//     <ul className="list-none">
//       {categories.map((category) => (
//         <CategoryItem
//           key={category.id}
//           category={category}
//           type={type}
//           selectedParentCategory={selectedParentCategory}
//           setSelectedParentCategory={setSelectedParentCategory}
//         />
//       ))}
//     </ul>
//   );
// };

// const CreateCategory = ({
//   setIsCreatingCategory,
//   categoryList,
//   selectedParentCategory,
//   setSelectedParentCategory,
// }: {
//   setIsCreatingCategory: Dispatch<SetStateAction<boolean>>;
//   categoryList: Category[];
//   selectedParentCategory: string;
//   setSelectedParentCategory: Dispatch<SetStateAction<string>>;
// }) => {
//   const [categoryName, setCategoryName] = useState("");
//   const [isSelectingCategory, setIsSelectingCategory] = useState(false);

//   const handleSave = () => {
//     if (!categoryName.trim()) {
//       alert("Please enter a category name");
//       return;
//     }

//     // Here you would add logic to save the new category
//     // For example, create a new category object and update state

//     // Close the modal after saving
//     setIsCreatingCategory(false);
//   };

//   return (
//     <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
//       <header className="flex justify-between items-center">
//         <button
//           onClick={() => setIsCreatingCategory(false)}
//           className="text-xl bg-stone-700 p-2 rounded-md hover:bg-stone-600"
//         >
//           <RxCross2 />
//         </button>
//         <ActionButton className="" handleFn={handleSave} text="Save" />
//       </header>
//       <h2 className="text-2xl font-bold">Create category</h2>

//       <div className="space-y-4">
//         <div>
//           <h3 className="mb-2 font-medium">Category details</h3>
//           <input
//             type="text"
//             placeholder="Name"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//             className="border border-white rounded-md px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mt-4">
//           <div className="flex justify-between items-center mb-2">
//             <h4 className="font-medium">Parent category</h4>
//             <button
//               onClick={() => setIsSelectingCategory((prev) => !prev)}
//               className={`${
//                 isSelectingCategory ? "text-green-500" : "text-blue-500"
//               }`}
//             >
//               {isSelectingCategory ? "Done" : "Select"}
//             </button>
//           </div>

//           {!isSelectingCategory && selectedParentCategory ? (
//             <div className="text-gray-300 mb-2">
//                {categoryList.find(cat => cat.id === selectedParentCategory)?.name || 
//                          categoryList.flatMap(cat => cat.subcategories || []).find(cat => cat.id === selectedParentCategory)?.name ||
//                          categoryList.flatMap(cat => (cat.subcategories || []).flatMap(subcat => subcat.subcategories || [])).find(cat => cat.id === selectedParentCategory)?.name}
//             </div>
//           ) : (
//             <div className="text-gray-300">No parent category is selected</div>
//           )}

//           {isSelectingCategory && (
//             <div className="max-h-60 overflow-y-auto border border-gray-700 rounded p-2">
//               <CategoryList
//                 categories={categoryList}
//                 type={2}
//                 selectedParentCategory={selectedParentCategory}
//                 setSelectedParentCategory={setSelectedParentCategory}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const EditCategory = ({
//     setIsEditing,
//     categoryToEdit
// }: {
//     setIsEditing: Dispatch<SetStateAction<boolean>>;
//     categoryToEdit: Category;
// }) => {
//   const [categoryName, setCategoryName] = useState("");
//   const [isSelectingCategory, setIsSelectingCategory] = useState(false);

//   const handleSave = () => {
//     if (!categoryName.trim()) {
//       alert("Please enter a category name");
//       return;
//     }
//   };

//   return (
//     <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
//       <header className="flex justify-between items-center">
//         <button
//           onClick={() => setIsEditing(false)}
//           className="text-xl bg-stone-700 p-2 rounded-md hover:bg-stone-600"
//         >
//           <RxCross2 />
//         </button>
//         <ActionButton className="" handleFn={handleSave} text="Save" />
//       </header>
//       <h2 className="text-2xl font-bold">Create category</h2>

//       <div className="space-y-4">
//         <div>
//           <h3 className="mb-2 font-medium">Category details</h3>
//           <input
//             type="text"
//             placeholder="Name"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//             className="border border-white rounded-md px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mt-4">
//           <div className="flex justify-between items-center mb-2">
//             <h4 className="font-medium">Parent category</h4>
//             <button
//               onClick={() => setIsSelectingCategory((prev) => !prev)}
//               className={`${
//                 isSelectingCategory ? "text-green-500" : "text-blue-500"
//               }`}
//             >
//               {isSelectingCategory ? "Done" : "Select"}
//             </button>
//           </div>

//             <div className="text-gray-300">No parent category is selected</div>

//           {isSelectingCategory && (
//             <div className="max-h-60 overflow-y-auto border border-gray-700 rounded p-2">
//               <CategoryList
//                 categories={categoryList}
//                 type={2}
//                 selectedParentCategory={selectedParentCategory}
//                 setSelectedParentCategory={setSelectedParentCategory}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const CategoryLibrary = () => {
//   const [isCreatingCategory, setIsCreatingCategory] = useState(false);
//   const [selectedParentCategory, setSelectedParentCategory] = useState("");

//   const categoryList: Category[] = [
//     {
//       id: "1",
//       name: "Electronics",
//       subcategories: [
//         {
//           id: "1-1",
//           name: "Mobile Phones",
//           subcategories: [
//             { id: "1-1-1", name: "Smartphones" },
//             { id: "1-1-2", name: "Feature Phones" },
//           ],
//         },
//         {
//           id: "1-2",
//           name: "Laptops",
//           subcategories: [
//             { id: "1-2-1", name: "Gaming Laptops" },
//             { id: "1-2-2", name: "Ultrabooks" },
//           ],
//         },
//         {
//           id: "1-3",
//           name: "Cameras",
//           subcategories: [
//             { id: "1-3-1", name: "DSLR" },
//             { id: "1-3-2", name: "Mirrorless" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "2",
//       name: "Clothing",
//       subcategories: [
//         {
//           id: "2-1",
//           name: "Men",
//           subcategories: [
//             { id: "2-1-1", name: "Shirts" },
//             { id: "2-1-2", name: "Jeans" },
//           ],
//         },
//         {
//           id: "2-2",
//           name: "Women",
//           subcategories: [
//             { id: "2-2-1", name: "Dresses" },
//             { id: "2-2-2", name: "Tops" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "3",
//       name: "Home & Kitchen",
//       subcategories: [
//         {
//           id: "3-1",
//           name: "Furniture",
//           subcategories: [
//             { id: "3-1-1", name: "Sofas" },
//             { id: "3-1-2", name: "Beds" },
//           ],
//         },
//         {
//           id: "3-2",
//           name: "Kitchen Appliances",
//           subcategories: [
//             { id: "3-2-1", name: "Microwaves" },
//             { id: "3-2-2", name: "Refrigerators" },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="p-10 space-y-5">
//       {isCreatingCategory && (
//         <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center z-50">
//           <CreateCategory
//             setIsCreatingCategory={setIsCreatingCategory}
//             categoryList={categoryList}
//             selectedParentCategory={selectedParentCategory}
//             setSelectedParentCategory={setSelectedParentCategory}
//           />
//         </div>
//       )}
//       <div className="flex justify-between items-center mb-10">
//         <p className="text-2xl font-bold">Categories</p>
//         <ActionButton
//           className="hover:bg-blue-600 transition-colors"
//           handleFn={() => {
//             setIsCreatingCategory(true);
//           }}
//           text="Create category"
//         />
//       </div>
//       <div className="flex justify-between text-xl font-medium border-b border-gray-700 pb-2">
//         <p>Name</p>
//         <p>Items</p>
//       </div>
//       {categoryList && categoryList.length > 0 && (
//         <CategoryList
//           categories={categoryList}
//           type={1}
//           selectedParentCategory={selectedParentCategory}
//           setSelectedParentCategory={setSelectedParentCategory}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryLibrary;


import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ActionButton from "../common/ActionButton";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Category = {
  id: string;
  name: string;
  subcategories?: Category[];
  parentId?: string;
};

const CategoryItem: React.FC<{
  category: Category;
  type: number;
  selectedParentCategory: string;
  setSelectedParentCategory: Dispatch<SetStateAction<string>>;
  onEditCategory: (category: Category) => void;
}> = ({
  category,
  type,
  selectedParentCategory,
  setSelectedParentCategory,
  onEditCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleCategorySelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedParentCategory && selectedParentCategory === category.id) {
        setSelectedParentCategory("");
    } else {
        setSelectedParentCategory(category.id);
    }
  };

  return (
    <li className="mb-1">
      <div className="flex items-center justify-between p-2 hover:bg-blue-500/80">
        <div
          className="flex-1 flex items-center cursor-pointer"
        >
          {category.subcategories && category.subcategories.length > 0 && (
            <div
              onClick={handleToggle}
              className="mr-2"
            >
              {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
            </div>
          )}
          <span
            onClick={() => onEditCategory(category)}
            className="flex-1 text-lg"
          >
            {category.name}
          </span>
        </div>

        {type === 1 ? (
          <p className="text-lg pr-3">{category?.subcategories?.length || 0}</p>
        ) : (
          <div
            onClick={handleCategorySelect}
            className="h-5 w-5 rounded-full flex items-center justify-center cursor-pointer border-[1.2px] border-white"
          >
            {selectedParentCategory === category.id && (
              <IoIosCheckmarkCircle className="text-blue-500 text-3xl" />
            )}
          </div>
        )}
      </div>

      {category.subcategories && isExpanded && (
        <ul className="ml-5 pl-3 mt-1">
          <CategoryList
            categories={category.subcategories}
            type={type}
            selectedParentCategory={selectedParentCategory}
            setSelectedParentCategory={setSelectedParentCategory}
            onEditCategory={onEditCategory}
          />
        </ul>
      )}
    </li>
  );
};

const CategoryList: React.FC<{
  categories: Category[];
  type: number;
  selectedParentCategory: string;
  setSelectedParentCategory: Dispatch<SetStateAction<string>>;
  onEditCategory: (category: Category) => void;
}> = ({
  categories,
  type,
  selectedParentCategory,
  setSelectedParentCategory,
  onEditCategory,
}) => {
  return (
    <ul className="list-none">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          type={type}
          selectedParentCategory={selectedParentCategory}
          setSelectedParentCategory={setSelectedParentCategory}
          onEditCategory={onEditCategory}
        />
      ))}
    </ul>
  );
};

// Helper function to find a category by ID in the category tree
const findCategoryById = (categories: Category[], id: string): Category | null => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.subcategories) {
      const found = findCategoryById(category.subcategories, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

// Helper function to find parent category ID
const findParentCategoryId = (categories: Category[], id: string, parentId?: string): string | undefined => {
  for (const category of categories) {
    if (category.id === id) {
      return parentId;
    }
    if (category.subcategories) {
      const found = findParentCategoryId(category.subcategories, id, category.id);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
};

const CreateCategory = ({
  setIsCreatingCategory,
  categoryList,
  selectedParentCategory,
  setSelectedParentCategory,
  onSaveCategory,
}: {
  setIsCreatingCategory: Dispatch<SetStateAction<boolean>>;
  categoryList: Category[];
  selectedParentCategory: string;
  setSelectedParentCategory: Dispatch<SetStateAction<string>>;
  onSaveCategory: (name: string, parentId?: string) => void;
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);

  const handleSave = () => {
    if (!categoryName.trim()) {
      alert("Please enter a category name");
      return;
    }

    onSaveCategory(categoryName, selectedParentCategory || undefined);
    setIsCreatingCategory(false);
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
      <header className="flex justify-between items-center">
        <button
          onClick={() => setIsCreatingCategory(false)}
          className="text-xl bg-stone-700 p-2 rounded-md hover:bg-stone-600"
        >
          <RxCross2 />
        </button>
        <ActionButton className="" handleFn={handleSave} text="Save" />
      </header>
      <h2 className="text-2xl font-bold">Create category</h2>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-medium">Category details</h3>
          <input
            type="text"
            placeholder="Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border border-white rounded-md px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Parent category</h4>
            <button
              onClick={() => setIsSelectingCategory((prev) => !prev)}
              className={`${
                isSelectingCategory ? "text-green-500" : "text-blue-500"
              }`}
            >
              {isSelectingCategory ? "Done" : "Select"}
            </button>
          </div>

          {!isSelectingCategory && selectedParentCategory ? (
            <div className="text-gray-300 mb-2">
              {categoryList.find(cat => cat.id === selectedParentCategory)?.name || 
              categoryList.flatMap(cat => cat.subcategories || []).find(cat => cat.id === selectedParentCategory)?.name ||
              categoryList.flatMap(cat => (cat.subcategories || []).flatMap(subcat => subcat.subcategories || [])).find(cat => cat.id === selectedParentCategory)?.name}
            </div>
          ) : (
            <div className="text-gray-300">No parent category is selected</div>
          )}

          {isSelectingCategory && (
            <div className="max-h-60 overflow-y-auto border border-gray-700 rounded p-2">
              <CategoryList
                categories={categoryList}
                type={2}
                selectedParentCategory={selectedParentCategory}
                setSelectedParentCategory={setSelectedParentCategory}
                onEditCategory={() => {}}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EditCategory = ({
  setIsEditing,
  categoryToEdit,
  categoryList,
  onUpdateCategory,
  onDeleteCategory,
}: {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  categoryToEdit: Category;
  categoryList: Category[];
  onUpdateCategory: (id: string, name: string, parentId?: string) => void;
  onDeleteCategory: (id: string) => void;
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);
  const [selectedParentCategory, setSelectedParentCategory] = useState("");

  useEffect(() => {
    if (categoryToEdit) {
      setCategoryName(categoryToEdit.name);
      
      // Find the parent category ID
      const parentId = findParentCategoryId(categoryList, categoryToEdit.id);
      setSelectedParentCategory(parentId || "");
    }
  }, [categoryToEdit, categoryList]);

  const handleSave = () => {
    if (!categoryName.trim()) {
      alert("Please enter a category name");
      return;
    }

    onUpdateCategory(categoryToEdit.id, categoryName, selectedParentCategory || undefined);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      onDeleteCategory(categoryToEdit.id);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
      <header className="flex justify-between items-center">
        <button
          onClick={() => setIsEditing(false)}
          className="text-xl bg-stone-700 p-2 rounded-md hover:bg-stone-600"
        >
          <RxCross2 />
        </button>
        <ActionButton className="" handleFn={handleSave} text="Save" />
      </header>
      <h2 className="text-2xl font-bold">Edit category</h2>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 font-medium">Category details</h3>
          <input
            type="text"
            placeholder="Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border border-white rounded-md px-4 py-3 w-full bg-transparent focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Parent category</h4>
            <button
              onClick={() => setIsSelectingCategory((prev) => !prev)}
              className={`${
                isSelectingCategory ? "text-green-500" : "text-blue-500"
              }`}
            >
              {isSelectingCategory ? "Done" : "Select"}
            </button>
          </div>

          {!isSelectingCategory && selectedParentCategory ? (
            <div className="text-gray-300 mb-2">
              {categoryList.find(cat => cat.id === selectedParentCategory)?.name || 
              categoryList.flatMap(cat => cat.subcategories || []).find(cat => cat.id === selectedParentCategory)?.name ||
              categoryList.flatMap(cat => (cat.subcategories || []).flatMap(subcat => subcat.subcategories || [])).find(cat => cat.id === selectedParentCategory)?.name}
            </div>
          ) : (
            <div className="text-gray-300">No parent category is selected</div>
          )}

          {isSelectingCategory && (
            <div className="max-h-60 overflow-y-auto border border-gray-700 rounded p-2">
              <CategoryList
                categories={categoryList.filter(cat => cat.id !== categoryToEdit.id)}
                type={2}
                selectedParentCategory={selectedParentCategory}
                setSelectedParentCategory={setSelectedParentCategory}
                onEditCategory={() => {}}
              />
            </div>
          )}
        </div>
        
        <div className="pt-4 border-t border-gray-700">
          <button 
            onClick={handleDelete}
            className="text-red-500 hover:text-red-400"
          >
            Delete category
          </button>
        </div>
      </div>
    </div>
  );
};

const CategoryLibrary = () => {
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState<Category | null>(null);
  const [selectedParentCategory, setSelectedParentCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Electronics",
      subcategories: [
        {
          id: "1-1",
          name: "Mobile Phones",
          subcategories: [
            { id: "1-1-1", name: "Smartphones" },
            { id: "1-1-2", name: "Feature Phones" },
          ],
        },
        {
          id: "1-2",
          name: "Laptops",
          subcategories: [
            { id: "1-2-1", name: "Gaming Laptops" },
            { id: "1-2-2", name: "Ultrabooks" },
          ],
        },
        {
          id: "1-3",
          name: "Cameras",
          subcategories: [
            { id: "1-3-1", name: "DSLR" },
            { id: "1-3-2", name: "Mirrorless" },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Clothing",
      subcategories: [
        {
          id: "2-1",
          name: "Men",
          subcategories: [
            { id: "2-1-1", name: "Shirts" },
            { id: "2-1-2", name: "Jeans" },
          ],
        },
        {
          id: "2-2",
          name: "Women",
          subcategories: [
            { id: "2-2-1", name: "Dresses" },
            { id: "2-2-2", name: "Tops" },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Home & Kitchen",
      subcategories: [
        {
          id: "3-1",
          name: "Furniture",
          subcategories: [
            { id: "3-1-1", name: "Sofas" },
            { id: "3-1-2", name: "Beds" },
          ],
        },
        {
          id: "3-2",
          name: "Kitchen Appliances",
          subcategories: [
            { id: "3-2-1", name: "Microwaves" },
            { id: "3-2-2", name: "Refrigerators" },
          ],
        },
      ],
    },
  ]);

  const handleEditCategory = (category: Category) => {
    setCategoryToEdit(category);
    setIsEditing(true);
  };

  // Function to generate a new unique ID
  const generateUniqueId = () => {
    return Date.now().toString();
  };

  // Function to add a new category
  const handleSaveNewCategory = (name: string, parentId?: string) => {
    const newCategory: Category = {
      id: generateUniqueId(),
      name,
      subcategories: [],
    };

    if (!parentId) {
      // Add as a top-level category
      setCategories([...categories, newCategory]);
    } else {
      // Add as a subcategory
      const updatedCategories = [...categories];
      
      // Helper function to add subcategory to the correct parent
      const addSubcategory = (cats: Category[], parentId: string, newCat: Category): boolean => {
        for (let i = 0; i < cats.length; i++) {
          if (cats[i]?.id === parentId) {
            cats[i].subcategories = cats[i].subcategories ?? [];
            cats[i].subcategories!.push(newCat);
            return true;
          }
          
          if (cats[i].subcategories) {
            const subcategories = cats[i].subcategories ?? [];
            if (addSubcategory(subcategories, parentId, newCat)) {
              return true;
            }
          }
        }
        return false;
      };
      
      addSubcategory(updatedCategories, parentId, newCategory);
      setCategories(updatedCategories);
    }
    
    // Reset the selected parent category
    setSelectedParentCategory("");
  };

  // Function to update an existing category
  const handleUpdateCategory = (id: string, name: string, parentId?: string) => {
    // Helper function to update category tree
    const updateCategoryTree = (categories: Category[], id: string, name: string): Category[] => {
      return categories.map(category => {
        if (category.id === id) {
          return { ...category, name };
        }
        
        if (category.subcategories) {
          return {
            ...category,
            subcategories: updateCategoryTree(category.subcategories, id, name)
          };
        }
        
        return category;
      });
    };
    
    // Update the category name
    let updatedCategories = updateCategoryTree([...categories], id, name);
    
    // If parent category changed, we need to move the category
    if (categoryToEdit) {
      const currentParentId = findParentCategoryId(categories, id);
      
      if (currentParentId !== parentId) {
        // Find the category to move
        const categoryToMove = findCategoryById(updatedCategories, id);
        
        if (categoryToMove) {
          // Remove the category from its current position
          updatedCategories = removeCategory(updatedCategories, id);
          
          if (!parentId) {
            // Move to top level
            updatedCategories.push(categoryToMove);
          } else {
            // Move to new parent
            const addToParent = (cats: Category[], parentId: string, catToAdd: Category): boolean => {
              for (let i = 0; i < cats.length; i++) {
                if (cats[i].id === parentId) {
                  cats[i].subcategories = cats[i].subcategories || [];
                  cats[i].subcategories!.push(catToAdd);
                  return true;
                }
                
                if (cats[i].subcategories?.length ) {
                    const subcategories = cats[i].subcategories ?? []
                  if (addToParent(subcategories, parentId, catToAdd)) {
                    return true;
                  }
                }
              }
              return false;
            };
            
            addToParent(updatedCategories, parentId, categoryToMove);
          }
        }
      }
    }
    
    setCategories(updatedCategories);
  };

  // Function to remove a category from the tree
  const removeCategory = (categories: Category[], id: string): Category[] => {
    return categories.filter(category => {
      if (category.id === id) {
        return false;
      }
      
      if (category.subcategories) {
        category.subcategories = removeCategory(category.subcategories, id);
      }
      
      return true;
    });
  };

  // Function to delete a category
  const handleDeleteCategory = (id: string) => {
    setCategories(removeCategory([...categories], id));
  };

  return (
    <div className="p-10 ">
      {isCreatingCategory && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center z-50">
          <CreateCategory
            setIsCreatingCategory={setIsCreatingCategory}
            categoryList={categories}
            selectedParentCategory={selectedParentCategory}
            setSelectedParentCategory={setSelectedParentCategory}
            onSaveCategory={handleSaveNewCategory}
          />
        </div>
      )}
      
      {isEditing && categoryToEdit && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center z-50">
          <EditCategory
            categoryToEdit={categoryToEdit}
            setIsEditing={setIsEditing}
            categoryList={categories}
            onUpdateCategory={handleUpdateCategory}
            onDeleteCategory={handleDeleteCategory}
          />
        </div>
      )}
      
      <div className="flex justify-between items-center mb-10">
        <p className="text-2xl font-bold">Categories</p>
        <ActionButton
          className="hover:bg-blue-600 transition-colors"
          handleFn={() => {
            setIsCreatingCategory(true);
            setSelectedParentCategory(""); // Reset selected parent when creating new
          }}
          text="Create category"
        />
      </div>
      <div className="flex justify-between text-xl font-medium border-b border-gray-500 pb-5 mb-4">
        <p>Name</p>
        <p>Items</p>
      </div>
      {categories && categories.length > 0 && (
        <CategoryList
          categories={categories}
          type={1}
          selectedParentCategory={selectedParentCategory}
          setSelectedParentCategory={setSelectedParentCategory}
          onEditCategory={handleEditCategory}
        />
      )}
    </div>
  );
};

export default CategoryLibrary;
