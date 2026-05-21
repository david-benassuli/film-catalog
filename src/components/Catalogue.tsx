import { useMovie } from "@/hook/UseMovie";
import { MovieCard } from "./MovieCard";

export function Catalogue() {

    const {movies} = useMovie()

    return (
        <section id="catalogue"
            className="bg-black grid grid-cols-1 gap-2 p-2
                        xl:grid-cols-5
                        lg:grid-cols-4
                        md:grid-cols-3
                        sm:grid-cols-2
            "
        >   
            {movies.map(movie => <MovieCard key={crypto.randomUUID()}
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                />)}
        </section>
    )
}