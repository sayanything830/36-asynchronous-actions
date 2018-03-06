import superagent from 'superagent';
import {logError} from '../lib/utils';

// ACTION CREATORS
export const riderSet = riders => ({
  type: 'RIDER_SET',
  payload: riders,
});

export const riderCreate = rider => ({
  type: 'RIDER_CREATE',
  payload: rider,
});

export const riderUpdate = rider => ({
  type: 'RIDER_UPDATE',
  payload: rider,
});

export const riderDelete = rider => ({
  type: 'RIDER_DELETE',
  payload: rider,
});

// ASYNC ACTIONS
export const riderFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/rider`)
    .then(res => dispatch(riderSet(res.body)))
    .catch(logError);
};

export const riderCreateRequest = rider => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/rider`)
    .send(rider)
    .then(res => dispatch(riderCreate(res.body)))
    .catch(logError);
};
