import React from 'react';
import {connect} from 'react-redux';
import {bikeUpdateRequest, bikeDeleteRequest} from '../../../action/bike-action';
import {renderIf} from '../../../lib/utils';
import BikeForm from '../bike-form/index';

class Bike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: this.props.bike ?
        this.props.bike :
        {
          make: '',
          year: '',
          color: '',
          category: '',
          rider: this.props.riderId,
        },
      editing: false,
    };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditing(bike) {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleUpdate(bike) {
    this.setState({
      editing: !this.state.editing,
    });
    this.props.updateBike(bike);
  }

  handleDelete() {
    this.props.deleteBike(this.props.bike);
  }

  render() {
    return (
      <div className="bike-item" key={this.props.bike._id}>
        <h3 onDoubleClick={this.handleEditing}>{this.props.bike.make}</h3>
        <p>{this.props.bike.year}, {this.props.bike.color}, {this.props.bike.category}</p>
        <button type="button" onClick={this.handleDelete}>{this.props.buttonText}</button>
        {renderIf(this.state.editing, <BikeForm
          message="Updating Bike"
          className="bike-update"
          bike={this.props.bike}
          buttonText="Update Bike"
          onComplete={this.handleUpdate}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bikes: state.bikes,
});

const mapDispatchToProps = (dispatch) => ({
  updateBike: bike => dispatch(bikeUpdateRequest(bike)),
  deleteBike: bike => dispatch(bikeDeleteRequest(bike)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bike);
