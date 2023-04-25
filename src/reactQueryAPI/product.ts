import axios from "axios";
import { QueryFunctionContext } from "react-query";
import { ProductDataType } from "../types/types";

export const getProducts = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
    const [_, category] = queryKey;
    const response = await axios.get<ProductDataType[]>(`/products/${category ? 'category/' + category : ''}`);
    // const response = await axios.get<ProductDataType[]>(`https://ecom-69687-default-rtdb.firebaseio.com/products.json?${category ? `orderBy="category"&startAt="${category}"&endAt="${category}"` : ''}`);
    // let data: ProductDataType[] = [];
    // Object.keys(response.data).map((value: any) => {
    //     data = [...data, response?.data[value]];
    //     return value;
    // });

    return response.data;
}