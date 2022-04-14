import React from 'react';

function resolveCurrency(tiker) {
  switch (tiker) {
    case 'RUB':
      return '₽';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    case 'USD':
      return '$';
  }
}

const Money: React.FC<any> = ({ value, currency }) => {
  const intValue = Math.trunc(value);
  const decimalValue = value - intValue;
  return (
    <span>
      <span>{intValue}</span>
      {decimalValue !== 0 && (
        <span>
          {decimalValue.toPrecision(2).replace('.', ',').substring(1)}
        </span>
      )}
      {currency && <span>{resolveCurrency(currency)}</span>}
    </span>
  );
};

export default Money;
