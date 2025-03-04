import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegFolder } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoIosCheckmark } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import {  EditCategory } from "@store/features/editing.product.features/productCategoriesEditSlice";
import { setEditCategories } from '../../../../store/features/editing.product.features/productCategoriesEditSlice'

interface Category {
  id: string;
  categoryName: string;
  displayName: string;
  children?: Category[];
}

const categoryList: Category[] = [
  {
    "id": "1",
    "categoryName": "men",
    "displayName": "Men",
    "children": [
      {
        "id": "1-1",
        "categoryName": "men_clothing",
        "displayName": "Men's Clothing",
        "children": [
          {
            "id": "1-1-1",
            "categoryName": "men_clothing_shirts",
            "displayName": "Men's Shirts",
            "children": []
          },
          {
            "id": "1-1-2",
            "categoryName": "men_clothing_tshirts",
            "displayName": "Men's T-Shirts",
            "children": []
          },
          {
            "id": "1-1-3",
            "categoryName": "men_clothing_pants",
            "displayName": "Men's Pants",
            "children": []
          }
        ]
      },
      {
        "id": "1-2",
        "categoryName": "men_footwear",
        "displayName": "Men's Footwear",
        "children": [
          {
            "id": "1-2-1",
            "categoryName": "men_footwear_sneakers",
            "displayName": "Men's Sneakers",
            "children": []
          },
          {
            "id": "1-2-2",
            "categoryName": "men_footwear_formal",
            "displayName": "Men's Formal Shoes",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "categoryName": "women",
    "displayName": "Women",
    "children": [
      {
        "id": "2-1",
        "categoryName": "women_clothing",
        "displayName": "Women's Clothing",
        "children": [
          {
            "id": "2-1-1",
            "categoryName": "women_clothing_dresses",
            "displayName": "Women's Dresses",
            "children": []
          },
          {
            "id": "2-1-2",
            "categoryName": "women_clothing_tops",
            "displayName": "Women's Tops",
            "children": []
          }
        ]
      },
      {
        "id": "2-2",
        "categoryName": "women_footwear",
        "displayName": "Women's Footwear",
        "children": [
          {
            "id": "2-2-1",
            "categoryName": "women_footwear_heels",
            "displayName": "Women's Heels",
            "children": []
          },
          {
            "id": "2-2-2",
            "categoryName": "women_footwear_flats",
            "displayName": "Women's Flats",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "categoryName": "kids",
    "displayName": "Kids",
    "children": [
      {
        "id": "3-1",
        "categoryName": "kids_clothing",
        "displayName": "Kids' Clothing",
        "children": [
          {
            "id": "3-1-1",
            "categoryName": "kids_clothing_shirts",
            "displayName": "Kids' Shirts",
            "children": []
          },
          {
            "id": "3-1-2",
            "categoryName": "kids_clothing_tshirts",
            "displayName": "Kids' T-Shirts",
            "children": []
          }
        ]
      },
      {
        "id": "3-2",
        "categoryName": "kids_footwear",
        "displayName": "Kids' Footwear",
        "children": [
          {
            "id": "3-2-1",
            "categoryName": "kids_footwear_sneakers",
            "displayName": "Kids' Sneakers",
            "children": []
          },
          {
            "id": "3-2-2",
            "categoryName": "kids_footwear_sandals",
            "displayName": "Kids' Sandals",
            "children": []
          }
        ]
      }
    ]
  }
]


//COMPONENT
const CategoryItem = ({
  category,
  setSelectedCategories,
  selectedCategories,
}: {
  category: Category;
  setSelectedCategories: React.Dispatch<React.SetStateAction<EditCategory[]>>;
  selectedCategories: EditCategory[];
}) => {
  const [isSubcategoriesShown, setIsSubcategoriesShown] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {

    for(const c of selectedCategories){
        if(c.id === category.id){
          setIsSelected(true)
          break;
        }
    }

  }, [category.id, selectedCategories]);

  const handleCategorySelection = () => {

    if(!isSelected){
      setSelectedCategories(prev => [...prev, category])
    }
    else{
      setSelectedCategories(prev => prev.filter(curr => curr.id !== category.id ))
    }

    setIsSelected((prev) => !prev);
  };

  return (
    <div className="">
      <div className="flex items-center space-x-3 p-2 ">
        <div
          onClick={() => setIsSubcategoriesShown((prev) => !prev)}
          className="cursor-pointer"
        >
          {isSubcategoriesShown ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div
          onClick={handleCategorySelection}
          className="flex-1 flex cursor-pointer h-full "
        >
          <p className="flex-1 ">{category.displayName}</p>
          <div
            className={`p h-5 w-5 text-6xl font-extrabold ${
              isSelected ? "bg-blue-500" : "border-[1.4px]"
            } flex justify-center items-center  rounded`}
          >
            {isSelected ? <IoIosCheckmark /> : ""}
          </div>
        </div>
      </div>

      <div className="pl-4">
        {isSubcategoriesShown &&
          category.children &&
          category.children.length > 0 &&
          category.children.map((chilCategory) => (
            <CategoryItem
              category={chilCategory}
              setSelectedCategories={setSelectedCategories}
              selectedCategories={selectedCategories}
            />
          ))}
      </div>
    </div>
  );
};

//PAGE
const ItemCategories = () => {
  const categories = useSelector(
    (state: RootState) => state.editCategory.categories
  ) as EditCategory[];

  const [selectedCategories, setSelectedCategories] = useState<EditCategory[]>([]);
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false);

  const handleDone = () => {
    // setSelectedCategories(() => {
    //   const arr = [...newSelectedCategories];

    //   return Array.from(new Set(arr));
    // });

    dispatch(setEditCategories(selectedCategories))

    setSelectedCategories([]);

    setIsEditing(false);
  };

  const handleCancel = () => {
    setSelectedCategories([]);
    setIsEditing(false);
  };

  return isEditing ? (
    //SELECET CATEGORY
    <div
      id="overlay"
      className="h-screen w-screen bg-black/75 absolute top-0 left-0 z-20 pt-16"
    >
      <div className="w-fit max-h-full mx-auto bg-black p-5 shadow shadow-zinc-700">
        <div className="flex justify-between p-5">
          <div className=" h-fit w-fit">
            <div
              onClick={handleCancel}
              className="bg-stone-700 p-2 rounded-sm cursor-pointer "
            >
              <RxCross2 />
            </div>
          </div>

          <div
            onClick={handleDone}
            className="py-2 w-28 text-center rounded-[6px] bg-blue-500 font-medium cursor-pointer"
          >
            Done
          </div>
        </div>

        <h2 className="text-2xl w-[500px] pt-2 pb-1">Categories</h2>
        <p>Select all the relavent Categories</p>

        <div className=" max-h-[60vh] overflow-scroll pt-2">
          {categoryList &&
            categoryList.map((category) => (
              <>
                <CategoryItem
                  category={category}
                  setSelectedCategories={setSelectedCategories}
                  selectedCategories={selectedCategories}
                />
                <span className="h-2 block"></span>
              </>
            ))}
        </div>
      </div>
    </div>
  ) : (
    //MAIN CONTAINER
    <section className="">
      <h2 className="text-2xl">Categorization</h2>

      <div className="space-x-4 pt-4 flex items-center">
        <div className="text-2xl">
          <FaRegFolder />
        </div>
        <div className="flex-1">
          <h3>Categories</h3>
          <div className="flex space-x-2 text-sm text-white/75 max-w-[500px] flex-wrap">
            {categories.map((cat) =>
               <p>{cat.displayName},</p> 
            )}
          </div>
        </div>
        <button
          className="text-blue-500"
          onClick={() => {
            setSelectedCategories(categories);
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </div>
    </section>
  );
};

export default ItemCategories;
