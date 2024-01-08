import styled from 'styled-components';
import 'modern-normalize';
import { NavLink } from 'react-router-dom';
import { Field } from 'formik';

export const Home = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1440px;
  gap: 20px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  /* color: #fff; */
  /* background-color: #04050a; */
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  &.active {
    color: #3b3b05;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  & form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 18px;
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-bottom: 52px; */
    /* width: 859px; */
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
`;

export const Label = styled.label`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-family: ManropeRegular;
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const CarBrandField = styled(Field)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 48px;
  padding: 14px 89px 14px 18px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-family: ManropeRegular;
  font-size: 18px;
  line-height: calc(20 / 18);
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: #121417;
    font-family: ManropeRegular;
    font-size: 18px;
    line-height: calc(20 / 18);
  }
`;

export const CarBrandContainer = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  /* width: 224px; */
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  height: 272px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  & ul {
    width: 195px;
    overflow-y: scroll;
  }
  & li {
    color: rgba(18, 20, 23, 0.4);
    font-family: ManropeRegular;
    font-size: 16px;
    line-height: calc(30 / 16);
    cursor: pointer;
  }
`;

export const PriceField = styled(Field)`
  display: flex;
  width: 125px;
  height: 48px;
  padding: 14px 18px;
  align-items: flex-start;
  gap: 32px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-family: ManropeRegular;
  font-size: 18px;
  line-height: calc(20 / 18);
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: #121417;
    font-family: ManropeRegular;
    font-size: 18px;
    line-height: calc(20 / 18);
  }
`;

export const PriceContainer = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  /* width: 125px; */
  height: 188px;
  padding: 14px 8px 14px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  & ul {
    width: 97px;
    overflow-y: scroll;
  }
  & li {
    color: rgba(18, 20, 23, 0.4);
    font-family: ManropeRegular;
    font-size: 16px;
    line-height: calc(30 / 16);
    cursor: pointer;
  }
`;

export const MileageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MileageFieldFrom = styled(Field)`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 24px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-family: ManropeRegular;
  font-size: 18px;
  line-height: calc(20 / 18);
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: #121417;
    font-family: ManropeRegular;
    font-size: 18px;
    line-height: calc(20 / 18);
  }
`;

export const MileageFieldTo = styled(Field)`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 24px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;
  font-family: ManropeRegular;
  font-size: 18px;
  line-height: calc(20 / 18);
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: #121417;
    font-family: ManropeRegular;
    font-size: 18px;
    line-height: calc(20 / 18);
  }
`;

export const Button = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: none;
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

export const Gallery = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1184px;
  gap: 29px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 52px;
`;
