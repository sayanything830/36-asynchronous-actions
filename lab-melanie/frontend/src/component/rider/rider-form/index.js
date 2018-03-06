import React from 'react';

class RiderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.rider ?
      this.props.rider :
      {
        name: '',
        editing: false,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);

    this.setState({
      name: '',
      editing: false,
    });
  }

  render() {
    return (
      <form className="rider-form" onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}/>
        </fieldset>
        <button
          type="submit">
          {this.props.buttonText}
        </button>
      </form>
    );
  }
}

export default RiderForm;
