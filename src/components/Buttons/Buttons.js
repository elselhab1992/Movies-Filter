import genres from "../../Data/genres";
import { Container, Button } from "./ButtonsStyles";
import { useGlobalContext } from "../Context/Context";

const Buttons = () => {
  const { movies, handleFilter, setFilteredMovies } = useGlobalContext();

  return (
    <Container>
      {genres.map((genre) => {
        const { id, name } = genre;

        return (
          <Button key={id} onClick={() => handleFilter(id)}>
            {name}
          </Button>
        );
      })}
    </Container>
  );
};

export default Buttons;
