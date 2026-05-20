'use client'

import { useMovie } from "@/hook/UseMovie"
import { useEffect, useState } from "react"

export function SearchBar() {

    const [input, setInput] = useState("")
 
    const {setMovies} = useMovie()

    async function searchMovies() {
        let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a8d825e7e2d5f45ed6f3f2f8773b0afe")

        if (input) {
            response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a8d825e7e2d5f45ed6f3f2f8773b0afe&query=${input}`)
        }

        const data = await response.json()
        console.log(data)   
        setMovies(data.results)
    }

    useEffect(() => {
        searchMovies()
    }, [])
 
    return (
        <header className="bg-red-800 flex flex-row justify-between items-center px-10 py-2">
            <h1 className="text-2xl font-bold text-white">NETFLIX</h1>

            <form className="flex flex-row gap-5">
                <input value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                 className="bg-amber-50 rounded-md px-2" type="text" placeholder="Quero assistir..." />
                <button onClick={searchMovies} type="button"
                className="bg-black text-white hover:bg-white hover:text-black hover:cursor-pointer transition-colors rounded-md p-2">Search</button>

            </form>
        </header>
    )
}