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
      <div className="flex justify-center flex-col items-center h-screen w-full] scroll-m-0 scroll-p-0 scroll-smooth animate-ping animate">
        <Loader className="animate-spin dark:text-white " size={60} />
        <br />
        <p className="text-2xl ">Loading...</p>
      </div>
    );
  }
  return (
    <main className="min-h-screen w-full px-4 sm:px-8  py-4 sm:py-6 ml-2 sm:ml-4  ">
      <h2 className="text-3xl dark:text-white font-bold">Movies</h2>

      <div className="px-4 py-2 sm:px-6 sm:py-4 grid grid-cols-1 grid-rows-1 overflow-hidden  md:grid-cols-2 md:grid-row-2 lg:grid-cols-3 lg:grid-row-3 gap-10 ">
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
              className="min-w-4xl max-w-5xl dark:bg-gray-800 overflow-hidden  "
              key={id}
            >
              <Card className="">
                <CardHeader className="text-2xl ">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full px-2 py-1 h-mx my-1 mx-1 min-w-40  flex justify-between">
                    <div className="flex flex-col items-start w-1/2">
                      <img
                        src={poster}
                        alt={title}
                        className="object-cover w-40 h-40 rounded-lg "
                      />
                    </div>
                    <div className=" w-1/2 space-y-2 px-2 py-1  flex flex-col items-start justify-center">
                      <div className=" dark:text-white text-lg  ">
                        <b>Actors : </b>

                        {actors}
                      </div>
                      <div className=" dark:text-white text-lg  ">
                        <b>Director : </b>
                        {director}
                      </div>
                      <div className=" dark:text-white text-lg  ">
                        <b>Year : </b>
                        {year}
                      </div>
                      <div className=" dark:text-white text-lg  ">
                        <div className="flex items-center flex-row">
                          {/* {Array.from({ length: rating })
                            .fill(".")
                            .map((_, index) => (
                              <Star
                                key={index}
                                size={18}
                                className="dark:text-white flex "
                              />
                            ))}
                          {"  "} */}
                          <b>Rating: </b>&nbsp;{rating}/10{" "}
                        </div>
                      </div>
                      <div className=" dark:text-white text-lg  "></div>
                    </div>
                  </div>
                </CardContent>
                <hr />
                <CardFooter>
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="mx-2 mt-1 px-4 pt-2 w-full h-full flex flex-row gap-2 items-center hover:-translate-x-2 text-blue-500 hover:text-blue-600">
                      Go to Movie{" "}
                      <LinkIcon size={20} className="text-blue-500" />
                    </div>
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
