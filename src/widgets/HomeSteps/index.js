import FeatureCard from "../../components/FeatureCard";
import StepCard from "../../components/StepCard";
import style from "./HomeSteps.module.scss";

const HomeSteps = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={`${style.shape} ${style.shape_one}`}>
        <div className="ratio">
          <img src="/images/shape_lg.svg" />
        </div>
      </div>
      <div className={`container ${style.container}`}>

        <div className={`text-center ${style.title_wrap}`}>
          <h2 className="h2">3 Step to Digital  your Menu Card</h2>
          <p className="title-sub">In three steps, convert your leads and track all information efficiently.</p>
        </div>

        <div className={`row row-cols-lg-3 g-3 ${style.row} `}>
          <div><StepCard /></div>
          <div><StepCard /></div>
          <div><StepCard /></div>
        </div>

        <div className={`row row-cols-lg-3 g-3 ${style.features}`}>
          <div><FeatureCard /></div>
          <div><FeatureCard /></div>
          <div><FeatureCard /></div>
          <div><FeatureCard /></div>
          <div><FeatureCard /></div>
          <div><FeatureCard /></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
