import Gallery from "./Gallery";

const HomeSlide = () => {
  const images = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
    { src: "/home-slide-6.jpeg" },
    { src: "/home-slide-7.jpeg" },
    { src: "/home-slide-8.jpeg" },
  ];

  return (
    <Gallery
      images={images}
      width="1440px"
      height="681px"
    />
  );
};

export default HomeSlide;