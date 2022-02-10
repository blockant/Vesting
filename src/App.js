import React from 'react';
import { Provider } from 'react-redux';
import ConnectMetamask from './components/Landing/ConnectMetamask';
import Navbar from './components/Landing/Navigator';
import Paperbase from './components/Landing/Paperbase';
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Paperbase></Paperbase>
        {/* <Navbar></Navbar>
        <>Hello World</>
        <ConnectMetamask></ConnectMetamask> */}
      </Provider>
    </>
  );
}

export default App;
