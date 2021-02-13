import styled from '@emotion/styled';
import Link from 'next/link';

const Header = () => {
  const Header = styled.div({
    width: '100%',
    backgroundColor: '#0e153a',
    padding: '20px 0',
  });
  const Container = styled.div({ width: '90%', margin: '0 auto' });
  const Nav = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  });
  const Logo = styled.div({
    fontSize: '18px',
    fontWeight: 500,
    color: 'ghostwhite',
    cursor: 'pointer',
  });
  const Menu = styled.ul`
    display: flex;
    margin: 0;
    list-style-type: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  `;
  const MenuItem = styled.li({
    color: 'ghostwhite',
    fontSize: '16px',
    padding: '0 12px',
    cursor: 'pointer',
  });
  return (
    <Header>
      <Container>
        <Nav>
          <Link href='/'>
            <Logo>Dev Media</Logo>
          </Link>
          <Menu>
            <Link href='/about'>
              <MenuItem>About</MenuItem>
            </Link>
            <Link href='/posts'>
              <MenuItem>Blogs</MenuItem>
            </Link>
            <Link href='/contact'>
              <MenuItem>Contact</MenuItem>
            </Link>
          </Menu>
        </Nav>
      </Container>
    </Header>
  );
};

export default Header;
