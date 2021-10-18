const extractIdPathParamFromUrl = (config) => {
  return config.url.split('/').pop();
};
function getRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const baseAdapter = (data) => {
  const adapter = {
    getAll: () =>{
        return [200, data];
      },
    getItem: (config) => {
      const id = extractIdPathParamFromUrl(config);
      const item = data.find((c) => c.id === id);
      return [200, item];
    },
    createItem: (config) => {
      const item = JSON.parse(config.data);
      data.push(item);
      return [200, item];
    },
    updateItem: (config) => {
      const id = extractIdPathParamFromUrl(config);
      const index = data.findIndex((c) => c.id === id);
      const item = JSON.parse(config.data);
      data[index] = item;
      return [200, item];
    },
    delItem: (config) => {
      const id = extractIdPathParamFromUrl(config);
      data.filter((c) => c.id !== id);
      return [204, null];
    }
  };
  return adapter;
};

export {baseAdapter,getRandomItemFromArray,extractIdPathParamFromUrl}
export default baseAdapter