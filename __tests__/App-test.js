/**
 * @format
 */

import 'react-native';
import React from 'react';



import renderer from 'react-test-renderer';


//Mock for the Sound Module
jest.mock('react-native-sound', () => {
  class SoundMock {
    constructor(path, type, callback) {}
  }


  SoundMock.prototype.play = jest.fn();
 

  

  return SoundMock;
})



import ClockComponent from '../src/components/ClockComponent';
import ClockHeaderComponent from '../src/components/ClockHeaderComponent';
import ClockFooterComponent from '../src/components/ClockFooterComponent';
import SpeedButton from '../src/components/reusableComponents/SpeedButton';
import HomePage from '../src/components/HomePage';
import App from '../src/App';





it('Clock Component renders correctly', () => {
  renderer.create(<ClockComponent />);
});

it('Clock Header Component renders correctly', () => {
  renderer.create(<ClockHeaderComponent />);
});

it('Clock Footer Component renders correctly', () => {
  renderer.create(<ClockFooterComponent />);
});

it('Speed Buttons renders correctly', () => {
  renderer.create(<SpeedButton />);
});

it('HomePage renders correctly', () => {
  renderer.create(<HomePage />);
});


it('Whole App renders correctly', () => {
  renderer.create(<App />);
});