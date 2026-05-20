'use client'

import { createContext, ReactNode, useState } from "react";

import type { Movie } from "@/components/MovieCard";

type MovieContextType = {
    movies: Movie[]
    setMovies: React.Dispatch<Movie[]>
}

export const MovieContext = createContext<MovieContextType | null>(null)

export function MovieProvider({children}: {children: ReactNode}) {
    const [movies, setMovies] = useState<Movie[]>([])

    return (
        <MovieContext.Provider
            value={
                {movies, setMovies}
            }
        >
            {children}
        </MovieContext.Provider>
    )
}