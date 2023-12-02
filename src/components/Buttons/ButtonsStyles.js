import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding-top: 100px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 130px;
  padding: 8px;
  margin: 0 10px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  transition: 0.7s;

  &:hover {
    cursor: pointer;
    color: #000;
    background-color: #fff;
  }
`;

export { Container, Button };
