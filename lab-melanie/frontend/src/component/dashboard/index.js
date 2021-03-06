import React from 'react';
import {connect} from 'react-redux';
import {
  riderFetchRequest,
  riderCreateRequest} from '../../action/rider-action';
import RiderForm from '../rider/rider-form/index';
import Rider from '../rider/rider-item/index';
import { bikeFetchRequest } from '../../action/bike-action';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchRiders();
    this.props.fetchBikes();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>I Want to Ride my Bicycle</h1>

        <RiderForm
          buttonText="Add a Rider"
          onComplete={this.props.createRider} />

        {this.props.riders ?
          this.props.riders.map(rider =>
            <div key={rider._id}>
              <Rider
                bikes={rider.bikes}
                rider={rider}
                buttonText="Delete Rider" />
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
  fetchBikes: () => dispatch(bikeFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
