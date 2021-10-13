let fakedata = [
  { id: '1', name: 'Finland', capital: 'Helsinki' },
  { id: '2', name: 'Norway', capital: 'Oslo' },
  { id: '3', name: 'Japan', capital: 'Tokyo' },
  { id: '4', name: 'Germany', capital: 'Berlin' },
  { id: '5', name: 'Russia', capital: 'Moscow' },
  { id: '6', name: 'Kenya', capital: 'Nairobi' },
  { id: '7', name: 'Sweden', capital: 'Stockholm' }
];

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
