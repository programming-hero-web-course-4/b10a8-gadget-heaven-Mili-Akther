
const Card = ({gadgest}) => {
    const { price, product_image, product_title } = gadgest || {};
    return <div>{product_title}</div>;
};

export default Card;