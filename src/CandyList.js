import React from 'react';
import CandyCard from './CandyCard';

function CandyList() {
  const candies = [
    {
      name: "Plain Milk",
      calories: 110,
      description: "Smooth milk chocolate",
      ingredients: "cocoa butter, milk, sugar",
      image:"/images/plain_milk.jpg"
    },
    {
      name: "Plain Dark",
      calories: 100,
      description: "Smooth dark chocolate",
      ingredients: "cocoa butter, milk, sugar",
      image:"/images/plain_dark.jpg"
    },
    {
      name: "Plain Hybrid",
      calories: 105,
      description: "Smooth milk chocolate and dark chocolate side by side",
      ingredients: "cocoa butter, milk, sugar",
      image:"/images/plain_hybrid.jpg"
    },
    {
      name: "Nut Butter Cup",
      calories: 130,
      description: "Smooth milk chocolate, peanut butter filling",
      ingredients: "cocoa butter, milk, sugar",
      image:"/images/nutter_butter.jpg"
    },
    {
      name: "Bailey's Cup",
      calories: 90,
      description: "Smooth milk chocolate with Bailey's Irish Cream filling",
      ingredients: "cocoa butter, milk, sugar, Bailey's Cream filling",
      image:"/images/baileys_cup.jpg"
    },
    {
      name: "Rum",
      calories: 110,
      description: "Smooth dark chocolate with rum-coconut filling",
      ingredients: "cocoa butter, milk, sugar, rum, coconut",
      image:"/images/rum_barrel.jpg"
    },
    {
      name: "Orange Fondant",
      calories: 125,
      description: "Dark chocolate with orange fondant filling",
      ingredients: "cocoa butter, milk, sugar, orange cream, orange zest",
      image:"/images/orange_fondant.jpg"
    },
    {
      name: "Cappuccino Cup",
      calories: 130,
      description: "Dark chocolate with coffee cream filling",
      ingredients: "cocoa butter, milk, sugar, coffee-vanilla cream, grated coffee beans",
      image:"/images/cappuccino_cup.jpg"
    },
    {
      name: "Pistachio Diamond",
      calories: 140,
      description: "Milk chocolate, almond butter filling, large pistachio",
      ingredients: "cocoa butter, milk, sugar, nut butter, pistachio",
      image:"/images/pistachio_diamond.jpg"
    },
    {
      name: "Toffee Crunch",
      calories: 130,
      description: "Dark chocolate, soft toffee filling, rock salt and peanut brittle",
      ingredients: "cocoa butter, milk, sugar, toffee, salt, toffee brittle",
      image:"/images/toffee_crunch.jpg"
    }
  ];

  return (
    <div className="candy-list">
      {candies.map((candy, index) => (
        <CandyCard key={index} candy={candy} />
      ))}
    </div>
  );
}

export default CandyList;
