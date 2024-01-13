import styled from 'styled-components';
// import 'modern-normalize';


export const CardContainer = styled.div`
  max-width: 541px;
  max-height: 752px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  background-color: #fff;
  border-radius: 24px;
  padding: 40px;
  overflow: auto;
`;

export const ImgContainer = styled.div`
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  width: 461px;
  height: 248px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const BlockName = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 265px;
`;

export const CarBrand = styled.span`
  color: #121417;
  font-family: ManropeMedium;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const CarName = styled.span`
  color: #3470ff;
  font-family: ManropeMedium;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const Description = styled.h3`
  color: #121417;
  font-family: ManropeRegular;
  font-size: 14px;
  line-height: calc(20 / 14);
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & h3 {
    margin-top: 24px;
    margin-bottom: 8px;
    font-family: ManropeMedium;
    font-size: 14px;
    line-height: calc(20 / 14);
  }
`;

export const BlockAbout = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  & li {
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 35px;
    background: #f9f9f9;
    & p {
      color: #363535;
      & span {
        color: #3470ff;
        font-family: ManropeRegular;
        font-size: 12px;
        line-height: calc(18 / 12);
      }
    }
  }
`;

export const RentalButton = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background: #0b44cd;
  }
  color: var(--White, #fff);
  font-family: ManropeSemiBold;
  font-size: 14px;
  line-height: calc(20 / 14);
`;
