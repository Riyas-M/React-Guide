import React, { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
// import { ProductsContext } from '../context/productContext';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Favorites = props => {

  const state = useStore()[0];
  const favproducts = state.products.filter(x => x.isFavorite);

  // const favproducts = useContext(ProductsContext).products.filter(x => x.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favproducts.length > 0) {
    content = (
      <ul className="products-list">
        {favproducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
