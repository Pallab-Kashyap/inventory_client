export const BASE_URL = 'http://localhost:3001/api/v1'

export const API_ENDPOINT = {
    AUTH : {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
    },
    PRODUCTS: {
        GET_ALL_PRODUCTS: '/product',
        GET_PRODUCT_BY_ID: (id: string) => `/product/${id}`,
        DELETE_PRODUCT_IMAGES: (productId: string) => `/${productId}/images`
    }
}