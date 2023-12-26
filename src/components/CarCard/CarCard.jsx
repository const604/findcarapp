import { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  ImgContainer,
  InfoBlock,
  BlockName,
  BlockAbout,
  CarBrand,
  CarName,
  CarPrice,
  Block,
  LearnMoreButton,
  CardContainer,
} from './CarCard.styled';
// import icons from 'Vector 4.svg';
import { ReactComponent as Vector } from '../../images/Vector 4.svg';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';
import { ReactComponent as HeartIconBlue } from '../../images/heart-blue.svg';
import { CarModal } from 'components/CarModal/CarModal';
import { addFavorites, deleteFavorites } from 'redux/favoritesslice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFavorites } from 'redux/selectors';

const CarCard = ({
  id,
  year,
  make,
  model,
  type,
  img,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
}) => {
  // const { carId } = useParams();
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const isFavorites = favorites.some(favorite => favorite.id === id);
  const dispatch = useDispatch();
  const [isOpened, setIsOpen] = useState(false);
  // const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? '/movies');

  const handleToggle = () => {
    setIsOpen(!isOpened);
  };

  const handleFavorites = id => {
    const car = cars.find(car => car.id === id);
    !isFavorites
      ? dispatch(addFavorites({ ...car, isFavorites: !isFavorites }))
      : dispatch(deleteFavorites(car));
  };

  // useEffect(() => {
  //   if (!carId) {
  //     return;
  //   }
  //   async function fetchData() {
  //     try {
  //       const response = await getMovieDetails(carId);
  //       setCar(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, [carId]);

  return (
    <CardContainer>
      <ImgContainer>
        <button
          type="button"
          onClick={() => {
            handleFavorites(id);
          }}
        >
          {!isFavorites ? <HeartIcon /> : <HeartIconBlue />}
        </button>
        <img
          src={img}
          alt={make}
          style={{ borderRadius: 14 }}
          // width="100%"
          // height="100%"
          // width={300}
        />
      </ImgContainer>
      <InfoBlock>
        <BlockName>
          <CarBrand>
            {make}
            <CarName> {model}, </CarName>
            {year}
          </CarBrand>
          <CarPrice>{rentalPrice}</CarPrice>
        </BlockName>
        <BlockAbout>
          <Block>
            <BlockAbout>
              <p>{address.split(',')[1]}</p>
              <Vector />
              <p>{address.split(',')[2]}</p>
              <Vector />
              <p>{rentalCompany}</p>
              {/* <Vector />
              <p>Premium</p> */}
            </BlockAbout>
            <BlockAbout>
              <p>{type}</p>
              <Vector />
              <p>{model}</p>
              <Vector />
              <p>{id}</p>
              <Vector />
              <p>{functionalities[0].split(' ').splice(0, 2).join(' ')}</p>
            </BlockAbout>
          </Block>
        </BlockAbout>
      </InfoBlock>
      <LearnMoreButton type="button" onClick={() => setIsOpen(true)}>
        Learn more
      </LearnMoreButton>
      {isOpened && <CarModal onClose={handleToggle} id={id}></CarModal>}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </CardContainer>
  );
};

export default CarCard;
