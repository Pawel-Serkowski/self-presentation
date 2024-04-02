import "./button.scss";
const Button = ({ style, text, id, link = 0 }) => {
    return (
        <a className={`${style}`} href={link ? id : `#${id}`} target={link ? "_blank" : "_self"}>
            {text}
        </a>
    );
};

export default Button;
