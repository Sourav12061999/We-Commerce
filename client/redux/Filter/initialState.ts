import { filterCardTypes } from "../../features/product/product.types";
const checkBoxeFilterData: Array<filterCardTypes> = [
  {
    heading: "brand",
    checkBoxes: [
      { name: "Gap", isChecked: false },
      { name: "Puma", isChecked: false },
      { name: "Bady Moo", isChecked: false },
      { name: "Pepe jeans", isChecked: false },
      { name: "Bee bay", isChecked: false },
      { name: "Kaniroot", isChecked: false },
    ],
  },
  {
    heading: "catagory",
    checkBoxes: [
      { name: "party", isChecked: false },
      { name: "festive", isChecked: false },
      { name: "Casual", isChecked: false },
      { name: "travel", isChecked: false },
      { name: "workout", isChecked: false },
      { name: "formal", isChecked: false },
    ],
  },
];

const filtercardData = {
    checkBoxeFilterData,
    priceFilter:{
        min:0,
        max:4000,
    }
}

export default filtercardData;
