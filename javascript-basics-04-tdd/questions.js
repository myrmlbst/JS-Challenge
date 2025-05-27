
const stringSize = (text) => {
  if (typeof text !== 'string') {
    throw new Error('Input must be a string');
  }
  return text.length;
}

const replaceCharacterE = (text) => {
  return text.replace('e', ' ');
}

const concatString = (text1, text2) => {
  return text1.concat(text2);
}

const showChar5 = (text) => {
  return text.charAt(4);
}

const showChar9 = (text) => {
  return text.slice(0, 9);
}

const toCapitals = (text) => {
  return text.toUpperCase();
}

const toLowerCase = (text) => {
  return text.toLowerCase();
}

const removeSpaces = (text) => {
  return text.trim();
}

const IsString = (text) => {
  return typeof text === 'string';
}

const getExtension = (text) => {
  const parts = text.split('.');
  return parts.length > 1 ? parts.pop() : '';
}

const countSpaces = (text) => {
  return (text.match(/ /g) || []).length;
}

const InverseString = (text) => {
  return text.split('').reverse().join('');
}

const power = (x, y) => {
  return Math.pow(x, y);
}

const absoluteValue = (num) => {
  return Math.abs(num);
}

const absoluteValueArray = (array) => {
  return array.map(num => Math.abs(num));
}

const circleSurface = (radius) => {
  return Math.round(Math.PI * Math.pow(radius, 2));
}

const hypothenuse = (ab, ac) => {
  return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}

const BMI = (weight, height) => {
  let value = weight / Math.pow(height, 2);
  return Math.round(value * 100) / 100;
}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}