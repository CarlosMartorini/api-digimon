import { ButtonStyled } from "./styles";

const Button = ({ deleted, children, onClick }) => {
  return (
    <ButtonStyled deleted={deleted} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
