import { MdLogin } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import ukraine from "images/ukraine.png";
import * as SC from "./Header.styled";

export const Header = () => {
  return (
    <SC.Header>
      <SC.Logo to="/">
        <img src={ukraine} alt="logo" width={28} height={28} />
        <span>LearnLingo</span>
      </SC.Logo>
      <nav>
        <SC.PageLink to="/" end>
          <span>Home</span>
        </SC.PageLink>
        <SC.PageLink to="/teachers">
          <span>Teachers</span>
        </SC.PageLink>
        <SC.PageLink to="/favorites">
          <span>Favorites</span>
        </SC.PageLink>
      </nav>
      <SC.Buttons>
        <button>
          <MdLogin size={20} className="icon" /> Log in
        </button>
        <button className="registration">Registration</button>
        <button>
          <VscColorMode size={20} className="icon" /> Theme
        </button>
      </SC.Buttons>
    </SC.Header>
  );
};
