function ProductCard({ product }) {
  return (
    <div>
      <main className="flex flex-col items-center">
        <img src={product.img} className=" max-h-90 max-w-90" />
        <section className="flex flex-col p-6">
          <h5 className="text-slate-800">{product.title}</h5>
          <p className="link text-neutral-700">{product.desc}</p>
          <div className="flex justify-center">
            <h5 className="text-neutral-400">{product.price}</h5>
            <h5 className="text-emerald-700">{product.discountPrice}</h5>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProductCard;
