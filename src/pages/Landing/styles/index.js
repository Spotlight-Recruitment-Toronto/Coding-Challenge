import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  margin-bottom: 40px;
`;

export const SubTitle = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-basis: calc(50% - 40px);
  justify-content: center;
`;

export const Button = styled(Link)`
  && {
    margin-top: 20px;
    text-decoration: none;
    border-radius: 5px;
    padding: 20px;
    outline: none;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    background-color: ${({ disabled }) => (disabled ? "lightgrey" : "#f0db4f")};
    color: #323330;
    font-size: 16px;
    letter-spacing: 2px;
    border: none;
    font-weight: bold;
    width: 200px;
    text-align: center;
  }
`;
