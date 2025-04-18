import { updateVariation } from "../../../../store/features/editing.product.features/productVariationsEditSlice";
import { RootState } from "../../../../store/store";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegImage } from "react-icons/fa";

const VariationDetailsInput = ({
  type,
  placeholder,
  value,
  onChangeHandle,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChangeHandle: (e: string) => void;
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeHandle(e.target.value)}
        className="text-left w-full appearance-none"
      />
    </div>
  );
};

// Example usage in a React component:
const ItemVariation = () => {
  const variationList = useSelector(
    (state: RootState) => state.editVariations.variations
  );

  const dispatch = useDispatch();

  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [stock, setStock] = useState("");
  // const [selectedImages, setSelectedImages] = useState<{
  //   tempId: string;
  //   urls: string[];
  // } | null>(null);

  const imageInputRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleUploadImageClick = (index: number) => {
    const inputEle = imageInputRef.current[index];
    if (inputEle) {
      inputEle.click();
    }
  };

  const handleImageSelect = (
    event: React.ChangeEvent<HTMLInputElement>,
    tempId: string,
    idx: number
  ) => {
    if (!event.target.files) {
      return;
    }
    console.log(idx);
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(
        updateVariation({
          identifier: tempId,
          updatedFields: { images: [imageUrl] },
        })
      );
    }
  };

  return (
    <div>
      <h3 className="text-2xl mb-2">Variations</h3>
      <div className="grid grid-cols-7 text-left text-lg mb-1">
        <p className="col-span-3 text-left ">Variation</p>
        <p>SKU</p>
        <p>Price</p>
        <p>weight</p>
        <p>stock</p>
      </div>
      <div>
        {variationList &&
          variationList.map((item, index) => (
            <div className="grid grid-cols-7 col-span-6 max-w-full mb-1">
              <div className="col-span-3 text-left flex items-center gap-1 ">
                {item.images && item.images.length > 0 ? (
                  <img
                    src={item?.images[0] || ""}
                    alt=""
                    className="h-8 w-8 rounded-md object-contain"
                  />
                ) : (
                  <div
                    onClick={() => handleUploadImageClick(index)}
                    className="hover:text-blue-400 cursor-pointer border border-gray-600 flex justify-center items-center  h-8 w-8 rounded-md"
                  >
                    <FaRegImage />
                    <input
                      ref={(el) => {
                        imageInputRef.current[index] = el;
                      }}
                      type="file"
                      name="file"
                      id="file"
                      onChange={(e) =>
                        handleImageSelect(e, item.tempId || "", index)
                      }
                      hidden
                    />
                  </div>
                )}
                <p className="max-w-full truncate">{item.variationName}</p>
              </div>

              <VariationDetailsInput
                type="text"
                placeholder="SKU"
                value={sku}
                onChangeHandle={setSku}
              />
              <VariationDetailsInput
                type="number"
                placeholder="0.00"
                value={`${price}`}
                onChangeHandle={setPrice}
              />
              <VariationDetailsInput
                type="number"
                placeholder="0.00 kg"
                value={weight}
                onChangeHandle={setWeight}
              />
              <VariationDetailsInput
                type="number"
                placeholder="0"
                value={stock}
                onChangeHandle={setStock}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemVariation;
