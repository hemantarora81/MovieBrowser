import React from "react";

const Card = ({ movie, handleFavorite, isFavorite }) => {
  const truncatedTitle =
    movie.title.length > 18 ? `${movie.title.slice(0, 18)}...` : movie.title;

  return (
    <div
      className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-lg shadow-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/${movie.poster_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end rounded-lg">
        <div className="w-full text-white p-4">
          <div className="flex w-100 justify-between">
            <h3
              className="text-sm sm:text-base md:text-lg font-semibold"
              title={movie.title}
            >
              {truncatedTitle}
            </h3>
            <p className="text-xs sm:text-sm md:text-base">
              {movie.release_date}
            </p>
          </div>

          <button
            className={`mt-2 py-1 px-3 rounded ${
              isFavorite
                ? "bg-red-600 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2.5 px-5 rounded-lg text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-white"
                : "align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-2.5 px-5 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-black"
            }`}
            data-ripple-light="true"
            onClick={() => handleFavorite(movie)}
          >
            {isFavorite ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
