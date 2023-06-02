import Header from './component/header/Header';
import Meals from './component/meals/Meals'; 
import Modal from './component/checkout/Modal';
import { useState } from 'react';
import CartProvider from './component/store/CartProvider';

function App() {
  const [checkedout, setCheckedout] = useState(false); 
  const checkout = () => { setCheckedout(true) }
  const cancelCheckout = () => { setCheckedout(false) }

  return (
    <CartProvider>
      {checkedout && <Modal cancelCheckout={cancelCheckout} />}
      <Header checkout={checkout} />
      <Meals />
    </CartProvider>
  );
}

export default App;
