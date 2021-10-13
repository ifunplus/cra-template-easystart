/**
 *服务器返回状态码，对应的中文表示含义
 * @type {Map<any, any>}
 */
export const CODE_MESSAGE = new Map([
  [404, '找不到服务'],
  [403, '未授权'],
  [400, '错误请求'],
  [401, '未授权']
]);

export const CODE_MESSAGE_OBJ = {
  1100: '参数错误',
  1101: '无效参数',
  1102: '无效操作',
  1103: '密码错误',
  1104: '账号不存在',
  1105: '文件解析失败',
  1106: '账号已存在',
  1108: '邮箱还没验证',
  1109: '信息缺失',
  1110: '上传失败',
  1111: '邮箱发送失败',
  1112: '自动登录失败',
  1113: '账户已禁止',
  1114: '请核实验证码',
  1115: '账户不存在',
  1118: '用户被锁定',
  1200: '拒绝访问',
  1201: '超过最大数量',
  1202: '无效邮箱',
  1203: 'token过期',
  1204: '无效token',
  1301: '多序列',
  1302: '模态不支持',
  1300: '无效操作',
  1400: '添加结节失败',
  1401: '保存图片失败',
  1402: '更新结节失败',
  1404: '未勾选结节',
  1405: '未找到此序列的DICOM影像，可能已被清理',
  1601: ''
};

export const CODE_MESSAGE_OBJ_EN = {
  1100: 'BAD PARAMETERS',
  1101: 'INVALID PARAMETERS',
  1102: 'INVALID OPERATION',
  1103: 'INVALID PASSWORD',
  1104: 'INVALID ACCOUNT',
  1105: 'INVALID FILE',
  1106: 'USER EXIST',
  1108: 'EMAIL IS NOT CONFIRMED',
  1109: 'REQUIRED INFO MISSING',
  1110: 'UPSTREAM ERROR',
  1111: 'SEND EMAIL ERROR',
  1112: 'AUTO LOGIN ERROR',
  1113: 'PROHIBIT ACCOUNT',
  1114: 'CAPTCHA NOT MATCHED ',
  1115: 'INVALID CONTACT',
  1118: 'USER IS LOCKED',
  1200: 'ACCESS DENIED',
  1201: 'OVER MAX NUMS',
  1202: 'INVALID EMAIL',
  1203: 'TOKEN TIMEOUT',
  1204: 'INVALID TOKEN',
  1301: 'MULTI SERIES',
  1302: 'MODALITY NOT SUPPORTED',
  1300: 'INVALID OPERATION',
  1400: 'ADD NODULE ERROR',
  1401: 'SAVE PNG ERROR',
  1402: 'UPDATE NODULE ERROR',
  1404: 'NOT SELECT NODULE',
  1405: 'NOT FOUND DICOM FILE',
  1601: ''
};
