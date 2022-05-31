import "./App.css";
import Dropdown from "./Dropdown";
import CategoriesButtons from "./CategoriesButtons";
import SearchResult from "./SearchResult";
import { useEffect, useState } from "react";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState("");

  console.log(selectedCity);
  console.log(category);

  useEffect(() => {
    fetch(`/${selectedCity}/${category}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [category, selectedCity]);
  return (
    <div className="App">
      <h1>London Mini Guide</h1>
      <Dropdown setSelectedCity={setSelectedCity} />
      <CategoriesButtons category={category} setCategory={setCategory} />
      <SearchResult data={data} />
    </div>
  );
}

export default App;
