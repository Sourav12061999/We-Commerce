export type CheckboxTypes = {
  name: string;
  isChecked: boolean;
};

export type filterCardTypes = {
  heading: string;
  checkBoxes: Array<CheckboxTypes>;
};

export type productType = {
  _id: string;
  brand: string;
  name: string;
  price: number;
  size: Array<string>;
  catagory: string;
  img: string;
  type: "women" | "men";
};

export type priceFilterType = {
  min: number;
  max: number;
};
export type productResponse = {
  isError: boolean;
  data: Array<productType>;
};

export type filterStateTypes = {
  checkBoxeFilterData: Array<filterCardTypes>;
  priceFilter: {
    min: number;
    max: number;
  };
};

export type paginationType = {
  currentPage:number,
  noOfPages:number,
}