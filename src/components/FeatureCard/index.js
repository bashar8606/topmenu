import style from "./FeatureCard.module.scss";

const FeatureCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <div className={style.icon}>
          <img src="/images/icon_home.svg" alt="" srcset="" />
        </div>
      </div>
      <div className={style.card_info}>
        <h4>Security First</h4>
      </div>
    </div>
  );
};

export default FeatureCard;
