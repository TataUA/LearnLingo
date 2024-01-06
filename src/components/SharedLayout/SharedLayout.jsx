import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { MdLogin, MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";
import ukraine from "images/ukraine.png";
import * as SC from "./SharedLayout.styled";

export const SharedLayout = () => {
  const isMobileView = window.innerWidth < 1024;
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToogleMenu() {
    if (toggleMenu) setToggleMenu(false);
    else setToggleMenu(true);
    return;
  }

  return (
    <SC.Container>
      <SC.Header>
        <SC.Logo>
          <img src={ukraine} alt="logo" width={28} height={28} />
          <span>LearnLingo</span>
        </SC.Logo>
        <button onClick={() => handleToogleMenu()}>
          {toggleMenu ? (
            <MdOutlineClose size={28} />
          ) : (
            <MdOutlineMenu size={28} />
          )}
        </button>

        {!toggleMenu && isMobileView ? null : (
          <>
            <nav>
              <SC.Link to="/" end>
                <span>Home</span>
              </SC.Link>
              <SC.Link to="/teachers">
                <span>Teachers</span>
              </SC.Link>
              <SC.Link to="/favorites">
                <span>Favorites</span>
              </SC.Link>
            </nav>
            <SC.Buttons>
              <button>
                {" "}
                <MdLogin size={20} className="icon" /> Log in
              </button>
              <button className="registration">Registration</button>
              <button>
                <VscColorMode size={20} className="icon" /> Theme
              </button>
            </SC.Buttons>
          </>
        )}
      </SC.Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Container>
  );
};
