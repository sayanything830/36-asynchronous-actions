let validateRider = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR. Rider must have an ID');
  if(!payload.name) throw new Error('VALIDATION ERROR. Rider must have name');
};

export default (state=[], action) => {
  let {type, payload} = action;
  // validateAlbum(payload) // Reminder that we can't do this in every case, so it's situational.

  switch(type) {
  case 'RIDER_SET': return payload;
  case 'RIDER_CREATE':
    validateRider(payload);
    return [...state, payload];
  case 'RIDER_UPDATE':
    validateRider(payload);
    return state.map(rider => rider._id === payload._id ? payload : rider);
  case 'RIDER_DELETE':
    validateRider(payload);
    return state.filter(rider => rider._id !== payload._id);
  default: return state;
  }
};
