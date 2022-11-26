import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0;
  min-height: 100vh;
  background-color: ${(props) => props.bg};

  a {
    text-decoration: none;

    padding: 5px 20px;
    padding-bottom: 6px;
    width: 100px;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(100, 100, 100, 0.2);

    color: ${(props) => props.color};
    background-color: ${(props) => props.bg2};

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.9em;
    font-weight: 600;

    img {
      width: 13px;
      rotate: 180deg;
    }
  }
`;

export const ContainerInfoCountri = styled.div`
  margin-top: 30px;
  display: flex;

  img {
    width: 100%;
    max-width: 400px;
    object-fit: contain;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    img {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    padding: 0;

    img {
        margin-bottom: 20px;
        max-width: 100%;
    }
  }
`;

export const CountryInformation = styled.div`
  width: 100%;
  padding: 20px 50px;
  padding-right: 0;

  color: ${(props) => props.color};

  position: relative;

  h1 {
    margin-bottom: 10px;
    font-weight: 700;
  }

  @media (max-width: 700px) {
    margin: 10px 0;
    padding: 30px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 1.6em;
    }
  }

  

  @media (max-width: 500px) {
    padding: 0;
    
    h1 {
      text-align: left;
      margin-bottom: 10px;
      font-size: 1.5em;
    }
  }
`;

export const Information = styled.div`
  p {
    font-size: 0.85em;
    font-weight: 600;
    line-height: 25px;
  }

  strong {
    font-weight: 700;
    margin-right: 10px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
  }

  @media (max-width: 700px) {
    div {
      display: flex;
      justify-content: space-between;
    }

    p {
      width: fit-content;
    }
  }

  @media (max-width: 500px) {
    div {
        flex-direction: column;
    }

    p {
        font-size: .8em;
    }

    p:nth-child(2) {
        margin-top: 10px;
    }
  }
`;

export const ContainerBorderCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  font-size: 0.7em;

  strong {
    font-size: 1.12em;
    font-weight: 700;
  }

  div {
    margin-left: 10px;
    border: 1px solid ${(props) => props.border};
    padding: 4px 18px;
    box-shadow: 0 0 10px ${(props) => props.border}; // rgba(150, 150, 150, .2);
    background-color: ${props=>props.bg};
    font-weight: 700;
  }

  @media (max-width: 500px) {
    margin-top: 30px;

    strong {
        width: 100%;
    }

    div {
        margin-top: 5px;
    }

  }
`;
