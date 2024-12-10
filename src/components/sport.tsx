const latestCollections = [
  {
    src: "https://i.ibb.co/ZJQN1DP/image-name.jpg",
    name: "Cricket",
    link: "https://pac-man-v8br.vercel.app/",
  },
  {
    src: "/assets/football.jpg",
    name: "FIFA 2024",
    link: "https://hangman-two-peach.vercel.app/",
  },
];

const Sport = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-black/95">
      <h2 className="text-4xl font-bold text-center mb-4 text-white">
        Sport Games
      </h2>
      <p className="text-center mb-6 text-lg text-gray-600">
        Elevate your sport gaming experience with our hottest picks
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
                  <a
                    href={collection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-400 hover:bg-blue-600 ml-10 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Play for Free!
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sport;
