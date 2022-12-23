import axios from "axios";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./style";

import themeData from "../../Data/theme.json";

import arrowDark from "../../assets/images/arrowSearch_dark.svg";
import arrowLight from "../../assets/images/arrowSearch_light.svg";

export default function InfoCountry() {
  // CountryInformation

  const { country } = useParams();
  const { theme } = useContext(MyContext);
  const [InfoCountry, setInfoCountry] = useState({});

  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    async function getCountry() {
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((resp) => {
          const countries = resp.data[0];

          const objNative = Object.keys(countries.name.nativeName)[0];

          const arrayLeng = [];

          for (let i in countries.languages) {
            arrayLeng.push(countries.languages[i]);
          }

          const data = {
            flag: countries.flags.png,
            name: countries.name.common,

            nativeName: countries.name.nativeName[objNative].common,
            population: countries.population,
            region: countries.region,
            subRegion: countries.subregion,
            capital: countries.capital[0],

            topLevelDomain: countries.tld[0],
            currencies: Object.keys(countries.currencies)[0],
            lenguages: arrayLeng.join(", "),

          };


          const border = countries.borders;
          setBorderCountries(border);
          setInfoCountry(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    getCountry();
  }, []);

  var population = [];

  if (InfoCountry) {
    var num = String(InfoCountry.population).split("").reverse();

    for (let i = 0; i <= num.length - 1; i++) {
      if (i === 3 || i === 6) {
        population.push(".");
      }

      population.push(num[i]);

      if (i === 9) {
        population = [`${num[num.length - 1]} bi `];
      }
    }

    population = population.reverse().join("");
  }

  return (
    <Styled.Container
      bg={themeData[theme ? "light" : "dark"].background}
      bg2={theme ? themeData.clearText : themeData.dark.element}
      color={theme ? themeData.light.text : themeData.clearText}
    >
      {!!InfoCountry && (
        <div className="center">
          <Link to="/">
            <img
              src={theme ? arrowLight : arrowDark}
              alt="icone de seta do botão de voltar"
            />
            voltar
          </Link>

          <Styled.ContainerInfoCountri>
            <img
              src={InfoCountry.flag}
              alt={`bandeira da(o) ${InfoCountry.name}`}
            />

            <Styled.CountryInformation
              color={theme ? themeData.light.text : themeData.clearText}
            > 
              <h1>{InfoCountry.name} </h1>

              <Styled.Information
                color={theme ? themeData.light.text : themeData.clearText}
              >
                <div>
                  <p>
                    <strong>Nome Nativo:</strong> {InfoCountry.nativeName}{" "}
                    <br />
                    <strong>População:</strong> {population}
                    <br />
                    <strong>Região:</strong> {InfoCountry.region} <br />
                    <strong>Sub-região:</strong> {InfoCountry.subRegion} <br />
                    <strong>Capital:</strong> {InfoCountry.capital} <br />
                  </p>
                  <p>
                    <strong>Domínio de nível superior:</strong>{" "}
                    {InfoCountry.topLevelDomain} <br />
                    <strong>Moeadas:</strong> {InfoCountry.currencies} <br />
                    <strong>lenguagem:</strong>
                    {InfoCountry.lenguages}
                    <br />
                  </p>
                </div>
              </Styled.Information>

              <Styled.ContainerBorderCountries
                border={
                  theme ? "rgba(50, 50, 50, .1)" : "rgba(150, 150, 150, .1)"
                }
                bg={theme ? "none" : themeData.dark.element}
              >
                <strong>países fronteiriços: </strong>
                {borderCountries &&
                  borderCountries.map((resp) => <div>{resp}</div>)}
              </Styled.ContainerBorderCountries>
            </Styled.CountryInformation>
          </Styled.ContainerInfoCountri>
        </div>
      )}
    </Styled.Container>
  );
}
