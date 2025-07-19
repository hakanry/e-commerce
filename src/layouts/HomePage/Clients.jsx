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
    <div className="flex flex-col text-8xl text-neutral-500 my-28">
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
