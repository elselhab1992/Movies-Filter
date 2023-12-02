import { Container, Image, Heading, Movies } from "./PopularStyles";
import { useGlobalContext } from "../Context/Context";

const Popular = () => {
  const { filteredMovies } = useGlobalContext();

  return (
    <Container>
      {filteredMovies.map((movie) => {
        const { id, title, backdrop_path } = movie;

        return (
          <Movies key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w400${backdrop_path}`}
              alt={title}
            />
            <Heading>{title}</Heading>
          </Movies>
        );
      })}
    </Container>
  );
};

export default Popular;
