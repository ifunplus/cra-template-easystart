import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
function Result500() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary">
          <Link to="/login">Back Home</Link>
        </Button>
      }
    />
  );
}

export default Result500;
