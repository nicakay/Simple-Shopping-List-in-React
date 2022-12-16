import classes from './ShoppingList.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ShoppingList = (props) => {
  const clickDeleteIconHandle = (prodId) => {
    props.onDeleteShopping(prodId);
  };

  return (
    <div className={classes.ulDiv}>
      <ul>
        {props.shopping.map((product) => (
          <li key={product.id}>
            {product.name} x {product.quantity}
            <DeleteForeverIcon
              className={classes.delete}
              onClick={() => {
                clickDeleteIconHandle(product.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
