import * as actions from './actionCreators';
import * as types from './actionTypes';
import { refs } from '../helpers/firebase';

jest.mock('../helpers/firebase');


describe('actions', () => {

  beforeEach(() => {
    refs.mockReset();
  });

  it('should create an action with required params', () => {
      refs.mockReturnValue('refsResult');
      expect(actions.getImageRef('photos', 9)).toEqual({type: types.FIREBASE_GET_IMAGE_REFS, payload: 'refsResult'});
      expect(refs).toBeCalledWith('photos', 9, false);
  });

  it('should create an action with required params and non-required argument', () => {
    actions.getImageRef('photos', 9, true);
    expect(refs).toBeCalledWith('photos', 9, true);
  });
});
