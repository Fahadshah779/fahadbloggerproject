import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Fahad",
        email: "fahadshah@gmail.com",
        address: "Peshawar",
        phone: "0334353535"
      },
      {
        id: 2,
        name: "Mureed Shah",
        email: "mureed@gmail.com",
        address: "Peshawar",
        phone: "0300353535"
      },
      {
        id: 3,
        name: "Zaara",
        email: "zaara@gmail.com",
        address: "Lahore",
        phone: "0344325325"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
