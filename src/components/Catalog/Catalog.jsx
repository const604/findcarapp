import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import {
  SearchBar,
  SearchForm,
  Button,
  Label,
  Input,
  Gallery,
  CarBrand,
  PriceField,
  MileageContainer,
  MileageFieldFrom,
  MileageFieldTo,
  CarBrandField,
  CarBrandContainer,
  PriceContainer,
} from './Catalog.styled';
import CarCard from 'components/CarCard/CarCard';
import { ReactComponent as ChevronDown } from '../../images/chevron-down.svg';
import { ReactComponent as ChevronUp } from '../../images/chevron-up.svg';
import { getCars } from 'redux/operations';
import { selectCars, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

const Catalog = () => {
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  console.log(filter);
  const [carBrand, setCarBrand] = useState('');
  const [price, setPrice] = useState('');
  const [brandIsOpen, setBrandIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieName = searchParams.get('query') ?? '';
  // const [value, setValue] = useState('');
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

  const carPrice = cars
    .reduce((acc, car) => {
      const rentalPrice = car.rentalPrice.slice(1);
      if (!acc.includes(rentalPrice)) {
        acc.push(rentalPrice);
      }
      return acc;
    }, [])
    .sort((a, b) => a - b);

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
        rentalPrice: `$${price}`,
        mileage: values.carMileageFrom,
        // mileage: values.carMileageTo,
      })
    );

    // if (carBrand) {
    //   cars.filter(car => car.make === carBrand);
    // }
    // const payload = {
    //   id: values._id,
    //   updatedCar: {
    //     carBrand: values.carBrand,
    //     price: values.price,
    //     carMileage: values.carMileage,
    //   },
    // };
  };

  const getFilterCars = () => {
    return filter === 0
      ? cars
      : cars.filter(car => {
          return (
            (filter.make && car.make === filter.make) ||
            (filter.rentalPrice && car.rentalPrice === filter.rentalPrice) ||
            (filter.mileage && car.mileage === filter.mileage)
          );
        });

    // return cars.filter(car => {
    //   return Object.keys(filter).every(
    //     category => car[category] === filter[category]
    //   );
    // });
  };
  console.log(getFilterCars());

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
                value={carBrand}
                onChange={e => setCarBrand(e.target.value)}
              />
              {!brandIsOpen ? (
                <ChevronDown
                  onClick={() => setBrandIsOpen(!brandIsOpen)}
                  style={{
                    position: 'absolute',
                    left: 180,
                    top: 40,
                  }}
                />
              ) : (
                <ChevronUp
                  onClick={() => setBrandIsOpen(!brandIsOpen)}
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
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              {!priceIsOpen ? (
                <ChevronDown
                  onClick={() => setPriceIsOpen(!priceIsOpen)}
                  style={{
                    position: 'absolute',
                    left: 80,
                    top: 40,
                  }}
                />
              ) : (
                <ChevronUp
                  onClick={() => setPriceIsOpen(!priceIsOpen)}
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
          {getFilterCars()?.map(
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
                price={rentalPrice}
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
