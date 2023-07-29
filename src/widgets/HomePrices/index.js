import FeatureCard from "../../components/FeatureCard";
import PriceCard from "../../components/PriceCard";
import StepCard from "../../components/StepCard";
import style from "./HomePrices.module.scss";

const HomePrices = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={`${style.shape} ${style.shape_one}`}>
        <div className="ratio">
          <img src="/images/shape_lg.svg" />
        </div>
      </div>
      <div className={`container ${style.container}`}>

        <div className={`text-center ${style.title_wrap}`}>
          <h2 className="h2">Our plans scale with your product</h2>
          <p className="title-sub">Simple & transparent pricing</p>
        </div>

        <div className={`row row-cols-lg-3 g-3 ${style.row} `}>
          <div><PriceCard /></div>
          <div><PriceCard /></div>
          <div><PriceCard /></div>
        </div>
      </div>
    </section>
  );
};

export default HomePrices;
