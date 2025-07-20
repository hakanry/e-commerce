import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
function Clients() {
  return (
    <div className="flex flex-col gap-15 text-8xl  text-neutral-500 my-28  justify-center md:flex-row md:text-6xl">
      <FontAwesomeIcon icon={faHooli} />
      <FontAwesomeIcon icon={faLyft} />
      <FontAwesomeIcon icon={faPiedPiperHat} />
      <FontAwesomeIcon icon={faAws} />
      <FontAwesomeIcon icon={faStripe} />
      <FontAwesomeIcon icon={faRedditAlien} />
    </div>
  );
}

export default Clients;
