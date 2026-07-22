type Props = {
  name: string;
  category: string;
  description: string;
  price: number;
  tag: string;
};

export default function ProductCard({
  name,
  category,
  description,
  price,
  tag,
}: Props) {
  return (
    <article className="product">
      <div className="thumb" />
      <div className="content">
        <div>
          <div className="tag">{tag}</div>
          <h3 className="name">{name}</h3>
          <p className="desc">{category}</p>
          <p className="desc">{description}</p>
        </div>
        <div className="priceRow">
          <div className="price">{price} ETB</div>
          <button className="add">Add to Cart</button>
        </div>
      </div>
    </article>
  );
            }
