import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 15px 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: var(--text-color);
  background-color: var(--white);
  background-color: lightgray; //delete

  @media (min-width: 768px) {
    padding: 20px 24px 32px;
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1024px) {
    padding: 20px 64px 32px;
  }
`;
