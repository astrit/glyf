// import { useState, useEffect } from "react";

// function SearchComponent() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     fetch("../../symbols.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const results =
//           data.pageProps.coolSymbolsIndex.symbolCategories.items.flatMap(
//             (category) =>
//               category.symbols.filter((symbol) =>
//                 symbol.name.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//           );
//         setSearchResults(results);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setIsLoading(false);
//       });
//   }, [searchTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search symbols"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((item, index) => (
//             <li key={index + "searchk"}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchComponent;

// Second version

// import { useState, useEffect } from "react";

// function SearchComponent() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     fetch("../../symbols.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const results =
//           data.pageProps.coolSymbolsIndex.symbolCategories.items.flatMap(
//             (category) =>
//               category.symbols.filter((symbol) =>
//                 symbol.name.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//           );
//         setSearchResults(results);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setIsLoading(false);
//       });
//   }, [searchTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search symbols"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((item, index) => (
//             <li key={index + "searchk"}>{item.symbol}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchComponent;

// import { useState, useEffect } from "react";
// import symbols from "../../symbols.json";

// function SearchComponent({ symbolsData }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     setIsLoading(true);
//     const regex = new RegExp(searchTerm, "i");
//     const results = symbolsData.categories.category.flatMap((category) =>
//       category.symbols.filter((symbol) =>
//         regex.test(symbol.name.replace(/\s+/g, ""))
//       )
//     );
//     setSearchResults(results);
//     setIsLoading(false);
//   }, [searchTerm, symbolsData]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search symbols"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((item, index) => (
//             <li key={index + "searchk"}>{item.symbol}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchComponent;

import { useState, useEffect } from "react";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [symbolsData, setSymbolsData] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("./glyphs.json")
      .then((response) => response.json())
      .then((data) => {
        setSymbolsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!symbolsData) return;
    setIsLoading(true);
    const regex = new RegExp(searchTerm, "i");
    const results = symbolsData.categories.category.flatMap((category) =>
      category.symbols.filter((symbol) =>
        regex.test(symbol.name.replace(/\s+/g, ""))
      )
    );
    setSearchResults(results);
    setIsLoading(false);
  }, [searchTerm, symbolsData]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search symbols"
        value={searchTerm}
        onChange={handleChange}
      />
      {isLoading || !symbolsData ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((item, index) => (
            <li key={index + "searchk"}>{item.symbol}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchComponent;
