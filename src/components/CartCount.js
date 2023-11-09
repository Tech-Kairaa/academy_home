import { useState } from "react";

const CartCount = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="quantity-input">
      <button
        className="quantity-down"
        id="quantityDown"
        onClick={() => setValue(value == 1 ? 1 : value - 1)}
      >
        -
      </button>
      <input
        id="quantity"
        value={value}
        type="text"
        defaultValue={1}
        name="quantity"
      />
      <button
        onClick={() => setValue(value + 1)}
        className="quantity-up"
        id="quantityUP"
      >
        +
      </button>
    </div>
  );
};
export default CartCount;
