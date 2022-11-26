import { useContext } from 'react';

import MyContext from '../../context/MyContext';
import themeData from '../../Data/theme.json';

import FilterCountries from '../../components/FilterCountries';
import * as Styled from './style';

export default function Main() {

    const {theme} = useContext(MyContext);

    console.log()

    
    return (
        <Styled.Container bg={themeData[theme?'light':'dark'].background } >
            <FilterCountries />
        </Styled.Container>
    )
}
