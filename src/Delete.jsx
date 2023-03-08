import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${this.state.id}`);
  };

  render() {
    return (
        <>
        <div className="navbar">
        <Link to="/">
        <button className="nav-button">Post</button>
        </Link>
        <Link to="/ProjectGet">
        <button className="nav-button">Get</button>
        </Link>
        <Link to="/Update">
        <button className="nav-button">Put</button>
        </Link>
        <button className="nav-button">Delete</button>
      </div>
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">CID</label><br></br>
        <input
          className="delete-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <button className="submit" type="submit">
          Delete Record
        </button>
      </form>
      </>
    );
  }
}

export default Delete;
