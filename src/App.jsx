import TouristPlace from "./components/TouristPlace";
import React from "react";
const App = () => {
  const touristPlaces = [
    {
      placeName: "Goa",
      desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
      img: "/Goa-image.avif",
      whenToVisit: "Winter",
      ratings: 4.5,
      price: 15000,
    },
    {
      placeName: "Manali",
      desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
      img: "/manali-image.avif",
      whenToVisit: "Summer",
      ratings: 4.7,
      price: 10000,
    },
    {
      placeName: "Kerala",
      desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
      img: "/kerala-image.avif",
      whenToVisit: "Winter",
      ratings: 4.8,
      price: 20000,
    },
    {
      placeName: "Jaipur",
      desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
      img: "/jaipur-image.avif",
      whenToVisit: "Winter",
      ratings: 4.6,
      price: 12000,
    },
  ];

  return (
    <>
      <TouristPlace places={touristPlaces} />
    </>
  );
};

export default App;
