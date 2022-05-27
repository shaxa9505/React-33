import React, { createContext, useState } from 'react';
import Main from './Main';

export const ShopContext = createContext();

function App(props) {

const [shoxa, setShoxa] = useState([
  {name: "Shohrux", age: 19}
])

  return (
    <div>
      <ShopContext.Provider value={shoxa}>
        <Main />
      </ShopContext.Provider>
    </div>
  );
}

export default App;