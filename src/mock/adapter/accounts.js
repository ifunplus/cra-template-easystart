import baseAdapter from '../base'

let fakedata = [
  { id: '1', account: 'zhangsan',password:"d07dd349f803821e0bfe3461d4e0fac91bc7d7c4709fb7d06471079dca80b49b", username: 'zhangsan',accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" },
  { id: '2', account: 'lisi',password:"d07dd349f803821e0bfe3461d4e0fac91bc7d7c4709fb7d06471079dca80b49b", username: 'lisi' , accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"},
];

export {fakedata}
export default baseAdapter(fakedata)