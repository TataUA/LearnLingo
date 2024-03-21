import { NavLink, Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  width: 100%;
  max-width: 1184px;
  min-height: 48px;
  margin: 0 auto;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: white; //delete

  > nav {
    display: flex;
    margin-left: auto;
    padding: 4px;
    gap: 28px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export const Logo = styled(Link)`
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  > img {
    margin-right: 4px;
  }

  > span {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: var(--text-color);

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const PageLink = styled(NavLink)`
  color: var(--text-color);
  line-height: 1.25;

  &:hover {
    transform: scale(1.1);
    transition: var(--transition);
  }

  &.active {
    font-weight: 700;
    transform: scale(1.1);
    transition: var(--transition);
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 4px;
  gap: 16px;

  @media (min-width: 768px) {
    margin: 0;
  }

  > button {
    display: flex;
    padding: 8px 4px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.25;
    border: none;
    background-color: transparent;

    @media (min-width: 768px) {
      padding: 14px 4px;
      font-size: 16px;
    }

    &:hover {
      color: var(--theme-gold);
      transition: var(--transition);
    }

    .icon {
      margin-right: 4px;
      fill: var(--theme-gold);
    }
  }

  .registration {
    padding: 4px 12px;
    border-radius: 12px;
    background-color: var(--text-color);
    color: var(--white);

    @media (min-width: 768px) {
      padding: 8px 24px;
    }

    @media (min-width: 1024px) {
      padding: 14px 39px;
    }

    &:hover {
      background-color: var(--theme-light-gold);
      color: var(--text-color);
      transition: var(--transition);
    }
  }
`;
