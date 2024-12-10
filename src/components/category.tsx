// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// const handleDragStart = (e: any) => e.preventDefault();

// const items = [
//   <img
//     src="/assets/image.png"
//     onDragStart={handleDragStart}
//     role="presentation"
//     className=" h-60 w-72 text-center justify-center"
//   />,
//   <img
//     src="/assets/image.png"
//     onDragStart={handleDragStart}
//     role="presentation"
//     className=" h-60 w-72"
//   />,
//   <img
//     src="/assets/image.png"
//     onDragStart={handleDragStart}
//     role="presentation"
//     className=" h-60 w-72"
//   />,
// ];

// const Gallery = () => {
//   return (
//     <div className="container mx-auto px-4 py-8 bg-black/90">
//       <div>
//         <h2 className="text-4xl font-bold text-center text-white">
//           Games by Category
//         </h2>
//       </div>
//       <div>
//         <AliceCarousel mouseTracking items={items} />
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <div className="flex justify-center">
    <img
      src="/assets/image.png"
      onDragStart={handleDragStart}
      role="presentation"
      className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
    />
  </div>,
  <div className="flex justify-center">
    <a href="https://hangman-two-peach.vercel.app/" target="_blank">
      <img
        src="/assets/GuessNDie.png"
        onDragStart={handleDragStart}
        role="presentation"
        className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
      />
    </a>
  </div>,
  <div className="flex justify-center">
    <img
      src="/assets/aa.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
    />
  </div>,
  <div className="flex justify-center">
    <img
      src="/assets/football.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
    />
  </div>,
  <div className="flex justify-center">
    <a href="https://temporal-odyssey-build.vercel.app/">
      <img
        src="https://img.itch.zone/aW1hZ2UvMzA5MDg4MS8xODQ4MzMyMi5qcGc=/original/p06GbS.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
      />
    </a>
  </div>,
  <div className="flex justify-center">
    <img
      src="/assets/football.jpg"
      onDragStart={handleDragStart}
      role="presentation"
      className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
    />
  </div>,
  <div className="flex justify-center">
    <a href="https://pac-man-v8br.vercel.app/">
      <img
        src="https://wallpapers.com/images/featured/racing-games-jdbf894smtxuoaoy.jpg"
        onDragStart={handleDragStart}
        role="presentation"
        className="h-80 w-96 rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105 hover:rotate-3"
      />
    </a>
  </div>,
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div>
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">
          Games by Category
        </h2>
      </div>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          animationDuration={1500}
          autoPlayInterval={2000}
          disableButtonsControls
          disableDotsControls
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
