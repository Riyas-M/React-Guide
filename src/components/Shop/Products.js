import ProductItem from './ProductItem';
import classes from './Products.module.css';

const demoProducts = [
  {id: 'p1', price: 5, title: 'My Book P1', description: 'The First Book I ever Read'},
  {id: 'p2', price: 10, title: 'My Book P2', description: 'The Second Book I ever Read'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          demoProducts.map((prod) => (<ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />))
        }
      </ul>
    </section>
  );
};

export default Products;
