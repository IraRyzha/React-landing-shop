import { useContext } from "react";
import { AppContext } from "../../context/MainContext";
import { addToCart, removeFromCart } from "../../store/actions";
import UiButton from "../uikit/UiButton";

const RemoveButton = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
    className="font-medium text-indigo-600 hover:text-indigo-500"
  >
    Remove
  </button>
);

const ProductName = ({ href, name }) => (
  <h3 className="text-base font-medium text-gray-900">
    <a href={href}>{name}</a>
  </h3>
);

const ProductPrice = ({ value }) => (
  <p className="ml-4 text-base font-medium text-gray-900">{value}</p>
);

const ProductColor = ({ value }) => (
  <p className="mt-1 text-sm text-gray-500">{value}</p>
);

const ProductPhoto = ({ src }) => (
  <img
    src={src}
    alt={src}
    className="h-full w-full object-cover object-center"
  />
);

/**
 * @param {{
 * type: string,
 * product: object,
 * onClick: any,
 * }} props
 */

const ProductItem = ({ type, product, onClick }) => {
  const { cart, dispatchCart } = useContext(AppContext);
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

  const isProductAlreadyOrdered = cart.products.find(
    (item) => item.id === product.id
  );

  const modalProductItem = (
    <figure
      role="button"
      className="pointer-events-none flex gap-5 w-full h-full"
    >
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
          <UiButton
            onClick={() =>
              isProductAlreadyOrdered
                ? removeFromCart(dispatchCart, product)
                : addToCart(dispatchCart, product)
            }
            color="violet"
            className="pointer-events-auto"
          >
            {isProductAlreadyOrdered ? "Remove from bag" : "Add to bag"}
          </UiButton>
        </div>
      </figcaption>
    </figure>
  );

  const cartProductItem = (
    <div className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <ProductPhoto src={product.photo} />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <ProductName href={product.href} name={product.name} />
          <ProductPrice value={product.currency + product.price} />
        </div>

        <ProductColor value={product.options.color} />

        <div className="flex flex-1 items-end">
          <RemoveButton onClick={() => removeFromCart(dispatchCart, product)} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {type === "base" && baseProductItem}
      {type === "modal" && modalProductItem}
      {type === "cart" && cartProductItem}
    </>
  );
};

export default ProductItem;
