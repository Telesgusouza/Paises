import styled from "styled-components";

export const Containercountry = styled.div`
  width: 100%;

  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    scale: 1.04;
  }

  a {
    text-decoration: none;
  }
`;

export const CountryFralg = styled.div`
  width: 100%;
  max-height: 170px;

  height: fit-content;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 140px;
    object-fit: cover;

    box-shadow: 0 0 15px rgba(100, 100, 100, 0.2);
  }
`;

export const CountryInformation = styled.div`
  padding: 24px;
  height: fit-content;

  h2 {
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 15px;

    color: ${props=>props.color};
  }

  p {
    font-size: 0.8em;
    margin-bottom: 7px;

    color: ${props=>props.color};
  }

  strong {
    font-weight: 600;
  }
`;
