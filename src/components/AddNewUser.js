import { useState } from "react";

function AddNewUser({onAddUser}){

    let[firstName,setFirstName]=useState('');
    let[lastName,setLastName]=useState('');
    let[age,setAge]=useState('');
    let[gender,setGender]=useState('');
    let[bloodgroup,setBloodGroup]=useState('');
    let[currency,setCurrency]=useState('');


    function funSubmit(event){
        event.preventDefault();
        const newUser={
            id:Date.now(),
            firstName,
            lastName,
            age,
            gender,
            bloodgroup,
            bank:{currency}
        }

        onAddUser(newUser);

        //clear form fields

        setFirstName('');
        setLastName('');
        setAge('');
        setGender('');
        setBloodGroup('');
      

    }
    return(
        <>
        <h3>Add New User</h3>
        <form onSubmit={funSubmit}>
         

            FirstName:<input type="text"
            value={firstName}
            placeholder="Enter FirstName"
            onChange={(event)=>setFirstName(event.target.value)}
            /><br></br>

            LastName:<input type="text"
            value={lastName}
            placeholder="Enter LastName"
            onChange={(event)=>setLastName(event.target.value)}
            /><br></br>

            Age:<input type="text"
            value={age}
            placeholder="Enter Age"
            onChange={(event)=>setAge(event.target.value)}
            /><br></br>

            Gender:<input type="text"
            value={gender}
            placeholder="Enter Gender"
            onChange={(event)=>setGender(event.target.value)}
            /><br></br>

            BloodGroup:<input type="text"
            value={bloodgroup}
            placeholder="Enter BloodGroup"
            onChange={(event)=>setBloodGroup(event.target.value)}
            /><br></br>

            Currency:<input type="text"
            value={currency}
            placeholder="Enter Currency"
            onChange={(event)=>setCurrency(event.target.value)}
            /><br></br>
            <button type="submit">Add User</button>
        </form>

        </>
    );
}
export default AddNewUser;
