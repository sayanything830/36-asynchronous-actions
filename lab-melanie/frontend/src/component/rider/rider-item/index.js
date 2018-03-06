import React from 'react';
import {connect} from 'react-redux';
import {riderUpdateRequest, riderDeleteRequest} from '../../../action/rider-action';
import {bikeCreateRequest, bikeFetchRequest} from '../../../action/bike-action';
import {renderIf} from '../../../lib/utils';
import RiderForm from '../rider-form/index';
import BikeForm from '../../bike/bike-form/index';
import Bike from '../../bike/bike-item/index';

class Rider extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.rider ?
      this.props.rider :
      {
        name: '',
        editing: false,
      };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditing(rider) {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleUpdate(rider) {
    this.setState({
      editing: !this.state.editing,
    });
    this.props.riderUpdate(rider);
  }

  handleDelete() {
    this.props.riderDelete(this.state);
  }

  componentWillMount() {
    this.props.fetchBikes();
  }

  render() {
    return (
      <div className="rider-item" key={this.props.rider._id}>
        <h2 onDoubleClick={this.handleEditing}>{this.props.rider.name}</h2>
        <button type="button" onClick={this.handleDelete}>{this.props.buttonText}</button>
        {renderIf(this.state.editing, <RiderForm
          rider={this.props.rider}
          buttonText="Update Rider"
          onComplete={this.handleUpdate}/>)}

        <BikeForm
          message="Add a Bike"
          className="bike-create"
          riderId={this.props.rider._id}
          buttonText="Create Bike"
          onComplete={this.props.createBike}
        />

        {this.props.bikes[this.props.rider._id] ? this.props.bikes[this.props.rider._id].map(bike =>
          <Bike key={bike._id} buttonText="Delete Bike" bike={bike} />
        )
          :
          undefined
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bikes: state.bikes,
});

const mapDispatchToProps = (dispatch) => ({
  riderUpdate: rider => dispatch(riderUpdateRequest(rider)),
  riderDelete: rider => dispatch(riderDeleteRequest(rider)),
  createBike: bike => dispatch(bikeCreateRequest(bike)),
  fetchBikes: () => dispatch(bikeFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rider);
