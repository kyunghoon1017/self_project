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
                    <MenuContents href={item.linkto}>{item.name}</MenuContents>
                  </li>
                );
              })}
            </MenuSubTitle>
            <aside>
              <AsideUl>
                <li>
                  <ReadingGlassesButton>
                    <img src="/images/돋보기.png" width="18px" height="18px" />
                  </ReadingGlassesButton>
                </li>
                <li>
                  <SignupButton>회원가입/로그인</SignupButton>
                </li>
                <li>
                  <ServiceButton href="/">기업 서비스</ServiceButton>
                </li>
              </AsideUl>
            </aside>
          </NavInner>
        </NavBar>
      </Main>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #dddd;
  padding: 10px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  overflow: visable;
  outline: none;
`;

const Image = styled.img`
  width: 30px;
  height: 20px;
  object-fit: contain;
  background: none;
  cursor: pointer;
`;
const MainTitle = styled.a`
  font-size: 17px;
  font-weight: bold;
  color: inherit;
`;

const MenuSubTitle = styled.ul`
  display: flex;
  gap: 3rem;
`;

const MenuContents = styled.a`
  font-size: 13px;
  color: inherit;
  padding: 10px 0;
`;

const AsideUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ReadingGlassesButton = styled.button`
  border: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const ServiceButton = styled.a`
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  font-size: 13px;
  color: #666;
  padding: 5px;
`;
