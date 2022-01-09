// import css from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
const ProductDetail = (props) => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail Page</h1>
      <p>Contains the details of the product {params.product}</p>
    </section>
  );
};

export default ProductDetail;
