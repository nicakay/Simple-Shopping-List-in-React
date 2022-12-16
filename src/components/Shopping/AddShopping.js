import { useState } from 'react';

import '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddShopping.module.css';
import ErrorModal from '../UI/ErrorModal';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const AddShopping = (props) => {
  const [enteredProduct, setenteredProduct] = useState('');
  const [enteredQuantity, setenteredQuantity] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('category');

  const [error, setError] = useState();

  const addShoppingHandler = (event) => {
    event.preventDefault();

    console.log(enteredProduct, enteredQuantity, selectedCategory);

    if (
      enteredProduct.trim().length === 0 ||
      +enteredQuantity.trim().length === 0
    ) {
      setError({
        title: 'Invalid data',
        message: 'Please do not leave empty values.',
      });
      return;
    }

    if (+enteredQuantity < 1) {
      setError({
        title: 'Invalid quantity',
        message: 'Please enter a valid quantity (> 0).',
      });
      return;
    }

    if (selectedCategory === 'category') {
      setError({
        title: 'Invalid category',
        message: 'Please select a category.',
      });
      return;
    }

    props.onAddShopping(enteredProduct, enteredQuantity, selectedCategory);

    setenteredProduct('');
    setenteredQuantity('');
    setSelectedCategory('category');
  };

  const closeModalHandle = () => {
    setError(null);
  };

  const productChangeHandle = (event) => {
    setenteredProduct(event.target.value);
  };

  const qtyChangeHandle = (event) => {
    setenteredQuantity(event.target.value);
  };

  const catChangeHandler = (event) => {
    setSelectedCategory(event.target.value);
  };

  const myTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#cef0ff',
      },
    },
  });

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOK={closeModalHandle}
        />
      )}
      <Card>
        <ThemeProvider theme={myTheme}>
          <form onSubmit={addShoppingHandler}>
            <TextField
              id='product'
              label='Product'
              value={enteredProduct}
              onChange={productChangeHandle}
              color='primary'
              size='small'
              margin='normal'
              className={classes.inputP}
              sx={{ input: { color: '#1b4144' } }}
            />

            <TextField
              id='quantity'
              label='Qty'
              value={enteredQuantity}
              onChange={qtyChangeHandle}
              color='primary'
              size='small'
              margin='normal'
              className={classes.inputQ}
              sx={{ input: { color: '#1b4144' } }}
            />

            <Select
              name='category'
              id='category'
              value={selectedCategory}
              onChange={catChangeHandler}
              size='small'
              className={classes.select}
              sx={{ input: { color: '#1b4144' } }}
            >
              <MenuItem value='category'>Category...</MenuItem>
              <MenuItem value='baby'>Baby</MenuItem>
              <MenuItem value='backery'>Backery</MenuItem>
              <MenuItem value='drinks'>Drinks</MenuItem>
              <MenuItem value='food-cupboard'>Food Cupboard</MenuItem>
              <MenuItem value='fresh-food'>Fresh Food</MenuItem>
              <MenuItem value='frozen-food'>Frozen Food</MenuItem>
              <MenuItem value='health-n-beauty'>Health & Beauty</MenuItem>
              <MenuItem value='home-n-ents'>Home & Ents</MenuItem>
              <MenuItem value='household'>Household</MenuItem>
              <MenuItem value='pets'>Pets</MenuItem>
            </Select>

            <Button type='submit'>Add Product</Button>
          </form>
        </ThemeProvider>
      </Card>
    </div>
  );
};

export default AddShopping;
