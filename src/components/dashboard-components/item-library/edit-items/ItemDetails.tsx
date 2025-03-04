import { RootState } from '@store/store';
import React, { useRef, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from 'react-redux';

const ItemDetails = () => {

    const productDetails = useSelector((state: RootState) => state.editProduct)

    const [name, setName] = useState(productDetails.productName);
    const [description, setDescription] = useState(productDetails.description || "");
    const [selectedImages, setSelectedImage] = useState<string[]>(productDetails.image)

    const imageInputRef = useRef<HTMLInputElement>(null);



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
        setSelectedImage(prev => [...prev, imageUrl]);
      }
    }

    const handleDeleteImage = (url: string) => {
      setSelectedImage(prev => prev.filter(img => img !== url ))
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
        className="border border-white/35 w-[500px] h-16 py-1 px-3"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-white/35 w-[500px] h-28 py-1 px-3"
      />
      
      <div className="w-full min-h-20 border border-white/35 text-center p-2">
      <button onClick={ handleUploadImageClick } className="cursor-pointer">Upload image</button>
      <input
        ref={imageInputRef}
        type="file"
        name="file"
        id="file"
        onChange={handleImageSelect}
        hidden
      />
      <div className="flex w-full h-fit gap-2">
        {selectedImages.length > 0 && selectedImages.map((url) => (
        <div className='relative group hover:outline-2 outline-blue-500'>
          <img src={url} alt="" className="h-12 w-10"/>
          <button 
            onClick={() => handleDeleteImage(url)}
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