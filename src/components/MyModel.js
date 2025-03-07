import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

function MyModel(props) {
    let [modelOpen, setModelOpen] = useState(false);

    let [id, setId] = useState('');
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [age, setAge] = useState('');
    let [gender, setGender] = useState('');

    function closeModel() {
        setModelOpen(false);
    }

    useEffect(() => {
        if (props.rowData) {
            setModelOpen(true);
            setId(props.rowData.id);
            setFirstName(props.rowData.firstName);
            setLastName(props.rowData.lastName);
            setAge(props.rowData.age);
            setGender(props.rowData.gender);
        }
    }, [props.rowData]);

    function funUpdate() {
        // Update functionality
    }

    async function funDelete(){
        let response=await fetch("https://dummyjson.com/users/"+id,{
            method:'DELETE'
        })
        var result=await response.json();
        console.log(result);
        closeModel(false);
    }

  

    return (
        <>
            <Modal show={modelOpen} onHide={closeModel}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            User Details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            Id:<input type="text" defaultValue={id}></input>
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
                        <Button variant="secondary" onClick={closeModel}>Close</Button>
                        <Button variant="primary" onClick={funUpdate}>Update</Button>
                        <Button variant="danger" onClick={funDelete}>Delete</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}
export default MyModel;
