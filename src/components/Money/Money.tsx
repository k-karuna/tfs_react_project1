import React from 'react';
import resolveCurrencySymbol from '../../utils/resolveCurrencySymbol';

const Money: React.FC<any> = ({ value, currency }) => {
  const intValue = Math.trunc(value);
  const decimalValue = value - intValue;
  const shortenedValue = decimalValue
    .toPrecision(2)
    .replace('.', ',')
    .substring(1);
  return (
    <span>
      <span>{intValue}</span>
      {decimalValue !== 0 && <span>{shortenedValue}</span>}
      {currency && <span>{resolveCurrencySymbol(currency)}</span>}
    </span>
  );
};

export default Money;
