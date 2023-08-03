import {create} from 'zustand';

interface Movies {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

interface MovieState {
    movies: Movies[];
    getMovies: (query: string) => Promise<void>;
}

export const useMoviesStore = create<MovieState>((set) => ({
    movies: [],
    getMovies: async (query: string) => {
        const res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`)
        const data = await res.json();
        set((state) => ({
            ...state,
            movies: data.results
        }))
    }
}));
