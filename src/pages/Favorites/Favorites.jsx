import CarCard from 'components/CarCard/CarCard';
import { Gallery } from 'components/Catalog/Catalog.styled';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  return (
    <Gallery>
      {favorites?.map(
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
            price={rentalPrice}
            address={address}
          />
        )
      )}
    </Gallery>
  );
};

export default Favorites;
