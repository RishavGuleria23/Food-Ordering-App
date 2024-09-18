import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { addItem, clearCart, removeItem } from "../utilities/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <p>No items in the cart. Start adding some now!</p>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
