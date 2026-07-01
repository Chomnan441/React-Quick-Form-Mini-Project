import { RadioGroup, RadioOption } from "@/components/ui/RadioGroup";

function MovieList({
  movies,
  name,
  selectedMovie,
  onSelect,
  error,
}) {
  return (
    <RadioGroup
      name={name}
      label="เลือกหนังที่คุณชอบ"
      required
      error={error}
    >
      {movies.map((movie) => {
        const movieKey = `${movie.title}-${movie.year}`;

        return (
          <RadioOption
            key={movieKey}
            id={movieKey}
            name={name}
            value={movie.title}
            checked={selectedMovie === movie.title}
            onChange={() => onSelect(movie.title)}
          >
            <span className="font-semibold">
              {movie.title} ({movie.year})
            </span>
            <span className="mt-0.5 block text-muted-foreground">
              Director: {movie.director}
            </span>
          </RadioOption>
        );
      })}
    </RadioGroup>
  );
}

export { MovieList };
