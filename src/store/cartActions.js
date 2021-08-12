
import { uiActions } from './uiSlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const resp = await fetch('https://react-4f9c4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

            if(!resp.ok) {
                throw new Error('Could not fetch Cart Data');
            }
            const data = await resp.json();
            return data;
        };


        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching Cart data failed'
            }));
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending Data...',
                message: 'Sending Cart Data'
            })
        );

        const sendRequest = async () => {
            const res = await fetch('https://react-4f9c4-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity})
            });

            if(!res.ok) {
                throw new Error('Sending Cart Data Failed');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent Cart Data Successfully'
              }));
        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending Cart data failed'
            }));
        }
    };
};