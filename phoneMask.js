const applyPhoneMask = ({ target }) => {
  const masked = target.value
    .replace(/\D/g, '')
    .replace(/(^\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1');

  target.value = masked;
  const withoutMask = masked.replace(/\D/g, '');
  console.log(withoutMask);
};
