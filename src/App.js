import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/uiSlice';
import Notification from './components/UI/notification';
import { sendCartData, fetchCartData } from './store/cartActions';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {

    if(isInitial) {
      isInitial = false;
      return;
    }


   if(cart.changed) {
    dispatch(sendCartData(cart));
   }

    // const sendCartData = async () => {
    //   // dispatch(uiActions.showNotification({
    //   //     status: 'pending',
    //   //     title: 'Sending Data...',
    //   //     message: 'Sending Cart Data'
    //   //   }));

    //     // const res = await fetch('https://react-4f9c4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
    //     //     method: 'PUT',
    //     //     body: JSON.stringify(cart)
    //     //   });

    //     // if(!res.ok) {
    //     //   throw new Error('Sending Cart Data Failed');
    //     // }

    //     //const resObj = await res.json();

    //     // dispatch(uiActions.showNotification({
    //     //   status: 'success',
    //     //   title: 'Success',
    //     //   message: 'Sent Cart Data Successfully'
    //     // }));
    // };

    // sendCartData().catch(error => {
    //   // dispatch(uiActions.showNotification({
    //   //   status: 'error',
    //   //   title: 'Error',
    //   //   message: 'Sending Cart data failed'
    //   // }));
    // });

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
      {showCart &&  <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
