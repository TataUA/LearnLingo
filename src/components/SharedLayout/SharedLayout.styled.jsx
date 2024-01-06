import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  box-sizing: border-box;
  min-width: 320px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color);
  background-color: var(--white);
  // @media (min-width: 768px) {
  // }
  @media (min-width: 1024px) {
    padding: 20px 32px 32px;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  max-width: 1184px;
  height: 48px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  > nav {
    display: flex;
    gap: 28px;
    align-items: center;
    justify-content: right;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 8px;

  > img {
    margin-right: 4px;
  }

  > span {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const BurgerBtn = styled.button`
//♠️ ♡ ♢ ♣️
`

export const Link = styled(NavLink)`
  color: var(--text-color);
  line-height: 20px;

  &.active {
    color: var(--active-color);
    transition: var(--transition);
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 4px;
    border: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    &:hover {
      color: var(--active-color);
    }

    .icon {
      margin-right: 4px;
      fill: var(--theme-gold);
    }
  }

  .registration {
    padding: 14px 39px;
    border-radius: 12px;
    background-color: var(--text-color);
    color: var(--white);
    &:hover {
      background-color: var(--theme-gold);
      color: var(--text-color);
    }
  }
`;
