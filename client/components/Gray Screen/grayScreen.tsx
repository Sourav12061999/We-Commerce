import React,{ReactNode} from 'react'
import style from "./style.module.css";
interface PropTypes {
    children?:ReactNode;
    clickHandler:Function;
}
function GrayScreen({children,clickHandler}:PropTypes) {
  return (
    <div className={style.main} onClick={() => clickHandler()}>
        {
            children
        }
    </div>
  )
}

export default GrayScreen