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

    function funSort(){
        const sortedUser=[...user].sort((a,b)=>a.age-b.age);
        setUser(sortedUser);

    }

    function funSelectGender(){
        
    }

    return(
        <>
        <h3>User Details</h3>
        Select Gender:<select onClick={funSelectGender}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
            <option>All</option>
        </select><br></br>
        <table border='2'>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th onClick={funSort}>Age</th>
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
                        </tr>
                    )
                })
            }
        </table>
        </>
    );
}
export default User;