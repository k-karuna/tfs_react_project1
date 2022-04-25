function resolveCurrencySymbol(tiker) {
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

export default resolveCurrencySymbol;
