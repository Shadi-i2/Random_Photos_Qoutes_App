import { useEffect, useState } from "react";
import axios from "axios";

export const usePhoto = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [RandomNum, setRandomNum] = useState(8);
  const handleRandomClick = () => {
    const random = Math.floor(Math.random() * 34);
    setRandomNum(random);
  };

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${RandomNum}`)
      .then((res) => {
        setPhotos(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [RandomNum]);
  
  return { photos, isLoading, isError, handleRandomClick };
};
