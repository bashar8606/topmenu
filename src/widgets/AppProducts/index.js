import ProductCard from "../../components/ProductCard";
import style from "./AppProducts.module.scss";

const AppProducts = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={`container container-app`}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default AppProducts;
