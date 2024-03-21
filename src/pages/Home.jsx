import goldGirl from "images/goldGirl.jpg";
import * as SC from "./Home.styled";

const Home = () => {
  return (
    <SC.Wrapper>
      <SC.Description>
        <h1>
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button>Get started</button>
      </SC.Description>
      <img src={goldGirl} width={"100%"} alt="girl with laptop" />
    </SC.Wrapper>
  );
};

export default Home;
