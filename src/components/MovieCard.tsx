'use client'

import Image from "next/image"

export type Movie = {
    title: string,
    id: string,
    poster_path: string,
    release_date: string
    vote_average?: string,
    adult?: boolean,
}

export function MovieCard(movie: Movie) {
    return (
        <div className="movieCard
            bg-gray-300 transition-transform rounded-md overflow-auto
        ">
            <Image className="w-full h-auto"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
            ></Image>
            <h1>Título: {movie.title}</h1>
            <p>Ano: {movie.release_date}</p>
            <p>id: {movie.id}</p>
        </div>
    )
}