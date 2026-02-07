import React from "react";
import { Carousel, Form, Button, Nav } from "react-bootstrap";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Dashboard = () => {
  return (
    <>
    <Navbar />
    
    <div className="container dashboard-container">
       
      <div className="row">
        {/* Left Column: Carousel */}
        <div className="col-md-6">
          <div className="dashboard-carousel">
               <Carousel>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/0j3s2Zx/books.jpg"
                alt="First slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Unlock the Secrets of the Library</h3>
                <p>Embark on a journey of discovery and enlightenment.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/0j3s2Zx/books.jpg"
                alt="Second slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Find Your Favorite Books</h3>
                <p>Explore thousands of titles across genres.</p>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
          </div>

        </div>

        {/* Right Column: Borrow Book Form */}
        <div className="col-md-6">
          {/* <div className="p-4 border rounded shadow-sm"> */}
          <div className="borrow-card">

            <h4>Borrow a Book</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Select Borrower NIC" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Select Borrower" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Select Book" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="date" placeholder="Due Date" />
              </Form.Group>
              {/* <Button variant="primary" className="w-100"> */}
              <Button variant="primary" className="borrow-btn w-100">

                Borrow Book
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
