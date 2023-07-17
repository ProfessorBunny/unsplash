import Gallery from "./Gallery";
import SearchGallery from "./SearchGallery";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <Gallery />
      <SearchGallery />
    </main>
  );
};
export default App;
