const latestCollections = [
  { src: "/assets/image.png", name: "PacMan", link: "https://pac-man-v8br.vercel.app/" },
  {
    src: "/assets/GuessNDie.png",
    name: "Guess & Survive",
    link: "https://hangman-two-peach.vercel.app/",
  },
  {
    src: "/assets/aa.jpg",
    name: "Guess & Survive",
    link: "https://hangman-two-peach.vercel.app/",
  },
  { src: "/assets/dd.jpg", name: "Big Win", link: "https://pac-man-v8br.vercel.app/" },
];

const Trending = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">
        Latest Games
      </h2>
      <p className="text-center mb-6 text-lg text-gray-600">
        Elevate your gaming experience with our hottest picks
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {latestCollections.map((collection, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a href={collection.link}>
              <div className="relative cursor-pointer w-full h-80 overflow-hidden rounded-lg shadow-md">
                <img
                  src={collection.src}
                  alt={collection.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                  {collection.name}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
