import React from "react";
import axios from "axios";
import  { Component } from "react";
import './Navbar.css';
import './projectget.css';
import { Link } from "react-router-dom";
class ProjectGet extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
        <>
        <div className="navbar">
        <Link to="/">
        <button className="nav-button">Post</button>
        </Link>
        <button className="nav-button">Get</button>
        <Link to="/Update">
        <button className="nav-button">Put</button>
        </Link>
        <Link to="/Delete">   
        <button className="nav-button">Delete</button>
        </Link>
      </div>
      <table border={1} className='styled-table'>
        <thead>
          <tr>
            <th>CID</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.cid}>
              <td>{item.cid}</td>
              <td>{item.brand}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
  }
}
export default ProjectGet;
