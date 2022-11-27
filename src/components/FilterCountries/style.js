import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;

  img {
    height: 30px;
  }

  @media (max-width: 530px) {
    flex-direction: column;
    padding: 30px 0;
  }
`;

export const InputSearch = styled.div`
  position: relative;

  margin-right: 15px;
  margin-bottom: 30px;
  height: 40px;
  width: 100%;
  max-width: 300px;

  img {
    position: absolute;
    top: 13px;
    left: 18px;

    height: 15px;
    cursor: pointer;

    z-index: 15;
  }
  Input {
    padding: 5px 14px 5px 50px;

    width: 100%;
    height: 100%;
    position: absolute;

    border: none;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(150, 150, 150, 0.2);
    background-color: ${(props) => props.bg};

    color: ${(props) => props.color};

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #c0c0c0;
    }
  }
`;

export const Select = styled.div`
  background-color: ${(props) => props.bg};
  box-shadow: 0 0 15px rgba(150, 150, 150, 0.2);
  border-radius: 5px;

  position: relative;
  height: 43px;
  width: 140px;

  img {
    height: 14px;

    rotate: ${(props) => props.deg};
  }

  label {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 600;
    padding: 12px 16px;
    height: 100%;
    width: 100%;

    color: ${(props) => props.color};
    font-size: 0.85em;

    cursor: pointer;
  }
`;

export const listOptions = styled.div`
  position: absolute;
  background-color: ${(props) => props.bg};
  box-shadow: 0 0 15px rgba(150, 150, 150, 0.2);
  width: 100%;
  margin-top: 55px;
  border-radius: 4px;
  padding: 10px 15px;

  color: ${(props) => props.color};

  display: ${(props) => props.select};
`;

export const Option = styled.p`
  font-size: 0.8em;
  font-weight: 600;
  padding: 4px 0;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ContainerListOfCountries = styled.main`
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 18px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
