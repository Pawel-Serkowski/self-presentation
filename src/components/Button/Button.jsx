import "./button.scss";
const Button = ({ style, text, id }) => {
    return (
        <a className={`${style}`} href={`#${id}`}>
            {text}
        </a>
    );
};

export default Button;
