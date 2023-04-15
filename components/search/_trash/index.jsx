// write a component that searches through the list of symbols and returns the ones that match the search term
import React, { useState, useEffect, useRef } from "react";
import symbolCategories from "../../symbols.json";

export const Search = ({ props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = Syms.symbolCategories.flatMap((items) =>
      items.symbols.filter((symbol) =>
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

export default Search;

// import React, { useState } from "react";
// import symbols from "../../symbols.json";

// function Search() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearchInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredSymbols = symbols.symbolCategories.filter((category) =>
//     category.symbols.some((symbol) =>
//       symbol.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search symbols"
//         value={searchTerm}
//         onChange={handleSearchInputChange}
//       />
//       {filteredSymbols.map((category) => (
//         <div key={category.categoryName}>
//           <h2>{category.categoryName}</h2>
//           <ul>
//             {category.symbols
//               .filter((symbol) =>
//                 symbol.name.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//               .map((symbol) => (
//                 <li key={symbol.id}>{symbol.name}</li>
//               ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Search;

// create a component that searches through an array of objects and returns the ones that match the search term
