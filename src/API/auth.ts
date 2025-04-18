
import axiosInstance from "../utils/axiosConfig"
import { API_ENDPOINT } from "./APIConfig"

export interface UserData {
    username?: string
    email: string,
    password: string
}

export const registerUser = async (userData: UserData) => {
    const res = await axiosInstance.post(API_ENDPOINT.AUTH.REGISTER, userData)
    return res.data
}

export const loginUser = async (userData: UserData) => {
    const res = await axiosInstance.post(API_ENDPOINT.AUTH.LOGIN, userData)
    return res.data
}