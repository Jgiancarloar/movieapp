import MovieSearch from "./components/MovieSearch"
import MovieList from "./components/MovieList"

function App() {

  return (
    <main className="h-screen max-w-[1500px] mx-auto flex flex-col items-center p-10 gap-5">
      <MovieSearch />
      <MovieList />
    </main>
  )
}

export default App
