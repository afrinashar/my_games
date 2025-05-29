import React from 'react'

export const Div = ({style}) => {const divs = [];
  for (let i = 1; i <= 10; i++) {
    divs.push(
      <div key={i} className= {`${style}`}>
        {generateInnerDivs(i)}
      </div>
    );
  }
  return divs;
};

const generateInnerDivs = (columnIndex) => {
  const innerDivs = [];
  for (let j = 1; j <= 10; j++) {
    const value = (columnIndex - 1) * 10 + j;
    innerDivs.push(<div key={value}>{value}</div>);
  }
  return innerDivs;
}
