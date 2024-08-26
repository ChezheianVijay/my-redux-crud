import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "./silces/UserSlice";
import { useNavigate } from "react-router-dom";

export default function Create() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const users = useSelector((state) => state.users);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
        navigate("/");
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3 className="mb-3">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name" className="mb-2">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-info mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}