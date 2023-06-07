import React from "react";

const StarRating = ({ rating }) => {
  //Definerer en funktionskomponent kaldet "StarRating", der modtager en egenskab (props) ved navn "rating".


  const getStarIcons = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-gray-500"></i>);
      }
    }
    return stars;
  };
  //Definerer en hjælpefunktion ved navn "getStarIcons", som opretter en liste med stjerne-ikoner baseret på den modtagne rating. Hvis indeks "i" er mindre end rating, tilføjes en fyldt stjerne (fas fa-star text-yellow-500), ellers tilføjes en tom stjerne (far fa-star text-gray-500).

  return <div className="flex items-center">{getStarIcons()}</div>;
};

export default StarRating;
