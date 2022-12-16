import { useState } from 'react';
import AddShopping from './components/Shopping/AddShopping';
import ShoppingList from './components/Shopping/ShoppingList';

import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import classes from './App.module.css';

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const addShoppingHandler = (prod, qty, cat) => {
    setShoppingList((prevShoppingList) => {
      return [
        ...prevShoppingList,
        {
          name: prod,
          quantity: qty,
          category: cat,
          id: Math.floor(Math.random() * 100000).toString(),
        },
      ];
    });
  };

  const deleteShoppingHandler = (id) => {
    setShoppingList((prevShoppingList) => {
      const updatedShoppingList = prevShoppingList.filter(
        (product) => product.id !== id
      );
      return updatedShoppingList;
    });
  };

  return (
    <div>
      <header>
        <div className={classes.ico}>
          <StorefrontTwoToneIcon sx={{ fontSize: 80 }} />
        </div>

        <h2>My Shopping List </h2>
      </header>

      <AddShopping onAddShopping={addShoppingHandler} />
      <ShoppingList
        shopping={shoppingList}
        onDeleteShopping={deleteShoppingHandler}
      />
    </div>
  );
};

export default App;
