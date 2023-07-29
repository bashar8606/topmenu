
import { useState } from 'react';
import style from "./ProductCard.module.scss";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Counter from '../Counter';

const ProductCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={style.card} onClick={handleShow}>
        <div className={style.card_img}>
          <div className={style.icon}>
          <img src="/images/cover.png" />
          </div>
        </div>
        <div className={style.card_info}>
          <h4 className={style.card_title}>Pizza veloper with </h4>
          <h6 className={style.card_category}>Chinees Cousin</h6>
          <p className={style.card_price}>AED <strike> 170.00</strike> </p>
          <p className={style.card_price__discount}>AED <span> 150.00</span> </p>
        </div>
        <div className={style.card_counter}>
          {/* <button className='btn btn-sm btn-secondary'>Add</button> */}
          <Counter />
        </div>
      </div>

      <Offcanvas className={style.product} show={show} onHide={handleClose} placement={'bottom'}>
        <button className='btn-close' onClick={handleClose}></button>
        <Offcanvas.Body>
          <div className={style.product_img}>
            <div className={`ratio ${style.img}`}>
            <img src="/images/cover.png" />
            </div>
          </div>
          <div className={style.product_info}>
            <div className="row align-items-end mb-3">
              <div className="col">
                <h4 className={style.product_title}>Pizza veloper with </h4>
                <p className={`mb-0 ${style.product_price__discount}`}>AED <span> 150.00</span> </p>

              </div>
              <div className="col-auto">
                <Counter />
              </div>
            </div>
            <p className={`mb-1 ${style.product_price}`}>AED <strike> 170.00</strike> </p>
            <h6 className={style.product_category}>Chinees Cousin</h6>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ProductCard;
