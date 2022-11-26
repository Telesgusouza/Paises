import * as Styled from "./style";
import { useContext } from "react";

import MyContext from '../../context/MyContext';

import logoDark from "../../assets/images/dark.svg";
import logoLight from '../../assets/images/light.svg';
import themeData from '../../Data/theme.json';


export default function Header() {

    const {theme, setTheme} = useContext(MyContext);


    function handleTheme() {
        setTheme(!theme);
    }

  return (
    <Styled.Container 
    bg={theme ? themeData.clearText : themeData.dark.element} 
    color={theme ? themeData.light.text : themeData.clearText }
    >
      <div className="center">
        <h1>Onde no mundo?</h1>
        <label>
          <button onClick={handleTheme} >
            <img src={theme ? logoLight :logoDark} />
            Modo Escuro
          </button>
        </label>
      </div>
    </Styled.Container>
  );
}
