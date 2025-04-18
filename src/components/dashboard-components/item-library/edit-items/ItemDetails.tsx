// import { RootState } from '../../../../store/store';
import React, {  useEffect, useRef, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
// import { useSelector } from 'react-redux';
import { ProductImage } from '../../../../types/productTypes';

export type NewImage = {
  id?: string
  url: string;
 imageName?: string;
};

type ImageData = ProductImage | NewImage

interface Data {
  productName: string;
  productDescription: string;
  productImages: ImageData[]
}

const ItemDetails = ({data}: {data: Data}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([])

    const imagesToDelete: ImageData[] = []

    const imageInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setName(data.productName)
      setDescription(data.productDescription)
      setSelectedImages(data.productImages)
    }, [data])

    const handleUploadImageClick = () => {
      imageInputRef.current?.click()
    }
  
    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(!event.target.files){
        return
      }
  
      const file = event.target.files[0]; 
      if (file) {
        const imageUrl = URL.createObjectURL(file); 
        setSelectedImages(prev => [...prev, {url: imageUrl}]);
      }
    }

    const handleDeleteImage = (img: ImageData) => {
      if(img.id){
        imagesToDelete.push(img)
      }
      setSelectedImages(prev => prev.filter(prevImg => prevImg.url !== img.url ))
    }



  return (
    <section>
    <h2 className="text-2xl">Details</h2>

    <div className="flex flex-col space-y-3 pt-4">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-white/35 w-4/5 h-16 py-1 px-3"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-white/35 w-4/5 h-28 py-1 px-3"
      />
      
      <div className="w-4/5 min-h-20 border border-white/35  text-center p-2">
      <button onClick={ handleUploadImageClick } className="cursor-pointer">Upload image</button>
      <input
        ref={imageInputRef}
        type="file"
        name="file"
        id="file"
        onChange={handleImageSelect}
        hidden
      />
      <div className="flex flex-wrap w-full h-fit gap-2">
        {selectedImages && selectedImages.length > 0 && selectedImages.map((img) => (
        <div className='relative group hover:outline-2 outline-blue-500'>
          <img src={img.url} alt="" className="h-12 w-10 object-contain"/>
          <button 
            onClick={() => handleDeleteImage(img)}
          className='absolute group-hover:block hidden top-1 right-0.5 cursor-pointer text-white-600 bg-black/60'><RiDeleteBin6Line /></button>
        </div>
        ))} 
        </div>
      </div>

    </div>
  </section>
  )
}

export default ItemDetails