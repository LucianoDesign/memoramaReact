import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../assets/BackFace.jpg';

const Card = ({ name, clave, flipCard, unflippedCards, disabledCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  useEffect(() => {
    if (unflippedCards.includes(clave)) {
      setTimeout(() => setIsFlipped(false), 700);
    }
  }, [unflippedCards]);

  useEffect(() => {
    if (disabledCards.includes(clave)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  const handleClick = () => {
    const value = flipCard(name, clave);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className='card-image'
          src={backFace}
          alt='back-face'
          onClick={hasEvent ? handleClick : null}
        />
        <p onClick={hasEvent ? handleClick : null}>{name}</p>
      </ReactCardFlip>
    </div>
  );
};

export default Card;