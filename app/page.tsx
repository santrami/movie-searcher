import Head from "next/head";
import MovieSearch from "./components/MovieSearch";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie Database</title>
        <meta name="description" content="Found your favorite movies here" />
      </Head>
      <main className="flex flex-col items-center justify-center container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-white"> Movie Database</h1>
        <MovieSearch />
      </main>
    </div>
  );
}
