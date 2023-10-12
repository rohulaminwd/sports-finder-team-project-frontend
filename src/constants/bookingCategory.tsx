import { FaBasketballBall } from 'react-icons/fa';
import { IoMdFootball } from 'react-icons/io';
import { MdGolfCourse, MdSportsCricket, MdSportsHockey, MdSportsTennis } from 'react-icons/md';

export const bookingCategory = [
    {
      label: "Football",
      value: <IoMdFootball/>,
    },
    {
      label: "Cricket",
      value: <MdSportsCricket/>,
    },
    {
      label: "Tennis",
      value: <MdSportsTennis/>,
    },
    {
      label: "Basket",
      value: <FaBasketballBall/>,
    },
    {
      label: "Hockey",
      value: <MdSportsHockey/>,
    },
    {
      label: "Golf",
      value: <MdGolfCourse/>,
    },
  ];