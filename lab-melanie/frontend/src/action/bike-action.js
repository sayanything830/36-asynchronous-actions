import superagent from 'superagent';
import { logError } from '../lib/utils';

export const bikeGet = bikes => ({
  type: 'BIKE_GET',
  payload: bikes,
});

export const bikeCreate = bike => ({
  type: 'BIKE_CREATE',
  payload: bike,
});

export const bikeUpdate = bike => ({
  type: 'BIKE_UPDATE',
  payload: bike,
});

export const bikeDelete = bike => ({
  type: 'BIKE_DELETE',
  payload: bike,
});

// ASYNC ACTIONS
export const bikeFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/bike`)
    .then(res => dispatch(bikeGet(res.body)))
    .catch(logError);
};

export const bikeCreateRequest = bike => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/v1/bike`)
    .send(bike)
    .then(res => dispatch(bikeCreate(res.body)))
    .catch(logError);
};

export const bikeUpdateRequest = bike => (dispatch) => {
  return superagent.put(`${__API_URL__}/api/v1/bike/`)
    .send(bike)
    .then(() => dispatch(bikeUpdate(bike)))
    .catch(logError);
};

export const bikeDeleteRequest = bike => (dispatch) => {
  return superagent.delete(`${__API_URL__}/api/v1/bike/${bike._id}`)
    .then(() => dispatch(bikeDelete(bike)))
    .catch(logError);
};

