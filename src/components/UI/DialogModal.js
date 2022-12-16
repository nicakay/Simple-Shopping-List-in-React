import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './DialogModal.module.css';
import Card from './Card';
import Button from './Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onOK} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header>
        <h3>{props.title}</h3>
      </header>
      <div>{props.message}</div>
      <footer>
        <Button className={classes.btn} onClick={props.onNo}>
          No
        </Button>
        <Button className={classes.btn} onClick={props.onYes}>
          Yes
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onYes={props.onYes}
          noNo={props.onNo}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
