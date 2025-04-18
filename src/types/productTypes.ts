
export type ProductImage = {
    id: string;
    url: string;
    publicId: string;
    imageName: string | null;
    isPrimary: boolean;
    storeId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string; 
  };
  

  export type BaseCategory = {
    id: string;
    categoryName: string;
    displayName: string;
    nestingName: string;
    isActive: boolean;
    parentCategoryId: string; 
    storeId: string;
    isDeleted: boolean;
    createdAt: string; 
    updatedAt: string; 
  };
  

  export type Option = {
    id: string;
    optionName: string;
    displayName: string;
    isActive: boolean;
    storeId: string;
    isDeleted: boolean;
    createdAt: string; 
    updatedAt: string; 
  };
  
 
  export type OptionValue = {
    id: string;
    optionValue: string; 
    optionId: string;
    isDeleted: boolean;
    createdAt: string; 
    updatedAt: string; 
  };
  
 
  export type ProductVariationOption = {
    id: string;
    productVariationId: string;
    optionValueId: string;
    optionId: string;
    isDeleted: boolean;
    createdAt: string; 
    updatedAt: string; 
    option: Option; 
    optionValue: OptionValue; 
  };
  

  export type ProductVariation = {
    id: string;
    isActive: boolean;
    isSellable: boolean;
    productId: string;
    variationName: string; 
    stockQuantity: number;
    price: string; 
    sku: string;
    isDeleted: boolean;
    createdAt: string; 
    updatedAt: string; 
    images: ProductImage[]; 
    option: ProductVariationOption[];
  };
  

  export type Product = {
    id: string;
    productName: string;
    description: string;
    isActive: boolean;
    isSellable: boolean;
    baseCategoryId: string;
    storeId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string; 
    images: ProductImage[]; 
    baseCategory: BaseCategory; 
    productVariation: ProductVariation[]; 
  };
  

  export type ProductResponseData = {
    products: Product[];
    cursor: string; 
  };
  

  export type ProductAPIResponse = {
    status: boolean;
    message: string;
    data: ProductResponseData;
  };