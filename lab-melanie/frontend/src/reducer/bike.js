let validateBike = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Bike must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Bike must have name');
};

export default (state={}, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'RIDER_CREATE': return {...state, [payload._id]: []};
  case 'RIDER_DELETE':
    delete state[payload._id];
    return {...state};
  case 'BIKE_GET': return payload;
  case 'BIKE_CREATE':
    validateBike(payload);
    state[payload._id] = state[payload._id].concat([payload]);
    return {...state};
  case 'BIKE_UPDATE':
    validateBike(payload);
    state[payload._id] = state[payload._id].map(bike =>
      bike._id === payload._id ? payload : bike);
    return {...state};
  case 'BIKE_DELETE':
    validateBike(payload);
    state[payload._id] = state[payload._id].filter(bike => bike._id !== payload._id);
    return {...state};
  default: return state;
  }
};
