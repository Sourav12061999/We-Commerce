const productExist = (productid:string,cartArray:Array<string>) =>{
   for(let i=0;i<cartArray.length;i++){
    if(cartArray[i] == productid) return true;
   }

   return false;
}
export default productExist;