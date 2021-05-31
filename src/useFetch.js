import { useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //useEffect(() => {
  //send HTTP request
  //save response to variable
  async function init() {
    //const productId = findProductId();
    try {
      const response = await fetch(url);
      if (response.ok) {
        setData(response.json);
      } else {
        throw response;
      }
    } catch (e) {
      setError(e);
    }
  }
  // function findProductId() {
  //     ;
  //     var regexPattern = /\/prd\/(\d+)\?/;
  //     var id = regexPattern.exec(url)[1];
  //     console.log("procuct id: " + id);
  //     return id;
  // };

  init();

  return { data, error };
}

export default useFetch;
