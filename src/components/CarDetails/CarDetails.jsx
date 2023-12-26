import {
  ImgContainer,
  InfoBlock,
  BlockName,
  BlockAbout,
  CarBrand,
  CarName,
  // CarPrice,
  Block,
  LearnMoreButton,
  CardContainer,
  Description,
} from './CarDetails.styled';
// import icons from 'Vector 4.svg';
import { ReactComponent as Vector } from '../../images/Vector 4.svg';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';

const CarDetails = ({ id }) => {
  const cars = useSelector(selectCars);

  const car = cars.find(car => car.id === id);
  const {
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;
  
  const newMileage = new Intl.NumberFormat('en-US').format(mileage);
  const newPrice = `${rentalPrice.slice(1)}$`;
  // const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? '/movies');

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
    <CardContainer key={id}>
      <ImgContainer>
        <img
          src={img}
          alt={make}
          style={{ borderRadius: 14 }}
          width="100%"
          height="100%"
        />
      </ImgContainer>
      <InfoBlock>
        <BlockName>
          <CarBrand>
            {make}
            <CarName> {model}, </CarName>
            {year}
          </CarBrand>
          {/* <CarPrice>{rentalPrice}</CarPrice> */}
        </BlockName>
        <BlockAbout>
          <Block>
            <BlockAbout>
              <p>{address.split(',')[1]}</p>
              <Vector />
              <p>{address.split(',')[2]}</p>
              <Vector />
              <p>id: {id}</p>
              <Vector />
              <p>Year: {year}</p>
              <Vector />
              <p>Type: {type}</p>
            </BlockAbout>
            <BlockAbout>
              <p>FuelConsumption: {fuelConsumption}</p>
              <Vector />
              <p>EngineSize: {engineSize}</p>
            </BlockAbout>
          </Block>
        </BlockAbout>
        <Description>{description}</Description>
        <Block>
          <h3>Accessories and functionalities:</h3>
          <BlockAbout>
            {accessories.map((item, i) => {
              return (
                <>
                  <p key={i}>{item}</p>
                  <Vector />
                </>
              );
            })}
          </BlockAbout>
          <BlockAbout>
            {functionalities.map((item, i) => {
              return (
                <>
                  <p key={i}>{item}</p>
                  <Vector />
                </>
              );
            })}
            <Vector />
          </BlockAbout>
          <h3>Rental Conditions:</h3>
        </Block>
        <BlockAbout>
          {rentalConditions.split('\n').map((item, i) => {
            return (
              <li key={i}>
                <p>{item}</p>
              </li>
            );
          })}
          <li>
            <p>
              Mileage: <span>{newMileage}</span>
            </p>
          </li>
          <li>
            <p>
              Price: <span>{newPrice}</span>
            </p>
          </li>
        </BlockAbout>
      </InfoBlock>
      <LearnMoreButton type="submit">Rental car</LearnMoreButton>
    </CardContainer>
  );
};

export default CarDetails;
