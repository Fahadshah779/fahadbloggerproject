import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
//import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    phone: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, address, phone } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (address === "") {
      this.setState({ errors: { address: "Address is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      address,
      phone
    };

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      errors: {}
    });

    //redirect to home
    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, address, phone, errors } = this.state;
    const { dispatch } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <TextInputGroup
              label="Name"
              name="Name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="Email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Address"
              name="Address"
              type="text"
              placeholder="Enter address"
              value={email}
              onChange={this.onChange}
              error={errors.address}
            />
            <TextInputGroup
              label="Phone"
              name="Phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
