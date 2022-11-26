import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import themeData from "../../Data/theme.json";

import * as Styled from "./style";

import { Link } from "react-router-dom";

export default function ListOfCountries({ infoCountry }) {
  const { theme } = useContext(MyContext);

  var num = String(infoCountry.population).split("").reverse();

  var population = [];

  for (let i = 0; i <= num.length - 1; i++) {
    if (i === 3 || i === 6) {
      population.push(".");
    }

    population.push(num[i]);

    if (i === 9) {
      population = [`${num[num.length - 1]} bi `];
    }
  }




  
  return (
    <Styled.Containercountry
      bg={theme ? themeData.clearText : themeData.dark.element}
    >
      <Link to={`/info/${infoCountry.name}`}>
        <Styled.CountryFralg>
          <img src={infoCountry.flag} />
        </Styled.CountryFralg>

        <Styled.CountryInformation
          color={theme ? themeData.light.text : themeData.clearText}
        >
          <h2>{infoCountry.name}</h2>
          <p>
            <strong>População: </strong> {population.reverse()}
          </p>
          <p>
            <strong>Região: </strong> {infoCountry.region}
          </p>
          <p>
            <strong>Capital: </strong> {infoCountry.capital}
          </p>
        </Styled.CountryInformation>
      </Link>
    </Styled.Containercountry>
  );
}
