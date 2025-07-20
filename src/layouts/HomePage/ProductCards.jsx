import ProductCard from "../../components/ProductCard";
import productList from "../../productsData.json";

function ProductCards() {
  return (
    <main className="flex flex-col gap-2.5 text-center py-20 ">
      <header>
        <h3 className=" mb-2.5">
          BESTSELLER
          <br />
          PRODUCTS
        </h3>
        <p className="text-neutral-500">
          Problems trying to resolve the
          <br /> conflict between
        </p>
      </header>
      <section className="md:flex md:flex-wrap md:justify-center">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
      <button className="btn-text text-sky-500 border border-sky-500 py-4 px-10 rounded-sm mx-11">
        LOAD MORE PRODUCTS
      </button>
    </main>
  );
}

export default ProductCards;
