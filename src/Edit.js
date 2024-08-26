import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./silces/UserSlice";

export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id)
    const { name, email } = existingUser[0];

    const [uname, setUName] = useState(name);
    const [uemail, setUEmail] = useState(email);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }));
        navigate("/");
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3 className="mb-3">Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label htmlFor="name" className="mb-2">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter your name" value={uname} onChange={(e) => setUName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" value={uemail} onChange={(e) => setUEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-info mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}