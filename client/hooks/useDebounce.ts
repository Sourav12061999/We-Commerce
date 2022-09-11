import React, { useRef, useState } from "react";

function useDebounce() {
  const [data, setData] = useState<any>();
  const debounceRef = useRef<any>(null);
  const fetchData = async (url: string) => {
    if(debounceRef.current){
        clearTimeout(debounceRef.current);
    }
    try {
      debounceRef.current = setTimeout(async () => {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        
        setData(data);
      }, 500);
    } catch (error) {}
  };

  return {fetchData,data};
}

export default useDebounce;
