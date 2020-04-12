import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.addressInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      address: this.addressInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "Fahad",
    email: "fahadshah779@gmail.com",
    address: "Peshawar",
    phone: "03019914343"
  };

  render() {
    const { name, email, address, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header bg-danger text-white">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter Email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                id="address"
                placeholder="Enter Address..."
                defaultValue={address}
                ref={this.addressInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="0333-00000000"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>

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
