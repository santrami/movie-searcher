
export const searchMovies = async (query: string) => {
  const baseURL = "https://api.themoviedb.org/3";
  const response = await fetch(`${baseURL}/search/movie?api_key=${process.env.API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
}
