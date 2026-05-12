import axios from "axios";
import { useCallback, useState } from "react";

export const useGetApi = (jsonFile) => {
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [errorFetch, setErrorFetch] = useState(null);

  const getJsonFile = useCallback(async (jsonFile) => {
    try {
      setLoadingFetch(true);

      const response = await axios.get(jsonFile);

      return response.data;
    } catch (error) {
      console.log("Error:", error);
      setErrorFetch(error);

      throw error;
    } finally {
      setLoadingFetch(false);
    }
  }, []);

  return {
    getJsonFile,
    loadingFetch,
    errorFetch,
  };
};