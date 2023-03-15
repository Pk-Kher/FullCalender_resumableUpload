import axios from "axios";
import { QueryFunctionContext } from "react-query";
import { ProductDataType } from "../types/types";

export const getProducts = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
    const [_, category] = queryKey;
    const response = await axios.get<ProductDataType[]>(`/products/${category ? 'category/' + category : ''}`);
    return response.data;
}