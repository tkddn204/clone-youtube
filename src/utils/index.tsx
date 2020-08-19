import {AppDispatch} from "../store";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setSize} from "../store/features/screen-size-slice";

export const useResize = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      dispatch(setSize({width: newWidth, height: newHeight}));
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [dispatch]);
}

export const generateParams = (params: Record<string, string>) => {
  // undefined 제거
  Object.keys(params).forEach((key: string) => params[key] === undefined && delete params[key]);
  return new URLSearchParams(params);
}
