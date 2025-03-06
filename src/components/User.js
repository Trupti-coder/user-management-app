import { useEffect, useState } from "react";

function User(){

    let[user,setUser]=useState([]);
    let[gender,setGender]=useState('');

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

    function funSelectGender(event) {
        setGender(event.target.value === 'All' ? '' : event.target.value);
      }

    // filter user
    let filteredUser=user.filter((user)=>{
        return(
            (!gender || user.gender===gender)
        )
    })



    return(
        <>
        <h3>User Details</h3>
        Select Gender:<select onChange={funSelectGender}>
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
           
        </select>
        <table border='2'>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th onClick={funSort}>Age</th>
                <th>Gender</th>
                <th>BloodGroup</th>
                <th>Currency</th>
                
            </tr>
            {
                filteredUser.map((x)=>{
                    return(
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.age}</td>
                            <td>{x.gender}</td>
                            <td>{x.bloodGroup}</td>
                            <td>{x.bank.currency}</td>
                        </tr>
                    )
                })
            }
        </table>
        </>
    );
}
export default User;