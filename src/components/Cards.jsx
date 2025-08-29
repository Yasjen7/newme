import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/7.jpg'
              path='/projects'
            />
            <CardItem
              src='images/10.jpg'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpeg'
              path='/about'
            />
            <CardItem
              src='videos/video.mp4'
              path='/projects'
            />
              <CardItem
              src='videos/video2.mp4'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;