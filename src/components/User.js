import { useEffect, useState } from "react";
import MyModel from "./MyModel";
import AddNewUser from "./AddNewUser";

function User(){

    function funClick(event){
        event.preventDefault();
        var x=parseInt(event.target.textContent);
        console.log(x);
        var lm=0;
        var sk=0;
        getAllUsers(lm,sk)

        if(x===1){
            lm=10;
            sk=0;
            getAllUsers(lm,sk)

        }
        else if(x===2){
            lm=10;
            sk=10;
            getAllUsers(lm,sk)


        }
        else if(x===3){
            lm=10;
            sk=20;
            getAllUsers(lm,sk);
        }
        else{
            lm=0;
            sk=0;
            getAllUsers(lm,sk)
        }


    }

    let[user,setUser]=useState([]);
    let[gender,setGender]=useState('');
    let[searchId,setSearchId]=useState('');
    let[bloodgroup,setBloodGroup]=useState('');
   

    async function getAllUsers(lm,sk){
        let response=await fetch('https://dummyjson.com/users?limit='+lm+'&skip='+sk);
        let result=await response.json();
        setUser(result.users);

    }

    useEffect(()=>{
        getAllUsers(10,0);
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
            (!gender || user.gender===gender)&&
            (!bloodgroup || user.bloodGroup===bloodgroup)
        )
    })

    //Search 
    function funSearch(event){
        setSearchId(event.target.value);

    }

    //rowclick
    let[rowFlag,setRowFlag]=useState(false);
    let[rowData,setRowData]=useState({});

    function funRowClick(obj){
        // console.log(obj);
        setRowFlag(true);
        setRowData(obj);

    }

    //AddUser

    function handleNewUser(newUser){
        setUser([...user,newUser]);

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
                        <tr key={x.id} onClick={()=>{funRowClick(x)}}>
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
        {
            rowFlag && <MyModel rowData={rowData} /> 
        }
        {
            <AddNewUser onAddUser={handleNewUser} />
        }

        <h3>Pagination</h3>
        <ul onClick={funClick}>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
        </ul>
        </>
    );
}
export default User;