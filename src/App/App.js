import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MyContext from "../context/MyContext";

import Main from "../pages/Main";
import InfoCountry from "../pages/infoCountry";
import Header from "../components/Header";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/info/:country" element={<InfoCountry />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
