import { Route, Routes } from "react-router-dom";
import { useFetchMovies } from "./api/movies";
import Footer from "./components/footer";
import Header from "./components/header";
import Movie from "./components/MoviesHome/Movie";
import NotFound from "./components/Not-found";

// https://www.freetestapi.com/api/v1/movies/1
const App = () => {
  const { data, error, isLoading, isSuccess } = useFetchMovies();

  console.log(data, error, isLoading, isSuccess);

  return (
    <div className="bg-gray-100  dark:bg-gray-900  dark:text-white">
      <Header />
      <Routes>
        <Route path="/" Component={Movie} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
