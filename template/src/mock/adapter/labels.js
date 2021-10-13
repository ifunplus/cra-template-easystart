import faker from 'faker';

let fakedata = {
  default: {
    id: 'default',
    topic: '默认',
    root: true,
    children: [
      {
        topic: '1',
        id: '8a67a4fe0b6bbc3b',
        direction: 0
      },
      {
        topic: '5',
        id: '8a67a5e91227ab1d',
        expanded: true,
        children: [
          {
            topic: '5-1',
            id: '8a67a61a1a681a46'
          }
        ],
        direction: 1
      },
      {
        topic: '2',
        id: '8a67a66b1bbd77e7',
        direction: 0
      },
      {
        topic: '3',
        id: '8a67a6a62a20c297',
        direction: 1
      },
      {
        topic: '3',
        id: '8a67a6d63eca73be',
        direction: 0
      }
    ],
    expanded: true
  },
  '8a67a1eb67b4f6e1': {
    id: '8a67a1eb67b4f6e1',
    topic: '病理',
    root: true,
    children: [
      {
        topic: '1',
        id: '8a67a4fe0b6bbc3b',
        direction: 0
      },
      {
        topic: '5',
        id: '8a67a5e91227ab1d',
        expanded: true,
        children: [
          {
            topic: '5-1',
            id: '8a67a61a1a681a46'
          }
        ],
        direction: 1
      },
      {
        topic: '2',
        id: '8a67a66b1bbd77e7',
        direction: 0
      },
      {
        topic: '3',
        id: '8a67a6a62a20c297',
        direction: 1
      },
      {
        topic: '3',
        id: '8a67a6d63eca73be',
        direction: 0
      }
    ],
    expanded: true
  }
};

// get list
export const getAll = () => {
  return [200, fakedata];
};

const extractIdPathParamFromUrl = (config) => {
  return config.url.split('/').pop();
};

// single get
const getItem = (config) => {
  const id = extractIdPathParamFromUrl(config);
  const country = fakedata.find((c) => c.id === id);
  return [200, country];
};
// single add
const addItem = (config) => {
  const country = JSON.parse(config.data);
  fakedata.push(country);
  return [200, country];
};
// single update
const editItem = (config) => {
  const id = extractIdPathParamFromUrl(config);
  const countryIndex = fakedata.findIndex((c) => c.id === id);
  const country = JSON.parse(config.data);
  fakedata[countryIndex] = country;
  return [200, country];
};
// single delete
const removeItem = (config) => {
  const id = extractIdPathParamFromUrl(config);
  fakedata = fakedata.filter((c) => c.id !== id);
  return [204, null];
};

const adapter = {
  getAll: () => getAll(),
  getItem: () => getItem(),
  addItem: () => addItem(),
  editItem: () => editItem(),
  removeItem: () => removeItem()
};
export default adapter;
