import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Branch } from './iconesL/bighead.svg';

const HeaderStyled = styled.header`
  background-color: #151515;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  opacity: 0.95;
  background: rgba(46, 46, 46, 0.3);
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(46, 46, 46, 0.4);
`;

const HeaderChildren = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const NavContainer = styled.nav`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  gap: 48px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderChildren>
        <Branch style={{ height: '68' }} />

        <NavContainer>
          <List>
            <ListItem class="fontLi">
              <Link href="#projetos">Projetos</Link>
            </ListItem>

            <ListItem class="fontLi">
              <Link href="#formacao">Formação</Link>
            </ListItem>
          </List>
        </NavContainer>
      </HeaderChildren>
    </HeaderStyled>
  );
};

export default Header;
