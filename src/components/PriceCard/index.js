import style from "./PriceCard.module.scss";

const PriceCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card_head}>
        <h4>1 Month</h4>
        <h3>$2.99</h3>
      </div>
      <div className={style.card_body}>
        <ul>
          <li>Feedback Categorization</li>
          <li>Features Prioritization</li>
          <li>Real-Time Collaboration</li>
          <li>Feedback Loop Notifications</li>
          <li>Essential Dev Tools Integrations</li>
        </ul>
      </div>

      <div className={style.card_footer}>
        <button className="w-100 btn btn-lg btn-outline-primary">Purchase Package</button>
      </div>
    </div>
  );
};

export default PriceCard;
