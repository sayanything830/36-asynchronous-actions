let validateBike = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Bike must have an ID');
  if(!payload.rider) throw new Error('VALIDATION ERROR. Bike must have rider');
};

const initialState = {};
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
  case 'BIKE_RESET':
    return initialState;
  default: return state;
  }
};

// let validateRider = rider => {
//   if(!rider._id || !rider.name) {
//     throw new Error('Validation Error: rider must include id and name');
//   }
// };

// let validateBike = bike => {
//   if(!bike._id || !bike.make || !bike.rider) {
//     throw new Error('Validation Error: bike must include id, make, and rider');
//   }
// };

// let initialState = {};

// export default (state=initialState, action) => {
//   let {type, payload} = action;
//   let changedState, riderId, riderBikes, updatedBikes, updatedState;

//   switch(type) {
//   case 'RIDER_CREATE':
//     validateRider(payload);
//     return {...state, [payload._id]: []};
//   case 'RIDER_DELETE':
//     validateRider(payload);
//     changedState = {...state};
//     delete changedState[payload._id];
//     return changedState;
//   case 'BIKE_CREATE':
//     validateBike(payload);
//     riderId = payload.riderId;
//     riderBikes = state[riderId];
//     updatedBikes = [...riderBikes, payload];
//     return {...state, [riderId]: updatedBikes};;
//   case 'BIKE_UPDATE':
//     validateBike(payload);
//     riderId = payload.riderId;
//     riderBikes = state[riderId];
//     updatedBikes = riderBikes.map(bike => bike._id === payload._id ? payload : bike);
//     return {...state, [riderId]: updatedBikes};;
//   case 'BIKE_DELETE':
//     validateBike(payload);
//     riderId = payload.riderId;
//     updatedState = {...state};
//     updatedState[riderId] = state[riderId].filter(bike => bike._id !== payload._id);
//     return updatedState;
//   case 'BIKE_RESET': return initialState;
//   default: return state;
//   }
// };
