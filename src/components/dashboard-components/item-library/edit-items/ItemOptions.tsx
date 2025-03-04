import { useEffect, useMemo, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Option {
  optionId: string;
  optionName: string;
  displayName: string;
  optionValues: string[];
}

const ItemOptions = () => {
  const [isSelectingOption, setIsSelectingOption] = useState(false);

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedOptionValues, setSelectedOptionValues] = useState<string[]>(
    selectedOption ? selectedOption.optionValues : []
  );

  const [allSelectedOptions, setAllSelectedOptions] = useState<Option[]>([]);

  const options: Option[] = useMemo(() => {
    return [
      {
        optionId: "1",
        optionName: "size",
        displayName: "Size",
        optionValues: ["S", "M", "L", "XL", "XXL"],
      },
      {
        optionId: "2",
        optionName: "color",
        displayName: "Color",
        optionValues: ["Red", "Blue", "Green", "Black", "White"],
      },
      {
        optionId: "3",
        optionName: "material",
        displayName: "Material",
        optionValues: ["Cotton", "Polyester", "Denim", "Leather"],
      },
      {
        optionId: "4",
        optionName: "fit",
        displayName: "Fit",
        optionValues: ["Slim Fit", "Regular Fit", "Loose Fit"],
      },
      {
        optionId: "5",
        optionName: "sleeve_length",
        displayName: "Sleeve Length",
        optionValues: ["Short Sleeve", "Long Sleeve", "Sleeveless"],
      },
      {
        optionId: "6",
        optionName: "neck_type",
        displayName: "Neck Type",
        optionValues: ["Round Neck", "V-Neck", "Collar", "Hooded"],
      },
      {
        optionId: "7",
        optionName: "pattern",
        displayName: "Pattern",
        optionValues: ["Solid", "Striped", "Printed", "Checked"],
      },
      {
        optionId: "8",
        optionName: "shoe_size",
        displayName: "Shoe Size",
        optionValues: ["6", "7", "8", "9", "10", "11"],
      },
      {
        optionId: "9",
        optionName: "sole_material",
        displayName: "Sole Material",
        optionValues: ["Rubber", "Leather", "Foam", "Synthetic"],
      },
      {
        optionId: "10",
        optionName: "lens_type",
        displayName: "Lens Type",
        optionValues: ["Polarized", "UV Protection", "Photochromic"],
      },
    ];
  }, []);

  useEffect(() => {
    setSelectedOptionValues(selectedOption ? selectedOption.optionValues : []);
  }, [selectedOption]);

  const handleCancel = () => {
    setIsSelectingOption(false);
  };

  const handleDone = () => {
    if (selectedOption && selectedOptionValues.length > 0) {
      const newOptions = selectedOption;
      newOptions.optionValues = selectedOptionValues;

      if (allSelectedOptions.length === 0) {
        setAllSelectedOptions([newOptions]);
      } else {
        const a = allSelectedOptions.find(
          (option) => option.optionId === newOptions.optionId
        );

        if (a) {
          setAllSelectedOptions((prev) =>
            prev.map((option) =>
              option.optionId === newOptions.optionId ? newOptions : option
            )
          );
        } else {
          allSelectedOptions.push(newOptions);
          setAllSelectedOptions(allSelectedOptions);
        }
      }
    }

    setSelectedOption(null);
    setSelectedOptionValues([]);
    setIsSelectingOption(false);
  };


  return isSelectingOption ? (
    <div
      id="overlay"
      className="h-screen w-screen bg-black/75 absolute top-0 left-0 z-20 pt-16"
    >
      <div className=" w-fit mx-auto bg-black p-5 shadow shadow-zinc-700">
        <div className="flex">
          <button
            onClick={handleCancel}
            className="bg-stone-700 p-2 rounded-sm cursor-pointer "
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
                setSelectedOption(JSON.parse(e.target.value) as Option)
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
                    <p className="flex-1">{optionValue}</p>
                    <button
                        onClick={() => setSelectedOptionValues(prev => prev.filter(ele => ele !== optionValue))}
                    className=" cursor-pointer">
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
          onClick={() => setIsSelectingOption(true)}
          className="py-1 w-16 text-center rounded-[6px] bg-blue-500 font-medium cursor-pointer"
        >
          Add
        </button>
      </header>

      <div>
        {allSelectedOptions &&
          allSelectedOptions.length > 0 &&
          allSelectedOptions.map((option) => (
            <div className="flex justify-between mt-4">
              <p className="">{option.displayName}</p>
              <p className="text-sm">{option.optionValues.join(", ")}</p>
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
