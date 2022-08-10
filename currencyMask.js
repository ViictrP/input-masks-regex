const applyCurrencyMask = ({ target }) => {
  const value = target.value;
  const masked = value
    .replace(/\D/g, '')
    .padStart(4, '0')
    .replace(/(\d)(\d{2})$/g, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
    .replace(/^0/, '');

  target.value = masked;
  const currency = parseFloat(masked.replace(/\./g, '').replace(/,/g, '.'));
  console.log(currency);
};
