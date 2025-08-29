import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/about'
            />
            <CardItem
              src='images/10.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mefr.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/about'
            />
            <CardItem
              src='videos/video.mp4'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
              <CardItem
              src='videos/video2.mp4'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/contacts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;