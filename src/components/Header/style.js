import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.bg};
  padding: 15px 0;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: 800;
    font-size: 1.6em;
    margin-right: 15px;
    color: ${(props) => props.color};
  }

  img {
    height: 55%;
    rotate: -20deg;
    margin-right: 10px;

    transition: all 0.2s ease-in-out;
  }

  button {
    height: 30px;
    display: flex;
    align-items: center;

    background: none;
    border: none;

    color: ${(props) => props.color};
    font-weight: 600;

    cursor: pointer;

    &:hover {
      img {
        rotate: 365deg;
      }
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4em;
    }
  }
`;
