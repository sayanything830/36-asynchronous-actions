import React from 'react';
import {connect} from 'react-redux';
import {
  riderFetchRequest,
  riderCreateRequest} from '../../action/rider-action';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchRiders();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Bikes and Riders</h1>

        {this.props.riders ?
          this.props.riders.map(rider =>
            <div key={rider._id}>
              {/* <span onClick={() => this.props.deleteAlbum(album)}>x</span> */}
              <p>{rider.name}</p>
            </div>)
          :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  riders: state.riders,
});

let mapDispatchToProps = dispatch => ({
  fetchRiders: () => dispatch(riderFetchRequest()),
  createRider: rider => dispatch(riderCreateRequest(rider)),
  // deleteRider: rider => dispatch(riderDeleteRequest(rider)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
