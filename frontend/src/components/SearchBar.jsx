import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
  const [userResearch, setUserResearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search/${userResearch}`);
  };

  const handleSearch = (event) => {
    setUserResearch(event.target.value);
    // console.info(userResearch);
  };

  return (
    <form className="search_bar" onSubmit={handleSubmit}>
      <input
        id="search_input"
        type="text"
        placeholder="Quel emploi recherchez-vous ?"
        onChange={handleSearch}
      />
      <input id="search_btn" type="submit" value="Rechercher" />
    </form>
  );
}

//   return (
//     <form className="search_bar" onSubmit={handleSubmit}>
//       <input
//         id="search_input"
//         type="text"
//         placeholder="Quel emploi recherchez-vous ?"
//         onChange={handleSearch}
//       />
//       <input id="search_btn" type="submit" value="Rechercher">
//         Rechercher
//       </input>
//     </form>
//   );
// }
