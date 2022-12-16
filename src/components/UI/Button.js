import clases from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${clases.button} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
