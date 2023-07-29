import style from "./HomeBanner.module.scss";

const HomeBanner = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={style.bg}>
        <div className="ratio">
          <img src="/images/shape.svg" />
        </div>
      </div>

      <div className={`${style.shape} ${style.shape_one}`}>
        <div className="ratio">
          <img src="/images/banner_shape1.svg" />
        </div>
      </div>

      <div className={`${style.shape} ${style.shape_two}`}>
        <div className="ratio">
          <img src="/images/banner_shape2.svg" />
        </div>
      </div>


      <div className={`container ${style.container}`}>
        <div className={`row ${style.block}`}>
          <div className={`col-lg-7 order-2 order-lg-1`}>
            <div className={style.block_content}>
              <h1 className={`h1 ${style.block_content__title} mb-3 mb-lg-4`}>One of the Top Menu QR code
                Platform in the UAE </h1>
              <p className=" mb-3 mb-lg-3">Our platform offers a range of features that are simple, user-friendly, and customizable.
                Here's what sets us apart</p>

              <ul className="list-star">
                <li>QR code menu</li>
                <li>Shareable link</li>
                <li>Quick Checkout</li>
                <li>Track product demand</li>
                <li> Design customization</li>
              </ul>

              <div className={style.btn_wrap}>
                <button className="btn btn-primary">Start Free</button>
                <span>OR</span>
                <button className="btn btn-secondary">View Demo</button>
              </div>


            </div>
          </div>
          <div className={`col-lg-5 order-1 order-lg-2`}>
            <div className={`${style.block_img} mb-4 mb-lg-0`}>
              <div className={`ratio `}>
                <img src="/images/banner.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
