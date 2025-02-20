import { data, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetsCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  console.log(data);
  return (
    <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((gadgest) => (
        <Card key={gadgest.product_id} gadgest={gadgest}></Card>
      ))}
    </div>
  );
};

export default GadgetsCards;
