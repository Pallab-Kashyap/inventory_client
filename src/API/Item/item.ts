
import { Product, ProductAPIResponse, ProductResponseData } from "../../types/productTypes"
import axiosInstance from "../../utils/axiosConfig"
import { API_ENDPOINT } from "../APIConfig"

export interface UserData {
    username?: string
    email: string,
    password: string
}

export const getAllProducts = async (): Promise<ProductResponseData> => {
    const res = await axiosInstance.get<ProductAPIResponse>(API_ENDPOINT.PRODUCTS.GET_ALL_PRODUCTS)
    return res.data.data
}

export const getProductById = async (id: string): Promise<Product> => {
    const res = await axiosInstance.get(API_ENDPOINT.PRODUCTS.GET_PRODUCT_BY_ID(id))
    return res.data
}

export const deleteProductImages = async ({productId, images}: {productId: string, images: string[]}): Promise<Product> => {
    const res = await axiosInstance.delete(API_ENDPOINT.PRODUCTS.DELETE_PRODUCT_IMAGES(productId), { data: images })
    return res.data
}