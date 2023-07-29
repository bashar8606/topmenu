import style from "./StepCard.module.scss";
 
const StepCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_head}>01</div>
      <div className={style.card_body}>
        <h3>Create an account</h3>
        <p>Skip the follow-ups and
          back-and -forth. Easily
          standardize how you collect </p>
      </div>
    </div>
  );
};

export default StepCard;
