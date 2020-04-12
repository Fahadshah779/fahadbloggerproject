import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    //Delete contact
  };

  render() {
    const { id, name, email, address, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            className="fa fa-sort-down"
            style={{ cursor: "pointer" }}
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
          />
          <i
            className="fa fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          ></i>
          <Link to={`contact/edit/${id}`}>
            <i
              className="fa fa-pencil"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Address: {address}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
