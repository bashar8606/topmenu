import style from "./HomeBrands.module.scss";

const HomeBrands = ({ props }) => {

  return (
    <section className={`${style.section}`}>
      <div className={`container ${style.container}`}>
        <div className={style.block}>
          <h2 className={`text-center ${style.title} mb-4`}>Over 32k+ restaurants growing with top menu online tool</h2>

          <div className="row row-cols-2 row-cols-lg-6">
            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo1.png" alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo2.png" alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo3.png" alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo4.png" alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo5.png" alt="" />
                </div>
              </div>
            </div>

            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo6.png" alt="" />
                </div>
              </div>
            </div>
{/* 
            <div>
              <div className={style.block_item}>
                <div className={`ratio ${style.ratio}`}>
                  <img src="/images/logo7.png" alt="" />
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
