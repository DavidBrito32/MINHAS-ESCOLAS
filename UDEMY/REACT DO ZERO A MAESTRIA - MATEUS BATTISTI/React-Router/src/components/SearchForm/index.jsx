import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        <button type="submit" onClick={HandleSubmit}>Enviar</button>
      </form>
    </>
  );
};

export default SearchForm;
