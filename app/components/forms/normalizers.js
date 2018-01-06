// code from github
// https://github.com/erikras/redux-form/issues/1218
export const onlyDecimal = (value) => {
  value = value.replace(/[^0-9.]/g, '');
  const sections = value.split('.');

  // Remove any leading 0s apart from single 0
  if (sections[0] !== '0' && sections[0] !== '00') {
    sections[0] = sections[0].replace(/^0+/, '');
  } else {
    sections[0] = '0';
  }
  if (sections[0].length > 3) {
    sections[0] = sections[0].slice(0, 3);
  }
  // If numbers exist after first .
  if (sections[1]) {
    // Join first two sections and truncate end section to length 2
    return sections[0] + '.' + sections[1].slice(0, 2);
  // If original value had a decimal place at the end, add it back
  } else if (value.indexOf('.') !== -1) {
    return sections[0] + '.';
  // Otherwise, return only section
  } else {
    return sections[0];
  }
}
