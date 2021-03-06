import React, {useState} from 'react';
import {Modal,Button} from "react-bootstrap";
import './Popup.css';

function Popup() {
    const [show, setShow] = useState(false);
    function handleClose() {setShow(false)};
    function handleShow() {setShow(true)};

    return (
        <div id="dontKnowPopup">
            <Button id="dontKnowButton" variant="secondary" onClick={handleShow} tabIndex="1000">
                I don't know my polling place
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>I don't know my polling place.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This link is taking you to https://www.mvp.sos.ga.gov, Georgia's polling place locator.
                    Enter your details on this page to find your polling place, then come back with the address or name.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" href="https://www.mvp.sos.ga.gov" target="_blank" onClick={handleClose}>Go</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Popup;