
const SearchBar = ({ query, loading, handleSubmit, setQuery }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event); // Pass the event object to the handleSubmit function
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={query}
        className="recipe-form"
        placeholder="Search for Recipe"
        name="query"
        disabled={loading}
        onChange={(event) => setQuery(event.target.value)}
      />
      <input
        disabled={loading || !query}
        type="submit"
        className="button"
        value="Search"
      />
    </form>
  );
};

export default SearchBar;