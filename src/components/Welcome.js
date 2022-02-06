import * as React from "react";

const SvgWelcome = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={485}
    height={90}
    viewBox="269.5 87 485 90"
    preserveAspectRatio="none"
    {...props}
  >
    <text
      textAnchor="middle"
      x={512}
      y={107.152}
      fontFamily="American Typewriter"
      fontWeight={400}
      fontSize={22}
      fill="#F4F4F4"
    >
      <tspan dy={0} x={512}>
        {'"Connecting Early-Stage Startups with'}
      </tspan>
      <tspan dy={29.262} x={512}>
        {'Blockchain Sophisticated Investors"'}
      </tspan>
    </text>
  </svg>
);

export default SvgWelcome;

