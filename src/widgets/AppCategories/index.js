import style from "./AppCategories.module.scss";

const AppCategories = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={`container container-app`}>
        <h3 className="h5">Categories</h3>
      </div>

      <div className={`container container-app px-0`}>
        <div className={style.categories}>
          <div className={`${style.categories_track} px-3`}>
            <div className={style.categories_item}>
              <div className={style.categories_item__icon}></div>
              <p>Coffee</p>
            </div>

            <div className={style.categories_item}>
              <div className={style.categories_item__icon}></div>
              <p>Coffee</p>
            </div>

            <div className={style.categories_item}>
              <div className={style.categories_item__icon}></div>
              <p>Coffee</p>
            </div>


            <div className={style.categories_item}>
              <div className={style.categories_item__icon}></div>
              <p>Coffee</p>
            </div>


            <div className={style.categories_item}>
              <div className={style.categories_item__icon}></div>
              <p>Coffee</p>
            </div>


            <div className={style.categories_item}>
              <div className={style.categories_item__icon}></div>
              <p>Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCategories;
