export const StatusCode = {
  1000: 'OK',
  1201: 'USER_ALREADY_EXISTS',
  1202: 'USER_NOT_FOUND',
  1203: 'USERNAME_OR_PASSWORD_ERROR',
  1204: 'GROUP_NOT_FOUND',
  1205: 'IMAGE_ALREADY_EXISTS_IN_TASK',
  1206: 'IMAGE_NOT_EXISTS',
  1207: 'TAG_NOT_EXISTS',
  1208: "TASK_NOT_EXISTS",
  1209: 'INVALID_USER_GROUP',
  1217: 'ACCOUNT_NOT_FOUND',
  1220: "IMAGE_NOT_FOUND",
  1225: 'DUPLICATE_TAB_NAME',
  1226: 'DUPLICATE_GROUP_NAME',
  1232: 'PASSWORD_INCORRECT',
  1101: 'INVALID_ID',
  1301: 'ADMIN_NEED_NOT_RECEIVE_TASK'
};

export class StatusCodeError extends Error {
  constructor({ statusCode, message }) {
    super(message);
    this.name = 'StatusCodeError';
    this.statusCode = statusCode;
  }
}
