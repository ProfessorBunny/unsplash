const SearchGallery = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Football"
        />
        <button type="submit" className="btn">
          {" "}
          Search{" "}
        </button>
      </form>
    </section>
  );
};
export default SearchGallery;
