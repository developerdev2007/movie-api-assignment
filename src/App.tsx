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
    <div className="max-w-screen-2xl mx-auto ">
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
