function cardDataValid(cardNumber, year, month) {
  const charArray = cardNumber.split('');

  if (charArray.some((ch) => isNaN(ch))) return false;

  if (charArray.length !== 19) return false;
  if (year.length !== 2) return false;
  if (month.length !== 2) return false;
  return true;
}

export default cardDataValid;
