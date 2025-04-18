import { useEffect, useMemo, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  addEditOption,
  EditOption,
  OptionValues,
  updateEditOption,
} from "../../../../store/features/editing.product.features/productOptionsEditSlice";
import { setVariations, Variation } from "../../../../store/features/editing.product.features/productVariationsEditSlice";

// interface OptionValues {
//   optionValueId: string;
//   optionValue: string;
// }

// interface Option {
//   optionId: string;
//   optionName: string;
//   displayName: string;
//   optionValues: OptionValues[];
// }

const ItemOptions = () => {
  const optionContext = useSelector(
    (state: RootState) => state.editOptions.selectedOptions
  );

  const variationList = useSelector(
    (state: RootState) => state.editVariations.variations
  );

  const dispatch = useDispatch();
  console.log(optionContext);

  const [isSelectingOption, setIsSelectingOption] = useState(false);

  const [selectedOption, setSelectedOption] = useState<EditOption | null>(null);
  const [selectedOptionValues, setSelectedOptionValues] = useState<
    OptionValues[]
  >([]);

  const options: EditOption[] = useMemo(() => {
    return [
      {
        optionId: "1",
        optionName: "size",
        displayName: "Size",
        optionValues: [
          { optionValueId: "1-1", optionValue: "S" },
          { optionValueId: "1-2", optionValue: "M" },
          { optionValueId: "1-3", optionValue: "L" },
          { optionValueId: "1-4", optionValue: "XL" },
          { optionValueId: "1-5", optionValue: "XXL" },
        ],
      },
      {
        optionId: "2",
        optionName: "color",
        displayName: "Color",
        optionValues: [
          { optionValueId: "2-1", optionValue: "Red" },
          { optionValueId: "2-2", optionValue: "Blue" },
          { optionValueId: "2-3", optionValue: "Green" },
          { optionValueId: "2-4", optionValue: "Black" },
          { optionValueId: "2-5", optionValue: "White" },
        ],
      },
      {
        optionId: "3",
        optionName: "material",
        displayName: "Material",
        optionValues: [
          { optionValueId: "3-1", optionValue: "Cotton" },
          { optionValueId: "3-2", optionValue: "Polyester" },
          { optionValueId: "3-3", optionValue: "Denim" },
          { optionValueId: "3-4", optionValue: "Leather" },
        ],
      },
      {
        optionId: "4",
        optionName: "fit",
        displayName: "Fit",
        optionValues: [
          { optionValueId: "4-1", optionValue: "Slim Fit" },
          { optionValueId: "4-2", optionValue: "Regular Fit" },
          { optionValueId: "4-3", optionValue: "Loose Fit" },
        ],
      },
      {
        optionId: "5",
        optionName: "sleeve_length",
        displayName: "Sleeve Length",
        optionValues: [
          { optionValueId: "5-1", optionValue: "Short Sleeve" },
          { optionValueId: "5-2", optionValue: "Long Sleeve" },
          { optionValueId: "5-3", optionValue: "Sleeveless" },
        ],
      },
      {
        optionId: "6",
        optionName: "neck_type",
        displayName: "Neck Type",
        optionValues: [
          { optionValueId: "6-1", optionValue: "Round Neck" },
          { optionValueId: "6-2", optionValue: "V-Neck" },
          { optionValueId: "6-3", optionValue: "Collar" },
          { optionValueId: "6-4", optionValue: "Hooded" },
        ],
      },
      {
        optionId: "7",
        optionName: "pattern",
        displayName: "Pattern",
        optionValues: [
          { optionValueId: "7-1", optionValue: "Solid" },
          { optionValueId: "7-2", optionValue: "Striped" },
          { optionValueId: "7-3", optionValue: "Printed" },
          { optionValueId: "7-4", optionValue: "Checked" },
        ],
      },
      {
        optionId: "8",
        optionName: "shoe_size",
        displayName: "Shoe Size",
        optionValues: [
          { optionValueId: "8-1", optionValue: "6" },
          { optionValueId: "8-2", optionValue: "7" },
          { optionValueId: "8-3", optionValue: "8" },
          { optionValueId: "8-4", optionValue: "9" },
          { optionValueId: "8-5", optionValue: "10" },
          { optionValueId: "8-6", optionValue: "11" },
        ],
      },
      {
        optionId: "9",
        optionName: "sole_material",
        displayName: "Sole Material",
        optionValues: [
          { optionValueId: "9-1", optionValue: "Rubber" },
          { optionValueId: "9-2", optionValue: "Leather" },
          { optionValueId: "9-3", optionValue: "Foam" },
          { optionValueId: "9-4", optionValue: "Synthetic" },
        ],
      },
      {
        optionId: "10",
        optionName: "lens_type",
        displayName: "Lens Type",
        optionValues: [
          { optionValueId: "10-1", optionValue: "Polarized" },
          { optionValueId: "10-2", optionValue: "UV Protection" },
          { optionValueId: "10-3", optionValue: "Photochromic" },
        ],
      },
    ];
  }, []);

  useEffect(() => {
    setSelectedOptionValues(selectedOption ? selectedOption.optionValues : []);
  }, [selectedOption]);

  const handleCancel = () => {
    setIsSelectingOption(false);
  };

  // const handleDone = () => {
  //   if (selectedOption && selectedOptionValues.length > 0) {
  //     const newOptions = selectedOption
  //     newOptions.optionValues = selectedOptionValues;

  //     if (optionContext.length === 0) {
  //       dispatch(updateEditOption(newOptions))
  //     } else {
  //       const a = optionContext.find(
  //         (option) => option.optionId === newOptions.optionId
  //       );

  //       if (a) {
  //          dispatch(updateEditOption(a))
  //       } else {
  //         dispatch(addEditOption(newOptions))
  //       }
  //     }
  //   }

  //   setSelectedOption(null);
  //   setSelectedOptionValues([]);
  //   setIsSelectingOption(false);
  // };

  const createNewVariations = () => {

    if(!selectedOption) return 

    const newVariationList: Variation[] = [];

    if (!variationList || variationList.length === 0) {
      selectedOptionValues.forEach((opt) => {
        const newVariation: Variation = {
          variationName: opt.optionValue,
          tempId: crypto.randomUUID(),
          selectedOptionValues: [
            {
              optionId: selectedOption?.optionId,
              optionValueId: opt.optionValueId,
            },
          ],
        };
        newVariationList.push(newVariation)
      });

      dispatch(setVariations(newVariationList))
    }else{
      selectedOptionValues.forEach((opt, idx) => {
        if(idx === 0){
          variationList.forEach((variation) => {
            const newVariation: Variation = {
              ...variation,
              variationName: `${variation.variationName} ${opt.optionValue}`,
              selectedOptionValues: [
                {
                  optionId: selectedOption?.optionId,
                  optionValueId: opt.optionValueId,
                },
              ],
            };
            newVariationList.push(newVariation);
          })
        }else{
          variationList.forEach((variation) => {
            const newVariation: Variation = {
              variationName: `${variation.variationName} ${opt.optionValue}`,
              tempId: crypto.randomUUID(),
              selectedOptionValues: [
                {
                  optionId: selectedOption?.optionId,
                  optionValueId: opt.optionValueId,
                },
              ],
            };
            newVariationList.push(newVariation);
          })
        }
      })
      dispatch(setVariations( newVariationList))
    }
  };

  const handleDone = () => {
    if (selectedOption && selectedOptionValues.length > 0) {
      if (optionContext.length === 0) {
        dispatch(
          addEditOption({
            ...selectedOption,
            optionValues: selectedOptionValues,
          })
        );
      } else {
        const isThere = optionContext.find(
          (curr) => curr.optionId === selectedOption.optionId
        );

        if (isThere) {
          dispatch(
            updateEditOption({
              ...selectedOption,
              optionValues: selectedOptionValues,
            })
          );
        } else {
          dispatch(
            addEditOption({
              ...selectedOption,
              optionValues: selectedOptionValues,
            })
          );
        }
      }

      createNewVariations();
    }

    setSelectedOption(null);
    setSelectedOptionValues([]);
    setIsSelectingOption(false);
  };

  const handleEditSelectedOption = (option: EditOption) => {
    setSelectedOption(option);
    setIsSelectingOption(true);
  };

  return isSelectingOption ? (
    <div
      id="overlay"
      className="h-screen w-screen bg-black/75 fixed top-0 left-0 z-20 pt-16 flex justify-center items-center"
    >
      <div className=" w-fit mx-auto bg-black p-5 shadow shadow-zinc-700">
        <div className="flex">
          <button
            onClick={handleCancel}
            className="bg-stone-700 p-2 rounded-sm"
          >
            <RxCross2 />
          </button>
          <h3 className="flex-1 text-2xl text-center ">Add option</h3>
        </div>

        <div className="pt-10 ml-3 space-y-2">
          <p className="pb-3">Add options to create variations</p>

          <div className="border border-white/35 h-fit w-fit px-3">
            <label htmlFor="option" className="pr-4 pl-1">
              Option:{" "}
            </label>
            <select
              id="option"
              name="option"
              onChange={(e) =>
                setSelectedOption(JSON.parse(e.target.value) as EditOption)
              }
              className="p-3 w-80 outline-none h-full border-l  border-white/35"
            >
              <option value="select" selected hidden>
                Select a option
              </option>
              {options &&
                options.map((option) => (
                  <option
                    key={option.optionId}
                    value={JSON.stringify(option)}
                    className="bg-black text-white hover:bg-blue-500"
                  >
                    {option.displayName}
                  </option>
                ))}
            </select>
            {/* <sele type="" id="option" name="option" /> */}
          </div>

          <div className="pt-3">
            <div className="border border-white/35 min-h-12 w-full px-3 flex items-center">
              Option values
            </div>
            <div>
              {selectedOptionValues &&
                selectedOptionValues.length > 0 &&
                selectedOptionValues.map((optionValue) => (
                  <div className="border border-white/35 min-h-12 w-full px-3 flex items-center">
                    <p className="flex-1">{optionValue.optionValue}</p>
                    <button
                      onClick={() =>
                        setSelectedOptionValues((prev) =>
                          prev.filter((ele) => ele !== optionValue)
                        )
                      }
                      className=" cursor-pointer"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                ))}
            </div>
            <div className="border border-white/35 min-h-12 w-full px-3 flex items-center text-white/75 cursor-pointer">
              Add Option
            </div>
          </div>
        </div>
        <div className="text-right flex justify-end pt-5">
          <button
            onClick={handleDone}
            className="py-2 w-28 text-center rounded-[6px] bg-blue-500 font-medium cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  ) : (
    <section className="pt-5">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl">Options</h2>
        <button
          onClick={() => {
            setIsSelectingOption(true);
          }}
          className="py-1 w-16 text-center rounded-[6px] bg-blue-500 font-medium cursor-pointer"
        >
          Add
        </button>
      </header>

      <div>
        {optionContext &&
          optionContext.length > 0 &&
          optionContext.map((option) => (
            <div className="flex justify-between mt-4">
              <p
                onClick={() => handleEditSelectedOption(option)}
                className=" cursor-pointer"
              >
                {option.displayName}
              </p>
              <p
                onClick={() => handleEditSelectedOption(option)}
                className=" text-sm cursor-pointer"
              >
                {option.optionValues.map((i) => i.optionValue).join(", ")}
              </p>
              <div className="flex gap-3">
                <button className="text-blue-500 cursor-pointer">Edit</button>
                <button className="text-amber-600 cursor-pointer">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ItemOptions;
