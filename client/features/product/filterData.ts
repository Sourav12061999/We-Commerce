import { CheckboxTypes, filterCardTypes } from "./product.types";
import FilterCards from "./components/Filter Cards/filterCards";
import PriceCard from "./components/Price Card/priceCard";
const filtercardData:Array<filterCardTypes> = [
    {
        heading:"Brand",
        checkBoxes:[
            {name:"Gap",isChecked:false},
            {name:"Puma",isChecked:false},
            {name:"Bady Moo",isChecked:false},
            {name:"Pepe jeans",isChecked:false},
            {name:"Bee bay",isChecked:false},
            {name:"Kaniroot",isChecked:false},
        ]
    },
    {
        heading:"Catagory",
        checkBoxes:[
            {name:"party",isChecked:false},
            {name:"festive",isChecked:false},
            {name:"Casual",isChecked:false},
            {name:"travel",isChecked:false},
            {name:"workout",isChecked:false},
            {name:"formal",isChecked:false},
        ]
    }
]

const navFilterType:Array<any> = [
    {
        heading:"Brand",
        checkBoxes:[
            {name:"Gap",isChecked:false},
            {name:"Puma",isChecked:false},
            {name:"Bady Moo",isChecked:false},
            {name:"Pepe jeans",isChecked:false},
            {name:"Bee bay",isChecked:false},
            {name:"Kaniroot",isChecked:false},
        ],
        Component:FilterCards,
    },
    {
        heading:"Catagory",
        checkBoxes:[
            {name:"party",isChecked:false},
            {name:"festive",isChecked:false},
            {name:"Casual",isChecked:false},
            {name:"travel",isChecked:false},
            {name:"workout",isChecked:false},
            {name:"formal",isChecked:false},
        ],
        Component:FilterCards,
    },
    {
        Component:PriceCard,
    }
]
export default filtercardData;

export {navFilterType};
