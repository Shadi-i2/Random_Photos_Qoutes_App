const Photo = ({ photo , handlePhotoClick}) => {
  const { download_url, author } = photo;
  return (
    <div
      className="relative my-2 md:mx-3 md:my-auto snap-center
      cursor-pointer md:scroll-ml-4" onClick={handlePhotoClick}
    >
      <img
        src={download_url}
        alt="#"
        className="shadow-lg shadow-slate-800/50 h-52 md:h-80 w-72 md:w-80
          lg:w-96 aspect-square rounded-2xl hover:border-4"
      />
      <p
        className="absolute px-3 py-1 text-sm tracking-widest text-center
        text-gray-200 md:text-xl bottom-4 bg-slate-600 bg-opacity-70"
      >
        {author}
      </p>
    </div>
  );
};

export default Photo;
