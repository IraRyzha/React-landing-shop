import UiButton from "./uikit/UiButton";
/**
 * @param {{s
 * type: string,
 * product: object,
 * onClick: any,
 * }} props
 */

const ProductItem = ({ type, product, onClick }) => {
  const baseProductItem = (
    <figure
      role="button"
      onClick={onClick}
      className="flex-1 flex flex-col gap-5 w-full h-full rounded-lg"
    >
      <div className="w-full h-full lg:max-h-80 bg-gray-200 group-hover:opacity-75">
        <img
          className="w-full h-full object-cover"
          src={product.photo}
          alt="photo"
        />
      </div>
      <figcaption className="flex-1 flex flex-col gap-1 ">
        <div className="flex items-center justify-between">
          <p className="md:max-w-36 truncate">{product.name}</p>
          <span className="font-bold">
            {product.price} {product.currency}
          </span>
        </div>
        <p className="text-gray-500">{product.options.color}</p>
      </figcaption>
    </figure>
  );

  const modalProductItem = (
    <figure role="button" className="flex gap-5 w-full h-full">
      <div className="flex-1 w-full h-full bg-gray-200">
        <img
          className="w-full h-full object-cover"
          src={product.photo}
          alt="photo"
        />
      </div>
      <figcaption className="flex-1 flex flex-col gap-3 px-3 py-8">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p>{product.description}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(product.rate)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            ))}
            {[...Array(5 - product.rate)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            ))}
          </div>
          <a
            href="#"
            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {product.reviews} reviews
          </a>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold">
            {product.price} {product.currency}
          </span>
          <UiButton color="violet">Add to bag</UiButton>
        </div>
      </figcaption>
    </figure>
  );

  return (
    <>
      {type === "base" && baseProductItem}
      {type === "modal" && modalProductItem}
    </>
  );
};

export default ProductItem;
