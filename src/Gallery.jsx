import { useGlobalContext } from "./context";

const Gallery = () => {
  const { test } = useGlobalContext();
  console.log(test);
  return <h2>Gallery</h2>;
};
export default Gallery;
