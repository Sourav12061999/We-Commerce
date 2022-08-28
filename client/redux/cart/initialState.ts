import { productType } from "../../features/product/product.types";

export interface cartProductType extends productType {
  
}

export type cartDataType = {
  size: number;
  cartData: Array<cartProductType>;
  isLoading:boolean;
  isSuccess:boolean;
  isError:boolean;
  msg:string;
};
const initialState:cartDataType = {
  size: 0,
  cartData: [],
  isLoading:false,
  isSuccess:false,
  isError:false,
  msg:"",
};

export default initialState;
