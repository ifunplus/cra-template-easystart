const config = {
  nonce: '20170210', // sha256加密随机数
  version: 'IRCP 2.0.0.200512 ',
  textAreaMaxLength: 400,
  inputMaxLength: 20,
  defaultCancerType: 'cervical',
  // imageListColumns: require('./static/defaultImageListColumns').default
};
Object.assign(config, window.config);

export default config;
