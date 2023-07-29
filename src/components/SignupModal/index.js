
import { useState } from 'react';
import style from "./SignupModal.module.scss";
import Modal from 'react-bootstrap/Modal';
import Link from "next/link";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignupModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
 <button className='btn btn-sm btn-secondary' onClick={handleShow}>Sign UP Popup</button>
      <Modal
       show={show} onHide={handleClose} placement={'bottom'}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className={`${style.modal}`}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className={`${style.modal_header}`}>
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
           

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="password" placeholder="Re Enter Password" />
            </Form.Group>


            <Button variant="secondary" className="w-100 signup-btn" type="submit">
              Crate an Account
            </Button>

           <span className={style.info}>By continuing, you agree to Topmenu's Terms of Use and Privacy Policy.</span>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <span>
        Already have account  
        <Link className={style.create_acc} href={`#`}>{'Login'}</Link>
        </span>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default SignupModal;
