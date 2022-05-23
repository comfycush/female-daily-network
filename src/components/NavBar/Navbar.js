import styled from "@emotion/styled";
import React from "react";
import logo from "../../assets/images/FD-logo-pink.png";

const UpperNav = styled.div`
  display: flex;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 60px;
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  align-items: center;
  width: 100%;
`;
const NavBrandImg = styled.img`
  height: 40px;
  min-width: 100%;
`;
const SearchBarContainer = styled.div`
  display: flex;
  width: 80%;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  align-items: center;
  padding: 5px;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.375rem 0.75rem;

  border: 0;
  border-radius: 5px;
`;
const LoginSignUpButton = styled.button`
  display: flex;
  background-color: #da254e;
  height: 100%;
  width: 220px;

  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
`;
const LowerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 45px;
`;
const LowerNavUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const LowerNavList = styled.li`
  float: left;
  padding: 0 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
`;
const UserIcon = styled.i`
  margin-right: 20px;
`;
const SearchIcon = styled.i`
  opacity: 0.5;
  margin-left: 15px;
`;

const Navbar = () => {
  return (
    <nav>
      <UpperNav>
        <HeaderLeft>
          <button>
            <i className="fas fa-bars fa-lg"></i>
          </button>
          <a href="/#">
            <NavBrandImg src={logo} />
          </a>
          <SearchBarContainer>
            <button>
              <SearchIcon className="fas fa-search"></SearchIcon>
            </button>
            <SearchInput
              type={"text"}
              placeholder="Search products, articles, topics, brands, etc"
            />
          </SearchBarContainer>
        </HeaderLeft>
        <LoginSignUpButton>
          <UserIcon className="fas fa-user"></UserIcon>
          Login / Signup
        </LoginSignUpButton>
      </UpperNav>
      <LowerNav>
        <LowerNavUnorderedList>
          <LowerNavList>
            <a href="/#">Skincare</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Make Up</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Body</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Hair</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Fragrance</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Nails</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Tools</a>
          </LowerNavList>
          <LowerNavList>
            <a href="/#">Brands</a>
          </LowerNavList>
        </LowerNavUnorderedList>
      </LowerNav>
    </nav>
  );
};

export default Navbar;
