import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

export default function Catalog() {
  return (
    <section className="section" id="catalog">
      <h2>Catalog</h2>
      <p className="lead">Two featured items ready for a premium, simple shopping experience.</p>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
