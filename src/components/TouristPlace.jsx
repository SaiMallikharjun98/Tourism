import React from "react";

const TouristPlace = (props) => {
  return (
    <>
      <h1 className=" mt-10 text-5xl text-center text-blue-500 font-bold ">
        Tourism Places
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {props.places.map((place, index) => (
          <div key={index}>
            <div
              className={`mt-5 mb-1 border-gray-400 border-[0.5px] rounded-lg w-[360px] flex flex-col text-center justify-center "
            ${
              place.whenToVisit === "Summer" ? "bg-yellow-200 text-xl" : "bg-blue-200 text-xl"
            }`}
            >
              <img
                src={place.img}
                alt={`${place.placeName} image`}
                className="w-[360px] rounded-lg p-1"
              />
              <h2 className="text-xl text-pink-400 ">{place.placeName}</h2>
              <p className="text-sm text-gray-400 ">{place.desc}</p>
              <p className="text-sm text-gray-800 font-bold">
                Best time to visit: {place.whenToVisit}
              </p>
              <p className="text-xl text-orange-500">
                Ratings: {place.ratings}⭐
              </p>
              <p className="text-[4px] text-black pb-2">
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
