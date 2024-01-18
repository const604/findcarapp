import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import {
  SearchForm,
  Button,
  Label,
  Gallery,
  PriceField,
  MileageContainer,
  MileageFieldFrom,
  MileageFieldTo,
  CarBrandField,
  CarBrandContainer,
  PriceContainer,
} from './Catalog.styled';
import CarCard from 'components/CarCard/CarCard';
import { getCars } from 'redux/operations';
import { selectCars, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';
import { ReactComponent as ChevronDown } from '../../images/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../images/chevron-up.svg';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState('');
  const [brandIsOpen, setBrandIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieName = searchParams.get('query') ?? '';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const carBrands = cars
    .reduce((acc, car) => {
      const make = car.make;
      if (!acc.includes(make)) {
        acc.push(make);
      }
      return acc;
    }, [])
    .sort((a, b) => a.localeCompare(b));

  const carPrice = [
    30, 40, 50, 60, 70, 80, 90, 100, 110, 150, 200, 250, 300, 350, 500
  ];

  // const carPrice = cars
  // .reduce((acc, car) => {
  //   const rentalPrice = car.rentalPrice.slice(1);
  //   if (!acc.includes(rentalPrice)) {
  //     acc.push(rentalPrice);
  //   }
  //   return acc;
  // }, [])
  // .sort((a, b) => a - b);

  // const updateQueryString = e => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   searchQuery.trim() === ''
  //     ? alert('Enter another word to search') || setSearchParams({})
  //     : setSearchParams({ query: searchQuery }) || setSearchQuery('');
  // };

  const handleSubmit = values => {
    dispatch(
      setFilter({
        make: carBrand,
        price: price,
        carMileageFrom: values.carMileageFrom,
        carMileageTo: values.carMileageTo,
      })
    );
    setBrandIsOpen(false);
    setPriceIsOpen(false);
  };

  const filteredCars = () => {
    const filterMake = filter.make
      ? cars.filter(car => car.make === filter.make)
      : cars;
    const filterRentalPrice = filter.price
      ? filterMake.filter(car => car.rentalPrice.split('$')[1] <= filter.price)
      : filterMake;
    const filterCarMileage =
      filter.carMileageFrom || filter.carMileageTo
        ? filterRentalPrice.filter(
            car =>
              car.mileage >= filter.carMileageFrom &&
              car.mileage <= filter.carMileageTo
          )
        : filterRentalPrice;
    return filterCarMileage;
  };

  return (
    <>
      <Formik
        initialValues={{
          carMileageFrom: '',
          carMileageTo: '',
        }}
        onSubmit={handleSubmit}
      >
        <SearchForm>
          <Form>
            <Label>
              Car brand
              <CarBrandField
                name="carBrand"
                placeholder="Enter the text"
                autoComplete="off"
                value={carBrand}
                onChange={e => setCarBrand(e.target.value)}
                onClick={() => setBrandIsOpen(!brandIsOpen)}
              />
              {!brandIsOpen ? (
                <ChevronDown
                  style={{
                    position: 'absolute',
                    left: 180,
                    top: 40,
                  }}
                />
              ) : (
                <ChevronUp
                  style={{
                    position: 'absolute',
                    left: 180,
                    top: 40,
                  }}
                />
              )}
            </Label>
            <Label>
              Price/ 1 hour
              <PriceField
                name="price"
                placeholder="To $"
                autoComplete="off"
                value={price}
                onChange={e => setPrice(e.target.value)}
                onClick={() => setPriceIsOpen(!priceIsOpen)}
              />
              {!priceIsOpen ? (
                <ChevronDown
                  style={{
                    position: 'absolute',
                    left: 80,
                    top: 40,
                  }}
                />
              ) : (
                <ChevronUp
                  style={{
                    position: 'absolute',
                    left: 80,
                    top: 40,
                  }}
                />
              )}
            </Label>
            <Label>
              Сar mileage / km
              <MileageContainer>
                <MileageFieldFrom name="carMileageFrom" placeholder="From " />
                <MileageFieldTo name="carMileageTo" placeholder="To " />
              </MileageContainer>
            </Label>
            <Button type="submit">Search</Button>
          </Form>
        </SearchForm>
      </Formik>
      <Gallery>
        <>
          {brandIsOpen && (
            <CarBrandContainer
              style={{
                position: 'absolute',
                left: 165,
                top: -50,
              }}
            >
              <ul>
                {carBrands.map(make => (
                  <li
                    key={make}
                    onClick={() => {
                      setCarBrand(make);
                      setBrandIsOpen(!brandIsOpen);
                    }}
                  >
                    {make}
                  </li>
                ))}
              </ul>
            </CarBrandContainer>
          )}
          {priceIsOpen && (
            <PriceContainer
              style={{
                position: 'absolute',
                left: 405,
                top: -50,
              }}
            >
              <ul>
                {carPrice.map(rentalPrice => (
                  <li
                    key={rentalPrice}
                    onClick={() => {
                      setPrice(rentalPrice);
                      setPriceIsOpen(!priceIsOpen);
                    }}
                  >
                    {rentalPrice}
                  </li>
                ))}
              </ul>
            </PriceContainer>
          )}
          {filteredCars() !== null
            ? filteredCars().map(
                ({
                  id,
                  year,
                  make,
                  model,
                  type,
                  img,
                  isFavorites,
                  functionalities,
                  rentalPrice,
                  rentalCompany,
                  address,
                  mileage,
                }) => (
                  <CarCard
                    key={id}
                    id={id}
                    year={year}
                    make={make}
                    model={model}
                    type={type}
                    img={img}
                    isFavorites={isFavorites}
                    functionalities={functionalities}
                    rentalCompany={rentalCompany}
                    rentalPrice={rentalPrice}
                    address={address}
                    mileage={mileage}
                  />
                )
              )
            : cars.map(
                ({
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
                  mileage,
                }) => (
                  <CarCard
                    key={id}
                    id={id}
                    year={year}
                    make={make}
                    model={model}
                    type={type}
                    img={img}
                    functionalities={functionalities}
                    rentalCompany={rentalCompany}
                    rentalPrice={rentalPrice}
                    address={address}
                    mileage={mileage}
                  />
                )
              )}
        </>
      </Gallery>
    </>
  );
};

export default Catalog;
