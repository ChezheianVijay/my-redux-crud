import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./silces/UserSlice";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleDelete = (delid) => {
    dispatch(deleteUser({ id: delid }));
  }

  return (
    <div className="container">
      <h2>CRUD App with JSON & Redux</h2>
      <h3>Made with ❤️‍🔥 by Loki</h3>
      <Link className="btn btn-success my-3" to="/create" >Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
