import { initialState, aboutUs } from './aboutUs'
import * as t from 'actionCreators/actionTypes'

describe('aboutUs reducer', () => {
  it('should return initialState', () => {
    expect(aboutUs(undefined, {})).toEqual(initialState)
  });

  it('FIREBASE_GET_ABOUT_US', () => {
    const action = {
      type: t.FIREBASE_GET_ABOUT_US,
    };

    expect(aboutUs(initialState, action)).toEqual({
      status: "pending"
    })
  });

  it('FIREBASE_GET_ABOUT_US_FULLFULED', () => {
    const action = {
      type: t.FIREBASE_GET_ABOUT_US_FULLFULED,
      payload: ['something']
    };

    expect(aboutUs(initialState, action)).toEqual({
      status: "fulfilled",
      urls: ['something']
    })
  });

});
