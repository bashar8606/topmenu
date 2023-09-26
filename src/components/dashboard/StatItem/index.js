import Table from 'react-bootstrap/Table';
import style from "./StatItem.module.scss";

const StatItem = () => {
    return (
        <div className={style.card}>
            <div className={`${style.card_img} ratio`}>
                <span class="material-symbols-outlined">
                    settings
                </span>
            </div>
            <div className={style.card_info}>
                <h4>22,000</h4>
                <p className="mb-0">Total Orders</p>
            </div>
        </div>
    );
};

export default StatItem;
