import { Button, Modal } from "bootstrap";
import { useEffect, useState } from "react";

function MyModel(props){
    let[modelOpen,setModelOpen]=useState(false);

    let[id,setId]=useState();
    let[firstName,setFirstName]=useState();
    let[lastName,setlastName]=useState();
    let[age,setAge]=useState();
    let[gender,setGender]=useState();




useEffect(()=>{
    setModelOpen(true);
    setId(props.rowdata.id);
    setFirstName(props.rowdata.firstName);
    setlastName(props.rowdata.lastName);
    setAge(props.rowdata.age);
    setGender(props.rowdata.gender);
    
})

    return(
        <>
        <Modal>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        User Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Id:<input type="text" defaultValue={id} ></input>
                    </div>
                    <div>
                        FirstName:<input type="text" defaultValue={firstName}></input>

                    </div>
                    <div>
                        LastName:<input type="text" defaultValue={lastName}></input>

                    </div>
                    <div>
                        Age:<input type="text" defaultValue={age}></input>
                    </div>
                    <div>
                        Gender:<input type="text" defaultValue={gender}></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onclick={closeModel}></Button>
                    <Button variant="secondary" onclick={funUpdate}></Button>
                    <Button variant="secondary" onclick={funDelete}></Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
        </>
    );
}
export default MyModel;