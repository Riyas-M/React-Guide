import { useContext } from 'react';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import MealItemFrom from './mealItemForm';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemFrom id={props.id} onAddToCart={addToCartHandler}></MealItemFrom>
            </div>
        </li>
  );
};

export default MealItem;