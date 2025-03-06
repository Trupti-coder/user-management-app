import { useEffect, useState } from "react";

function User(){

    let[user,setUser]=useState([]);
    let[gender,setGender]=useState('');
    let[searchId,setSearchId]=useState('');
    let[bloodgroup,setBloodGroup]=useState('');
   

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

    //Search 
    function funSearch(event){
        setSearchId(event.target.value);

    }

    function funRowClick(){

    }

    
    return(
        <>
        <h3>User Details</h3>
        Select Gender:<select onChange={funSelectGender}>
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
           
        </select>

        <lable>
                Blood-Group:<select onChange={(event)=>setBloodGroup(event.target.value)}>
                <option value="">All</option>
                <option value="O+">O+</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O-">O-</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                </select>
            </lable>
            <br></br> <br></br>
       
         search By Id:<input type="text" value={searchId} onChange={funSearch}></input>  

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
                        <tr key={x.id} onClick={funRowClick}>
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