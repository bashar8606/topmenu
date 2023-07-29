import style from "./TestimonialCard.module.scss";
const TestimonialCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_stars}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18.364" height="17" viewBox="0 0 18.364 17">
  <path id="Star_1" data-name="Star 1" d="M9.182,0l2.3,6.322,6.887.171L12.9,10.572,14.857,17,9.182,13.2,3.507,17l1.961-6.428L0,6.493l6.887-.171Z" fill="#fbb040"/>
</svg>

      </div>
      <div className={style.card_body}>
        <p>Certainty say suffering his him collected
          intention promotion. Hill sold ham men
          made lose case. Views abode law heard
          jokes too.</p>
      </div>
      <div className={style.card_user}>
        <h4>Andrew Chris</h4>
        <p>Client from
          Uganda</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
