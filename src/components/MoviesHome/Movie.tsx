import { useFetchMovies } from "@/api/movies";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MovieProps } from "@/types/movie";
import { toast } from "@/hooks/use-toast";
import { Loader, LinkIcon } from "lucide-react";

const Movie = () => {
  const { data, error, isLoading } = useFetchMovies();
  if (error) {
    toast({
      title: "Error In fetching movie",
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      description: error?.message,
    });
  }
  if (isLoading) {
    return (
      <div className="flex justify-center  flex- items-center h-screen w-full  scroll-m-0 scroll-p-0 scroll-smooth animate-ping animate">
        <Loader className="animate-spin dark:text-white " size={60} />
        <br />
        <p className="text-2xl ">Loading...</p>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-transparent w-full px-4 sm:px-8  py-4 sm:py-6 ml-2 sm:ml-4">
      <h2 className="text-3xl dark:text-white bg-transparent font-bold">
        Movies
      </h2>

      <div className="bg-transparent px-4 py-2 sm:px-6 sm:py-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map(
          ({
            actors,
            director,
            id,
            website,
            poster,
            rating,
            title,
            year,
            description,
          }: MovieProps) => (
            <div
              className="flex flex-1 h-full overflow-hidden flex-col max-w-full w-full dark:bg-gray-800 rounded-lg shadow-lg"
              key={id}
            >
              <Card className="w-full h-full ">
                <CardHeader className="text-2xl">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 p-4">
                  <div className="flex justify-center sm:w-1/2">
                    <img
                      src={poster}
                      alt={title}
                      className="object-cover w-full h-64 sm:h-40 rounded-lg"
                    />
                  </div>
                  <div className="sm:w-1/2 flex flex-col justify-between space-y-2">
                    <div className="dark:text-white text-lg">
                      <b>Actors:</b> {actors}
                    </div>
                    <div className="dark:text-white text-lg">
                      <b>Director:</b> {director}
                    </div>
                    <div className="dark:text-white text-lg">
                      <b>Year:</b> {year}
                    </div>
                    <div className="dark:text-white text-lg flex items-center">
                      <b>Rating:</b> {rating}/10
                    </div>
                  </div>
                </CardContent>
                <hr />
                <CardFooter>
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer flex items-center flex-row mt-2 gap-2 text-blue-500 hover:text-blue-600 hover:translate-x-1 transition"
                  >
                    Go to Movie
                    <LinkIcon size={20} className="text-blue-500" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          )
        )}
      </div>
    </main>
  );
};

export default Movie;
