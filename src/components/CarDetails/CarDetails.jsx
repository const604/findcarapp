import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import {
  ImgContainer,
  InfoBlock,
  BlockName,
  BlockAbout,
  CarBrand,
  CarName,
  Block,
  RentalButton,
  CardContainer,
  Description,
} from './CarDetails.styled';
import { ReactComponent as Vector } from '../../images/Vector 4.svg';
import { ReactComponent as XIcon } from '../../images/x.svg';

const CarDetails = ({ onClose, id }) => {
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

  return (
    <CardContainer key={id}>
      <XIcon
        onClick={() => onClose()}
        style={{
          position: 'absolute',
          right: 16,
          top: 16,
        }}
      />
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
            {accessories?.map((item, i) => {
              return (
                <li key={i}>
                  <p>{item}</p>
                  <Vector />
                </li>
              );
            })}
          </BlockAbout>
          <BlockAbout>
            {functionalities?.map((item, i) => {
              return (
                <li key={i}>
                  <p>{item}</p>
                  <Vector />
                </li>
              );
            })}
            <Vector />
          </BlockAbout>
          <h3>Rental Conditions:</h3>
        </Block>
        <BlockAbout>
          {rentalConditions?.split('\n').map((item, i) => {
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
      <RentalButton href={'tel:+380730000000'}>Rental car</RentalButton>
    </CardContainer>
  );
};

export default CarDetails;
