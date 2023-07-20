import Gallery from "./Gallery";
import SearchGallery from "./SearchGallery";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle />

      <SearchGallery />
      <Gallery />
    </main>
  );
};
export default App;
