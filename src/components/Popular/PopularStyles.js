import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 50px auto;
  padding: 0 300px;
`;

const Movies = styled.div`
  margin: 5px auto;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.7s;

  &:hover {
    scale: 1.1;
    cursor: pointer;
  }
`;

const Heading = styled.h3`
  margin-left: 10px;
  margin-bottom: 10px;
  color: #fff;
  position: absolute;
  bottom: 10px;
`;

export { Container, Movies, Image, Heading };
