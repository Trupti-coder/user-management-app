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
            </Modal.Dialog>
        </Modal>
        </>
    );
}
export default MyModel;