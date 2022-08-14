import React, { useState, useEffect } from "react";

function useFetch(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) {
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const refetch = async (newUrl: string | undefined, data?: any) => {
    setIsLoading(true);
    try {
      const jsonedData = await fetch(newUrl || url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data && JSON.stringify(data),
      });
      const responseData = await jsonedData.json();
      setResponse(responseData);
      setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
        setIsError(true);
    }
  };
  useEffect(() => {
    refetch(url,data);
  }, [])

  useEffect(() => {
    if(response != null && response.isError === true){
       setIsError(true);
    }
  }, [response])

  return {response,isLoading,isError,refetch}
}

export default useFetch;
