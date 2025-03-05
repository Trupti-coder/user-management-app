import { useState } from "react";

function User(){

    let[user,setUser]=useState();

    async function getAllUsers(){
        let response=await fetch('https://dummyjson.com/users');
        let result=await response.json();
        setUser(result.users);

    }
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
                           

                        </tr>
                    )
                })
            }
        </table>
        </>
    );
}
export default User;