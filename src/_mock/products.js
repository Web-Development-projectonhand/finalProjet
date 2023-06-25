import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Vans Old Skool Green',
  'Nike Space Hippie 04',
  'Keds Beige',
  'Converse AllStar Low-Cut',
  'Nike ZoomX SuperRep Surge',
  'Zoom Freak 2',
  'Nike Air Max Zephyr',
  'Nike Zoom Goblin',
  'StanSmith',
  'Nike Waffle Racer Crater',
  'Converse Chuck Taylor High-Cut',
  'Converse Low-Cut Red',
  'Timberland Boots',
  'Puma Suede Green',
  'Nike Air Zoom Tempo NEXT%',
  'Vans Old Skool Vintage',
  'Adidas Running Women',
  'Nike Air Max 270 React ENG',
  'High Heels Royale',
  'Puma Kids Shoes',
  'Mens Leather Shoes',
  'Vans Slip On Sunflower',
  'Adidas Running Men',
  'Vans Old Skool Customize',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;
