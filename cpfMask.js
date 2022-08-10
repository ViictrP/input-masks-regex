const applyCpfMask = ({ target }) => {
  const masked = target.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');

  target.value = masked;
  const withoutMask = masked.replace(/\D/g, '');
  console.log(withoutMask);
};
