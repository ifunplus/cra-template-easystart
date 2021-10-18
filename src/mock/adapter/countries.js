import baseAdapter from '../base'

let fakedata = [
  { id: '1', name: 'Finland', capital: 'Helsinki' },
  { id: '2', name: 'Norway', capital: 'Oslo' },
  { id: '3', name: 'Japan', capital: 'Tokyo' },
  { id: '4', name: 'Germany', capital: 'Berlin' },
  { id: '5', name: 'Russia', capital: 'Moscow' },
  { id: '6', name: 'Kenya', capital: 'Nairobi' },
  { id: '7', name: 'Sweden', capital: 'Stockholm' }
];

export default baseAdapter(fakedata)