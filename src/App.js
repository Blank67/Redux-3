import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData } from './store/cart-http-actions';
import { sendCartData } from './store/cart-http-actions';
// import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => (state.ui.cartIsVisible));
  const cart = useSelector((state) => (state.cart));
  const dispatch = useDispatch();
  const notification = useSelector((state) => (state.ui.notification));

  useEffect(() => {
    // const sendCartData = async () => {
    // dispatch(uiActions.showNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }))
    // const response = await fetch('https://redux-http-98fd9-default-rtdb.firebaseio.com/cart.json', {
    //   method: 'PUT',
    //   body: JSON.stringify(cart)
    // });
    // if (!response.ok) {
    //   throw new Error('SENDING CART DATA FAILED!');
    // }
    // dispatch(uiActions.showNotification({ status: 'success', title: 'Success...', message: 'Sent cart data successfuly!' }))
    // }
    if (isInitial) {
      isInitial = false;
      return;
    }
    // sendCartData().catch((err) => {
    // dispatch(uiActions.showNotification({ status: 'error', title: 'ERROR...', message: 'Sending cart data failed!' }))
    // });
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
