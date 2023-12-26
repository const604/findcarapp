import styled from 'styled-components';
import 'modern-normalize';

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 14px;
  padding: 12px;

  /* & button {
    width: 100%;
    background-color: #3470ff;
    color: white;
    transition: all 250ms linear;

    &:hover,
    &:focus {
      background-color: #0b44cd;
    }
  } */

  &:hover img {
    transform: scale(1.5);
  }

  display: flex;
  width: 274px;
  /* height: 426px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
`;

export const ImgContainer = styled.div`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  width: 274px;
  height: 268px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  & img {
    display: block;
    width: 100%;
    height: 268px;
    object-fit: cover;
    transition: all 250ms linear;
  }

  & > button {
    position: absolute;
    top: 14px;
    right: 14px;
    border: none;
    background: transparent;
    z-index: 2;
    padding: 0;
    margin: 0;
    transition: all 250ms linear;
    width: 18px;
    height: 18px;

    &:hover,
    &:focus {
      outline: none;
      background: transparent;
    }

    & svg {
      width: 18px;
      height: 18px;
      transition: all 250ms linear;

      /* color: ${props => (props.$isfavorite ? '#3470FF' : 'white')}; */
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
    }
  }
`;

// export const Car = styled.img`
//   object-fit: cover;
//   border-radius: 14px;
//   background: linear-gradient(
//       180deg,
//       rgba(18, 20, 23, 0.5) 2.5%,
//       rgba(18, 20, 23, 0) 41.07%
//     ),
//     #f3f3f2;
//   transition: transform 1s ease-in-out;
// `;

// export const Gallery = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   justify-items: stretch;
//   gap: 20px;
//   padding-right: 24px;
//   padding-left: 24px;
// `;

export const InfoBlock = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 28px;
`;

export const BlockName = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 265px;
`;

export const CarBrand = styled.span`
  color: #121417;
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const CarName = styled.span`
  color: #3470ff;
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const CarPrice = styled.span`
  position: absolute;
  right: 1px;
  color: #121417;
  font-family: ManropeRegular;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const Block = styled.div`
  display: flex;
  width: 270px;
  height: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const BlockAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const LearnMoreButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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
