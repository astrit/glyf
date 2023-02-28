// write a component that searches through the list of symbols and returns the ones that match the search term
export const Search = ({ props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = Syms.categories.category.flatMap((category) =>
      category.symbols.filter((symbol) =>
        symbol.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index + "searchk"}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

// create a component that searches through an array of objects and returns the ones that match the search term
