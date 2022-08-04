
const skip = (data:Array<any>,start:number) =>{
  let newArr=[];
  for(let i=start;i<data.length;i++){
    newArr.push(data[i]);
  }
  return newArr;
}
export {skip};