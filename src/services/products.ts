import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export const getProducts = async (search: string) => {
    return (await axiosInstance.get(ApiRoutes.PRODUCTS, {
        params: {
            search
        }
    })).data
}