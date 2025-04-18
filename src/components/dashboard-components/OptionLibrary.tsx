import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ActionButton from "../common/ActionButton";
import { RxCross2 } from "react-icons/rx";

interface Option {
  id?: string;
  name: string;
  diplayName: string;
  optionValues: string[];
}

const optionList: Option[] = [
  {
    id: "opt-1",
    name: "color",
    diplayName: "Color",
    optionValues: ["Red", "Blue", "Green", "Black"],
  },
  {
    id: "opt-2",
    name: "size",
    diplayName: "Size",
    optionValues: ["Small", "Medium", "Large", "Extra Large"],
  },
  {
    id: "opt-3",
    name: "material",
    diplayName: "Material",
    optionValues: ["Cotton", "Leather", "Polyester", "Silk"],
  },
  {
    id: "opt-4",
    name: "storage",
    diplayName: "Storage Capacity",
    optionValues: ["64GB", "128GB", "256GB", "512GB"],
  },
  {
    id: "opt-5",
    name: "connectivity",
    diplayName: "Connectivity",
    optionValues: ["WiFi", "4G", "5G", "Bluetooth"],
  },
];

const EditOption: React.FC<{
  selectedOption: Option | null;
  setIsCreating: Dispatch<SetStateAction<boolean>>;
}> = ({ selectedOption, setIsCreating }) => {
  const [optionSetName, setOptionSetName] = useState("");
  const [displayName, setDisplayName] = useState("");
  //   const [optionType, setOptionType] = useState('text');
  const [options, setOptions] = useState<string[]>([]);
  const [newOption, setNewOption] = useState("");

  useEffect(() => {
    if (selectedOption) {
      setDisplayName(selectedOption.diplayName);
      setOptionSetName(selectedOption.name);
      setOptions([...selectedOption.optionValues]);
    }
  },[selectedOption]);

  //   const handleOptionTypeChange = (type: string) => {
  //     setOptionType(type);
  //   };

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const removeOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      addOption();
    }
  };

  const handleSave = () => {};

  return (
    <div className="bg-black max-w-4xl mx-auto p-6 font-sans">
      <header className="flex justify-between items-center mb-3">
        <button
          onClick={() => setIsCreating(false)}
          className="text-xl bg-stone-700 p-2 rounded-md hover:bg-stone-600"
        >
          <RxCross2 />
        </button>
        <ActionButton className="" handleFn={handleSave} text="Save" />
      </header>
      <h1 className="text-2xl font-bold mb-6">Details</h1>

      <div className="border rounded-md mb-8">
        {/* Option Set Name */}
        <div className="grid grid-cols-4 border-b">
          <div className="p-4 flex items-center">
            <span className="font-medium">Option set name</span>
            <div className="ml-2 rounded-full w-6 h-6 flex items-center justify-center">
              <span>:</span>
            </div>
          </div>
          <div className="col-span-3 p-3">
            <input
              type="text"
              placeholder="Shirt-sizes"
              value={optionSetName}
              onChange={(e) => setOptionSetName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Display Name */}
        <div className="grid grid-cols-4 border-b">
          <div className="p-4  flex items-center">
            <span className="font-medium">Display name</span>
            <div className="ml-2  rounded-full w-6 h-6 flex items-center justify-center">
              <span>:</span>
            </div>
          </div>
          <div className="col-span-3 p-3">
            <input
              type="text"
              placeholder="Size"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Option Set Type */}
        {/* <div className="grid grid-cols-4">
          <div className="p-4  flex items-center">
            <span className="font-medium">Option set type</span>
            <div className="ml-2   rounded-full w-6 h-6 flex items-center justify-center">
              <span>i</span>
            </div>
          </div>
          <div className="col-span-3 p-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <div 
                  className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer
                  ${optionType === 'text' ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => handleOptionTypeChange('text')}
                >
                  {optionType === 'text' && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <span className="ml-3">Text</span>
              </div>
              
              <div className="flex items-center">
                <div 
                  className={`w-6 h-6 rounded-full border flex items-center justify-center cursor-pointer
                  ${optionType === 'text-color' ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => handleOptionTypeChange('text-color')}
                >
                  {optionType === 'text-color' && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <span className="ml-3">Text and color</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <h2 className="text-2xl font-bold mb-6">Options</h2>

      <div className="border rounded-md">
        {/* Options List */}
        <div className="p-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-md p-3 mb-2"
            >
              <span>{option}</span>
              <button
                onClick={() => removeOption(index)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Add Option Input */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Add option"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OptionLibrary = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (opt: Option | null) => {
    setSelectedOption(opt);
    setIsCreating(true);
  };

  return (
    <div className="p-10 space-y-5">
      {isCreating && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 flex items-center justify-center z-50">
          <EditOption
            setIsCreating={setIsCreating}
            selectedOption={selectedOption}
          />
        </div>
      )}
      <h1 className="text-2xl">Options</h1>
      <div className="flex justify-between items-center">
        <p>
          Options help you create and organize your item variations with
          selectable values at checkout.
        </p>
        <ActionButton
          className=""
          handleFn={() => {
            handleOptionClick(null);
          }}
          text="Create option"
        />
      </div>

      <div>
        <div className="flex text-left p-3   border-b-[1.5px] border-white/30">
          <div className="flex-1">Name</div>
          <div className="flex-1">Options</div>
        </div>
        <div>
          {optionList &&
            optionList.length > 0 &&
            optionList.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleOptionClick(opt)}
                className="flex text-left p-3  hover:bg-blue-500/80 cursor-pointer"
              >
                <div className="flex-1 font-medium">{`${opt.diplayName} (${opt.name})`}</div>
                <div className="flex-1">{opt.optionValues.join(", ")}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OptionLibrary;
