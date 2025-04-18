import React from 'react'

const uploadImage = () => {

  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }
  return (
    <input type='file' onChange={(e) => handleChange(e)} />
  )
}

export default uploadImage