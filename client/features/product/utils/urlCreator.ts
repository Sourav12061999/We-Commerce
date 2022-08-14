import { filterStateTypes } from "../product.types";
const urlCreator = (filter: filterStateTypes) => {
  let url = "";
  url += `price=${filter.priceFilter.min}-${filter.priceFilter.max}`;

  filter.checkBoxeFilterData.forEach((el) =>{
    let filtered = el.checkBoxes.filter((el2) =>{
       return el2.isChecked;
    })
    if(filtered.length>0){
        if(url[url.length-1] != "?") url += "&";
        url+=el.heading+"=";
        filtered.forEach((ele) =>{
         if(url[url.length-1] != "=") url+=`-${ele.name}`
         else url+=`${ele.name}`;
        })
    }
  })
  return url;
};
export default urlCreator;
