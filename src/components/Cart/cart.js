import { useContext, useState} from 'react';
import Modal from '../ui/modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './checkout';
import React from 'react';

const Cart = (props) => {

    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = (item) => {
      setIsCheckout(true);
    };

    const submitOrderHandler = async (data) => {
      setIsSubmitting(true);
      await fetch('https://react-4f9c4-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
        method: 'POST',
        body: JSON.stringify({
          data: data,
          orderedItems: cartCtx.items
        })
      });
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    };


    const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );

  const modalActions = <div className={classes.action}>
    <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>;


  const cartModalContent = (
    <React.Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onCancel={props.onCloseCart} onSubmit={submitOrderHandler}/>}
        {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending Order Data ...</p>;
  const didModalContent = (
      <React.Fragment>
          <p>Successfully Sent Order!</p>
          <div className={classes.action}>
            <button className={classes.button} onClick={props.onCloseCart}>Close</button>
          </div>
      </React.Fragment>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didModalContent}
    </Modal>
  );
};

export default Cart;