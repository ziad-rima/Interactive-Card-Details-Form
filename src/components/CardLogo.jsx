import * as React from "react";
const CardLogo = (props) => (
  <svg
    width={84}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={27.478} cy={22.5} rx={19.478} ry={19.5} fill="#fff" />
    <path
      d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
      stroke="#fff"
    />
  </svg>
);
export default CardLogo;
