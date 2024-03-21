import styled from "@emotion/styled";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  gap: 24px;
  flex-wrap: wrap;

  > img {
    max-width: 568px;
    margin: 0 auto;
    border-radius: 30px;
  }
`;

export const Description = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 68px 24px;
  border-radius: 30px;
  background-color: var(--background-gray);

  @media (min-width: 768px) {
    padding: 98px 64px;
  }

  > h1 {
    max-width: 768px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.17;
    letter-spacing: -2%;

    > span {
      font-weight: 400;
      font-style: italic;
      border-radius: 12px;
      background-color: var(--theme-light-gold);
    }
  }

  > p {
    max-width: 471px;
    margin-bottom: 64px;
    font-size: 16px;
    line-height: 1.38;
    letter-spacing: -0.02em;
    text-align: left;
  }

  > button {
    width: 100%;
    max-width: 267px;
    height: 60px;
    padding: 16px 88 px;
    border-radius: 12px;
    border-color: transparent;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    background-color: var(--theme-gold);
  }
`;
