import style from "./Counter.module.scss";

const Counter = () => {
  return (
    <div className={style.counter}>
            <button className={style.counter_btn}>-</button>
            <input type='number' className={style.counter_input} value={1}/>
            <button className={style.counter_btn}>+</button>
          </div>
  );
};

export default Counter;
