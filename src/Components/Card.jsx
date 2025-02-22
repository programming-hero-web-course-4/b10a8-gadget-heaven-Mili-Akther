
const Card = ({gadget}) => {
    const { price, product_image, product_title } = gadget || {};
    return <div>{product_title}</div>;
};

export default Card;