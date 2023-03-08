import React, {useState} from "react";
import axios from "axios";
import './project.css';
import './Navbar.css';
import { Link } from "react-router-dom";
const Project = () => {
  const [cid, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");  
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", cid, name, brand, price, rating);
    const data = {
      cid: cid,
      brand: brand,
      name: name,
      price: price,
      rating: rating,
    };

    axios.post('http://127.0.0.1:8080/addDetails', data);
    // Send data to server or perform other actions
  };

  return (
    <>
    <div className="navbar">
      <button className="nav-button" type="submit">Post</button>
      <Link to="/ProjectGet">
      <button className="nav-button" type="submit">Get</button>
      </Link>
      <Link to="/Update">
      <button className="nav-button" type="submit">Put</button>
      </Link>
      <button className="nav-button" type="submit">Delete</button>
    </div>

        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID</label><br></br>
        <input
          type="number"
          id="id"
          value={cid}
          onChange={(event) => setId(event.target.value)}
          />
      </div>
      <div>
          <label htmlFor="brand">Brand</label><br></br>
        <input
          type="text"
          id="Brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          />
      </div>
      <div>
        <label htmlFor="name">Name</label><br></br>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
      </div>
      <div>
        <label htmlFor="price">Price</label><br></br>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          />
      </div>
      <div>
        <label htmlFor="rating">Rating</label><br></br>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          />
      </div>
      <button type="submit" className="submit">Submit</button>
    </form>
    </>
  );
};

export default Project;