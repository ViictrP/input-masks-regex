const padWithZeros = (value) => {
  let s = String(value);
  let needLeadingZeros = s.length <= 3;
  if (needLeadingZeros) {
    while (s.length <= 3) {
      s = "0" + s;
    }
  } else {
    s = s.replace(/^0{0,2}/g, '');
  }
  return s;
}

const applyMask = ({ target }) => {
  const value = target.value;
  const padded = padWithZeros(value);
  const masked = padded.replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/g, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
  target.value = masked;
  const currency = parseFloat(masked.replace(/\./g, '').replace(/,/g, '.'));
  console.log(currency);
};

window.onload = () => {
  const input = document.getElementById('moneyInput');
  input.oninput = applyMask;
}
