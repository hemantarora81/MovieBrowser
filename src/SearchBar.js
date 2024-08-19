import React, { useRef } from "react";

const Header = ({
  searchQuery,
  setSearchQuery,
  genre,
  setGenre,
  releaseYear,
  setReleaseYear,
  rating,
  setRating,
  genres,
  years,
  ratings,
  resetFilters,
}) => {
  const searchInputRef = useRef(null);

  return (
    <div className="flex flex-col lg:flex-row justify-around lg:items-center lg:gap-4 my-4">
      <input
        type="text"
        className="w-full lg:w-[400px] mb-2 lg:mb-0 p-2 border border-gray-300 rounded text-white bg-transparent"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          searchInputRef.current?.focus();
        }}
        ref={searchInputRef}
      />

      <div className="flex flex-row justify-between gap-2 w-full">
        <select
          className="custom-select w-full"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <select
          className="custom-select w-full"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          className="custom-select w-full"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
        >
          <option value="">All Ratings</option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>

      <button
        className="py-2.5 px-5 me-2 lg:mt-0  sm:mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={resetFilters}
      >
        Reset
      </button>
    </div>
  );
};

export default Header;
