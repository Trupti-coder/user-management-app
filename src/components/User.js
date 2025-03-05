import { useEffect, useState } from "react";

function User(){

    let[user,setUser]=useState([]);

    async function getAllUsers(){
        let response=await fetch('https://dummyjson.com/users');
        let result=await response.json();
        setUser(result.users);

    }

    useEffect(()=>{
        getAllUsers();
    },[]);

    return(
        <>
        <h3>User Details</h3>
        <table border='2'>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>BloodGroup</th>
            </tr>
            {
                user.map((x)=>{
                    return(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.age}</td>
                            <td>{x.gender}</td>
                            <td>{x.bloodGroup}</td>
                            <td>{x.address.address}</td>

                        </tr>
                    )
                })
            }
        </table>
        </>
    );
}
export default User;