import React, { useEffect, useState } from 'react';
import { Table,Button } from 'antd';
import { mock_getUsers,mock_createUser,mock_delUser } from '../../mock/apiMock';
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: 'account',
    dataIndex: 'account',
  },
  {
    title: 'mobileNumber',
    dataIndex: 'mobileNumber',
  },
  {
    title: 'gender',
    dataIndex: 'gender',
  },
  {
    title: 'department',
    dataIndex: 'department',
  },
  {
    title: 'organization',
    dataIndex: 'organization',
  },
  {
    title: 'lastOnline',
    dataIndex: 'lastOnline',
  }
];

function index() {
  let [data, setData] = useState([]);
  let [id, setId] = useState(51);
  const fetchData = ()=>{
    mock_getUsers().then((res) => {
        console.log('.........', res.data);
        setData(res.data);
      });
  }
  useEffect(() => {
    fetchData()
    return;
  }, []);

  const addData = ()=>{
    mock_createUser({
        id: id,
        account: 'zhangsan',
        name: 'zhangsan',
        accountState: 1,
        lastOnline: '2021-10-12T20:38:57.778Z',
        organization: '组织三',
        department: '部门一',
        mobileNumber: '1234567890',
    }).then(res=>{
        let newData = [...data,res.data]
        console.log('.........添加成功');
        setId(++id)
        setData(newData);
    })
  }

  const delData = ()=>{
    let delId = --id
    mock_delUser(delId).then(res=>{
        let newData = [...data].filter((c) => c.id !== delId);
        setId(delId)
        console.log('.........删除成功', delId);
        setData(newData);
    })
  }

  return (
    <div>
      <h1>借助axios-mock-adapter构建模拟数据</h1>
      <p><Button onClick={addData} type="primary">添加数据+</Button> <Button onClick={delData} type="dashed">删除数据-</Button></p>
      <Table rowKey={record => record.id} columns={columns} dataSource={data} />
    </div>
  );
}

export default index;
