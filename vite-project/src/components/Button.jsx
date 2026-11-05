const Button = ({ text, color = "black" }) => {
    return (
        <button style={{ color }}>
            {text} - {color.toUpperCase()}
        </button>
    );
};

export default Button;