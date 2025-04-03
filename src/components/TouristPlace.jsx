import React from "react";

const TouristPlace = (props) => {
  return (
    <>
      <h1 className="text-2xl text-center text-blue-500 font-bold ">
        Tourism Places
      </h1>
      <div className="flex flex-wrap justify-center gap-1">
        {props.places.map((place, index) => (
          <div key={index}>
            <div
              className={`mt-1  mb-1 border-gray-400 border-[0.5px] rounded-lg w-[70px] flex flex-col text-center justify-center "
            ${
              place.whenToVisit === "Summer" ? "bg-yellow-200" : "bg-blue-200"
            }`}
            >
              <img
                src={place.img}
                alt={`${place.placeName} image`}
                className="w-[90px] rounded-lg p-1"
              />
              <h2 className="text-[5px] text-pink-400 ">{place.placeName}</h2>
              <p className="text-[3px] text-gray-400 ">{place.desc}</p>
              <p className="text-[3px] text-gray-800 font-bold">
                Best time to visit: {place.whenToVisit}
              </p>
              <p className="text-[2px] text-orange-500">
                Ratings: {place.ratings}⭐
              </p>
              <p className="text-[3px] text-black pb-2">
                Estimated Price: ₹{place.price}
              </p>
              {place.price < 12000 ? (
                <p className="text-green-500 text-[5px]">Cheaper</p>
              ) : (
                <p className="text-pink-500 text-[5px]">Expensive</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TouristPlace;
