import { useEffect, useState } from "react";
import Country from "./Components/Country";
import { TCountry } from "./data";
import data from "./data.json";
function App() {
  const [regions, setRegions] = useState<string[]>();
  const [Countries, setCountries] = useState<TCountry[]>();
  const [Choice, setChoice] = useState<string>("all");

  const Filter = (input: string) => {
    let result: TCountry[] = [];
    let filter = input.toLowerCase();
    data.forEach((elem) => {
      if (elem.name.toLowerCase().indexOf(filter) > -1) {
        result.push(elem);
      }
    });
    setCountries(result);
  };

  useEffect(() => {
    let tmp: string[] = [];

    data.forEach((e) => {
      tmp.push(e.region);
    });
    tmp = tmp.filter((element, index) => {
      return tmp.indexOf(element) === index;
    });
    tmp = tmp.sort();
    setRegions(tmp);
  }, []);

  useEffect(() => {
    if (Choice === "all") setCountries(data);
    else {
      let tmp: TCountry[] = [];
      data.forEach((e) => {
        if (e.region === Choice) {
          tmp.push(e);
        }
      });
      setCountries(tmp);
    }
  }, [Choice]);

  return (
    <div className="App">
      <header>
        <h1>Where in the World?</h1>
        <div className="mode">Mode?</div>
      </header>
      <main>
        <div className="search">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={(e) => Filter(e.target.value)}
            />
          </div>
          <div className="search-filter">
            <select
              name="filter"
              id="filter"
              onChange={(e) => setChoice(e.currentTarget.value)}
            >
              <option value="all"></option>
              {regions?.map((region) => (
                <option value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="Countries">
          {Countries?.map((e) => (
            <Country key={e.name} {...e} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
