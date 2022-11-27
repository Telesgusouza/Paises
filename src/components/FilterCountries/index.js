import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";
import axios from "axios";

import * as Styled from "./style";
import themeData from "../../Data/theme.json";

import searchLight from "../../assets/images/search_light.svg";
import searchDark from "../../assets/images/search_dark.svg";

import arrowDark from "../../assets/images/arrow_dark.svg";
import arrowLight from "../../assets/images/arrow_light.svg";
import ListOfCountries from "../ListOfCountries";

export default function FilterCountries() {
  const { theme } = useContext(MyContext);

  const [ListCountries, setListCountries] = useState([]);
  const [select, setSelect] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    var arrayCountries = [];

    axios
      .get("https://restcountries.com/v3.1/all")
      .then((resp) => {
        const getCountries = resp.data.slice(0, 15);

        getCountries.forEach((countries) => {
          const data = {
            name: countries.name.common,
            population: countries.population,
            region: countries.region,
            capital: countries.capital[0],
            flag: countries.flags.png,
          };

          arrayCountries.push(data);
          setListCountries(arrayCountries);
        });
      })
      .catch((err) => console.error(err));
  }, []);

  function handleSelect() {
    setSelect((p) => !p);
  }

  async function getSearch() {
    if (!!search) {
      const getSearch = await axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .catch((err) => {
          console.error(err);
          alert("erro na pesquisa");
          setSearch("");
        });

      const data = {
        name: getSearch.data[0].name.common,
        population: getSearch.data[0].population,
        region: getSearch.data[0].region,
        capital: getSearch.data[0].capital[0],
        flag: getSearch.data[0].flags.png,
      };

      setListCountries([data]);
    } else {
      var arrayCountries = [];

      axios
        .get("https://restcountries.com/v3.1/all")
        .then((resp) => {
          const getCountries = resp.data.slice(0, 15);

          getCountries.forEach((countries) => {
            const data = {
              name: countries.name.common,
              population: countries.population,
              region: countries.region,
              capital: countries.capital[0],
              flag: countries.flags.png,
            };

            arrayCountries.push(data);
            setListCountries(arrayCountries);
          });
        })
        .catch((err) => console.error(err));
    }
  }

  async function getRegion(region) {
    setSelect(false);
    const Regions = await axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .catch((err) => console.error(err));

    var arrayCountries = [];

    Regions.data.forEach((countries) => {
      const data = {
        name: countries.name.common,
        population: countries.population,
        region: countries.region,
        capital: countries.capital[0],
        flag: countries.flags.png,
      };

      arrayCountries.push(data);
      setListCountries(arrayCountries);
    });
  }

  

  return (
    <>
      <Styled.Container className="center">
        <Styled.InputSearch
          bg={theme ? themeData.clearText : themeData.dark.element}
          color={theme ? themeData.light.text : themeData.clearText}
        >
          <img
            src={theme ? searchLight : searchDark}
            onClick={() => getSearch()}
          />
          <input
            type="text"
            placeholder="Pesquise um pais"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Styled.InputSearch>

        <Styled.Select
          bg={theme ? themeData.clearText : themeData.dark.element}
          deg={select ? "180deg" : "0deg"}
          color={theme ? themeData.light.text : themeData.clearText}
        >
          <label onClick={handleSelect}>
            Filtrar região
            <img src={theme ? arrowLight : arrowDark} />
          </label>

          <Styled.listOptions
            bg={theme ? themeData.clearText : themeData.dark.element}
            color={theme ? themeData.light.text : themeData.clearText}
            select={select ? "block" : "none"}
          >
            <Styled.Option onClick={() => getRegion("Africa")}>
              Africa
            </Styled.Option>
            <Styled.Option onClick={() => getRegion("America")}>
              America
            </Styled.Option>
            <Styled.Option onClick={() => getRegion("Asia")}>
              Asia
            </Styled.Option>
            <Styled.Option onClick={() => getRegion("Europe")}>
              Europa
            </Styled.Option>
            <Styled.Option onClick={() => getRegion("Oceania")}>
              Oceania
            </Styled.Option>
          </Styled.listOptions>
        </Styled.Select>
      </Styled.Container>

      

      <Styled.ContainerListOfCountries className="center">
        {ListCountries &&
          ListCountries.map((country) => (
            <ListOfCountries
              key={country.name}
              infoCountry={country}
            />
          ))}
      </Styled.ContainerListOfCountries>
    </>
  );
}
