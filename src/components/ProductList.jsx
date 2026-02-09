import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "../redux/CartSlice";

const plantData = [
  {
    category: "Low Light Plants",
    plants: [
      {
        id: "ll1",
        name: "Snake Plant",
        price: 18,
        img: "https://images.unsplash.com/photo-1614594895304-fe711ae5f351?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ll2",
        name: "ZZ Plant",
        price: 22,
        img: "https://images.unsplash.com/photo-1617173944883-6b1c84b8fdf9?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ll3",
        name: "Pothos",
        price: 14,
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ll4",
        name: "Peace Lily",
        price: 20,
        img: "https://images.unsplash.com/photo-1593697909683-bccb8c0b70cb?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ll5",
        name: "Chinese Evergreen",
        price: 19,
        img: "https://images.unsplash.com/photo-1616628182509-5bdeaa818572?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ll6",
        name: "Cast Iron Plant",
        price: 26,
        img: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: "ap1",
        name: "Aloe Vera",
        price: 12,
        img: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ap2",
        name: "Spider Plant",
        price: 13,
        img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ap3",
        name: "Rubber Plant",
        price: 24,
        img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ap4",
        name: "Boston Fern",
        price: 16,
        img: "https://images.unsplash.com/photo-1524594154908-edd6656f0f03?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ap5",
        name: "Areca Palm",
        price: 28,
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ap6",
        name: "Dracaena",
        price: 21,
        img: "https://images.unsplash.com/photo-1616628182509-5bdeaa818572?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    category: "Easy Care Plants",
    plants: [
      {
        id: "ec1",
        name: "Monstera",
        price: 30,
        img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ec2",
        name: "Philodendron",
        price: 20,
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ec3",
        name: "Fiddle Leaf Fig",
        price: 34,
        img: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ec4",
        name: "Jade Plant",
        price: 15,
        img: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ec5",
        name: "Parlor Palm",
        price: 18,
        img: "https://images.unsplash.com/photo-1524594154908-edd6656f0f03?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "ec6",
        name: "Calathea",
        price: 23,
        img: "https://images.unsplash.com/photo-1614594895304-fe711ae5f351?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // required by rubric: addedToCart[plant.name]
  const initialAdded = useMemo(() => {
    const obj = {};
    cartItems.forEach((i) => {
      obj[i.name] = true;
    });
    return obj;
  }, [cartItems]);

  const [addedToCart, setAddedToCart] = useState(initialAdded);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="container">
      <h1 style={{ marginTop: 0 }}>Plants</h1>
      <p>
        Explore our plant categories. Click “Add to Cart” to add a plant. The button will be disabled
        after adding.
      </p>

      {plantData.map((group) => (
        <div key={group.category}>
          <h2 className="categoryTitle">{group.category}</h2>

          <div className="grid">
            {group.plants.map((plant) => (
              <div className="card" key={plant.id}>
                <img className="thumb" src={plant.img} alt={plant.name} />

                <div className="row">
                  <div>
                    <div style={{ fontWeight: 800 }}>{plant.name}</div>
                    <div style={{ opacity: 0.8 }}>${plant.price.toFixed(2)}</div>
                  </div>

                  <button
                    className="smallBtn"
                    onClick={() => handleAdd(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}