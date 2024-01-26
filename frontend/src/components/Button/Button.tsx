import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<ButtonProps>`

  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: #61dafb;
          color: #fff;
        `;
      default:
        return `
          background-color: #282c34;
          color: #fff;
        `;
    }
  }}
`;

const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => (
  <StyledButton variant={variant} {...props} />
);

export default Button;