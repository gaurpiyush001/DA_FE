import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LogInForm from '../forms/LogInForm';

const MyModal = (props) => {
    
    const ContentComponent =  <LogInForm onHide={props.onHide}/>

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalheading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {ContentComponent}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer> */}
        </Modal>
    )

}

export default MyModal;
