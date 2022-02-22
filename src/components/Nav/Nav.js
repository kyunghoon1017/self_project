import React from 'react';
import styled from 'styled-components';

const NavMenu = [
  { id: 0, name: '채용', linkto: '/' },
  { id: 1, name: '이벤트', linkto: '/' },
  { id: 2, name: '직군별 연봉', linkto: '/' },
  { id: 3, name: '이력서', linkto: '/' },
  { id: 4, name: '커뮤니티', linkto: '/' },
  { id: 5, name: '프리랜서', linkto: '/' },
  { id: 6, name: 'AI 합격예측', linkto: '/' },
];

const Nav = () => {
  return (
    <Wrapper>
      <Main>
        <NavBar>
          <NavInner>
            <NavLeft>
              <MenuButton>
                <Image src="/images/menu_icon.png" />
              </MenuButton>
              <MainTitle href="/">Wanted</MainTitle>
            </NavLeft>
            <MenuSubTitle>
              {NavMenu.map((item, id) => {
                return (
                  <li key={id}>
                    <a href={item.linkto}>{item.name}</a>
                  </li>
                );
              })}
            </MenuSubTitle>
            <aside>
              <ul>
                <li>
                  <button>
                    <img src="/images/돋보기.png" width="18px" height="18px" />
                  </button>
                </li>
                <li>
                  <button>회원가입/로그인</button>
                </li>
                <li>
                  <a href="/">기업 서비스</a>
                </li>
              </ul>
            </aside>
          </NavInner>
        </NavBar>
      </Main>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  position: fixed;
`;

const Main = styled.div`
  display: relative;
`;

const NavBar = styled.div`
  display: flex;
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  overflow: visable;
`;

const Image = styled.img`
  width: 30px;
  height: 20px;
  object-fit: contain;
  background: none;
`;
const MainTitle = styled.a`
  font-size: 17px;
`;

const MenuSubTitle = styled.ul`
  display: flex;
  font-size: 13px;
`;
