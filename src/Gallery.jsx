import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";
import axios from "axios";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_PRIVATE_KEY
}`;
const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchValue}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        {/* <h3>Sorry!</h3> */}
        <h4>Can't proces your request at the moment</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (response.data.results.length < 1) {
    return (
      <section className="image-container">
        <h3>No result Found!</h3>

        {/* <h4>Try a different value</h4> */}
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          ></img>
        );
      })}
    </section>
  );
};
export default Gallery;
