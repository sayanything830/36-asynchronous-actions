// import superagent from 'superagent';
// import { logError } from '../lib/utils';

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
