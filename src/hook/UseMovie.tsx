'use client'

import { useContext } from "react"

import { MovieContext } from "@/context/MovieContext"

export function useMovie() {
    const context = useContext(MovieContext)

    if (!context) {
        throw new Error("Os valores precisam estar no provider")
    }

    return context
}