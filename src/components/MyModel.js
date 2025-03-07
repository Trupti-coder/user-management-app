import { Modal } from "bootstrap";
import { useState } from "react";

function MyModel(props){
    let[modelOpen,setModelOpen]=useState(false);
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
                        Id:<input type="text" defaultValue={txtId} ></input>
                    </div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
        </>
    );
}
export default MyModel;