'use client';
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

function Cards() {
  const list = [
    {
      title: "Orange",
      img: "/public/logo.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/public/logo.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/public/logo.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/public/logo.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/logo.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/public/logo.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/public/logo.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/public/logo.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-4 sm:grid-cols-2">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="20%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
