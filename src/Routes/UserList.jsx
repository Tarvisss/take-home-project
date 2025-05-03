import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ForFunApi from "../RouteHandler/RouteHandlers";

function Allusers(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const users = await ForFunApi.getUsers(); 
            setUsers(users);
            console.log(users)
        }
        getUsers();
    },[])

    return (
        <div>
          <div>
            <h1 className="text-center">Users List</h1>
            <div style={{
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
                gap: "15px"
            }}>
                {users.length > 0 ? (users.map((user) => (
                    <div 
                    style={{
                        textAlign: "left",
                        backgroundColor: "#FFFD",
                        border: "1px solid #ccc", 
                        padding: "15px", 
                        borderRadius: "8px", 
                        width: "275px", 
                        boxShadow: "1px 4px 8px rgba(1, 112, 202, 0.3)"
                    }}
                    key={user.id}>
                    {/* //here i've added a link to a single job page based off of the id. */}
                        <Link to={`/users/${user.id}`} style={{textDecoration: "none"}}>{user.name}</Link>
                        <hr />
                        <p>First Name: {user.firstName}</p>
                        <p>Email: {user.email}</p>
                        <p>Last Name: {user.lastName}</p>
                    </div>
                ))
            ) : (
                <p>No users Found</p>
            )}
            </div>
          </div>
        </div>
    )
}

export default Allusers;