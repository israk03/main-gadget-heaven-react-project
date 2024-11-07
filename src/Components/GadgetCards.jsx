import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const gadget = useLoaderData();
  const { category } = useParams();
  const [gadgetitem, setGadgetitem] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...gadget].filter(
        (gadget) => gadget.category === category
      );
      setGadgetitem(filteredByCategory);
    } else {
      setGadgetitem(gadget);
    }
  }, [category, gadget]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {Array.isArray(gadgetitem) && gadgetitem.length > 0 ? (
        gadgetitem.map((gadgets) => <Card key={gadgets.id} gadgets={gadgets} />)
      ) : (
        <p>No gadgets available.</p>
      )}
    </div>
  );
};

export default GadgetCards;
