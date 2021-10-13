import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
function Result403() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary">
          <Link to="/login">Back Home</Link>
        </Button>
      }
    />
  );
}

export default Result403;
