import React, { FC } from 'react';
import { HeaderWrapper } from './Header.styled';
import { ButtonWrapper } from '../Button/Button.styled'; 
import Button from '../Button/Button';

interface HeaderProps {
   onButtonClick: (buttonType: string) => void;
 }

const Header: FC<HeaderProps> = ({ onButtonClick }) => (
  <HeaderWrapper>
    <Button variant="primary" onClick={() => onButtonClick('search')}>
      Search
    </Button>
    <Button variant="primary" onClick={() => onButtonClick('getUser')}>
      Get User 
    </Button>
    <Button variant="primary" onClick={() => onButtonClick('addUser')}>
      Add User
    </Button>
    <Button variant="primary" onClick={() => onButtonClick('updateUser')}>
      Update User
    </Button>
    <Button variant="primary" onClick={() => onButtonClick('deleteUser')}>
      Delete User
    </Button>
  </HeaderWrapper>
);

export default Header;