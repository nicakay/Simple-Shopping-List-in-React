import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
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
        <Button className={classes.btn} onClick={props.onOK}>
          OK
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onOK={props.onOK} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOK={props.onOK}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
