const pageCreator = (pages: number, buttonPerPage: number) => {

    let allPages:Array<Array<number>>=[];

    let count=0;
    for(let i=1;i<=Math.ceil(pages/buttonPerPage);i++){
      let singlePage:Array<number> = [];
      for(let j=1;j<=buttonPerPage;j++){
        count++;
        if(count<=pages){
            singlePage.push(count)
        }
      }
      allPages.push(singlePage);
      count--;
    }

    return allPages;

};
export default pageCreator;
