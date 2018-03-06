import React from 'react';

class BikeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.bike ?
      this.props.bike :
      {
        make: '',
        year: '',
        color: '',
        category: '',
        rider: this.props.riderId,
        editing: false,
      },



    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(
      this.state
    );

    this.setState({
      make: '',
      year: '',
      color: '',
      category: '',
      rider: this.props.riderId,
      editing: false,
    });
  }

  render() {
    return (
      <section>
        <h5>{this.props.message ? this.props.message : undefined}</h5>
        <form className={this.props.className} onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              type="text"
              name="make"
              placeholder="make"
              value={this.state.make}
              onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="year"
              placeholder="year"
              value={this.state.year}
              onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="color"
              placeholder="color"
              value={this.state.color}
              onChange={this.handleChange}/>
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="category"
              placeholder="category ex: road"
              value={this.state.category}
              onChange={this.handleChange}/>
          </fieldset>

          <button
            type="submit">
            {this.props.buttonText}
          </button>
        </form>
      </section>
    );
  }
}

export default BikeForm;
