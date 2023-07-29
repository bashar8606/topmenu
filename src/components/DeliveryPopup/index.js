
import { useState } from 'react';
import style from "./DeliveryPopup.module.scss";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const DeliveryPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn btn-sm btn-secondary' onClick={handleShow}>Delivery Popup</button>
      <Offcanvas className={style.product} show={show} onHide={handleClose} placement={'bottom'}>
        <button className='btn-close' onClick={handleClose}></button>
        <Offcanvas.Body>
          <h2 className='h5'>Delivery Details</h2>


          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>


            <Button variant="secondary" className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DeliveryPopup;
