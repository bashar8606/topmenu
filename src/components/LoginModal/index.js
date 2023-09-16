
import { useState } from 'react';
import style from "./LoginModal.module.scss";
import Modal from 'react-bootstrap/Modal';
import Link from "next/link";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
 <button className='btn btn-sm btn-secondary' onClick={handleShow}>Login Popup</button>
      <Modal
       show={show} onHide={handleClose} placement={'bottom'}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className={`${style.modal}`}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className={`${style.modal_header}`}>
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
           

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Email Address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>


            <Button variant="secondary" className="w-100 login-btn" type="submit">
              Login
            </Button>

            <Link className={style.forgot_pass} href={`#`}>{'Forget Password?'}</Link>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <span>
          New top TopMenu? 
        <Link className={style.create_acc} href={`#`}>{'Create a new account..?'}</Link>
        </span>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default LoginModal;