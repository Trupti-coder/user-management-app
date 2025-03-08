import { useState } from "react";

function AddNewUser({onAddUser}){

    let[firstName,setFirstName]=useState('');
    let[lastName,setLastName]=useState('');
    let[age,setAge]=useState('');
    let[gender,setGender]=useState('');
    let[bloodgroup,setBloodGroup]=useState('');


    function funSubmit(event){
        event.preventDefault();
        const newUser={
            id:Date.now(),
            firstName,
            lastName,
            age,
            gender,
            bloodgroup
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
        <form onSubmit={funSubmit}>
         

            FirstName:<input type="text"
            value={firstName}
            placeholder="Enter FirstName"
            onChange={(event)=>setFirstName(event.target.value)}
            />

            LastName:<input type="text"
            value={lastName}
            placeholder="Enter LastName"
            onChange={(event)=>setLastName(event.target.value)}
            />

            Age:<input type="text"
            value={age}
            placeholder="Enter Age"
            onChange={(event)=>setAge(event.target.value)}
            />

            Gender:<input type="text"
            value={gender}
            placeholder="Enter Gender"
            onChange={(event)=>setGender(event.target.value)}
            />

            BloodGroup:<input type="text"
            value={bloodgroup}
            placeholder="Enter BloodGroup"
            onChange={(event)=>setBloodGroup(event.target.value)}
            />
            <button type="submit">Add User</button>
        </form>

        </>
    );
}
export default AddNewUser;
