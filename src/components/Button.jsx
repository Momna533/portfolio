const Button = (props) => {
  const { varient, children, className, onClick, href } = props;
  if (varient === "link") {
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
