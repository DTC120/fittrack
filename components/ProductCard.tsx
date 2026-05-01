interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-slate-950/20 dark:hover:bg-slate-950">
      <div className="mb-5 flex items-center justify-between">
        <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
          {product.stock > 0 ? "En stock" : "Agotado"}
        </span>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">${product.price.toFixed(2)}</p>
      </div>
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{product.name}</h3>
      <p className="mt-4 text-slate-600 dark:text-slate-400">{product.description}</p>
      <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400" type="button">
        Añadir al carrito
      </button>
    </article>
  );
}
