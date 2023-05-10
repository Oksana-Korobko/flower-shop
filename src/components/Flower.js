import PropTypes from 'prop-types';
import defaultImage from './default.png';

const Flower = ({
    name,
    url = defaultImage,
    price,
    size,
    count
}) => {
    return(
        <div>
            <h2>{name}</h2>
            <img src={url ?? defaultImage} alt={name} width="450" />
            <p>Розмір: {size}  </p>
            <p>Ціна: {price} гривень </p>
            <p>Доступність: {count > 10 ? "Є в наявності": "Закінчується"} </p>
            <button type='button'>Додати до кошика</button>
        </div>
    );
};

Flower.propTypes = {
    "name": PropTypes.string,
    "url": PropTypes.string,
    "price": PropTypes.number,
    "size": PropTypes.string,
    "count": PropTypes.number
};
export default Flower;