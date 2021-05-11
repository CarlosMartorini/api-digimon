import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  margin-top: 5px;
  width: 100px;
  font-size: 12px;
  height: 20px;
  border: none;
  border-radius: 10px;
  background-color: deepskyblue;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.deleted &&
    css`
      background: white;
      color: red;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;
