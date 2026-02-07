import React from "react";

const IssuedBooks = () => {
  return (
    <div className="container mt-5">
      <h2>Issued Books History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring Boot</td>
            <td>Returned</td>
          </tr>
          <tr>
            <td>MongoDB</td>
            <td>Not Returned</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooks;
