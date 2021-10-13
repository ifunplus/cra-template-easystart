import { useEffect } from 'react';
import { Button, notification } from 'antd';

export function useTodoNotification({ history, msg, btnText }) {
  useEffect(() => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          notification.close(key);
          history.push('/main/tasktodo');
        }}
      >
        {btnText}
      </Button>
    );
    const openNotification = (placement) => {
      notification.warning({
        message: msg,
        description: '',
        placement,
        btn,
        key,
        style: {
          top: 30
        }
      });
    };
    if (localStorage.getItem('TO_DO_WARNING') !== 'alerted') {
      openNotification('topRight');
      localStorage.setItem('TO_DO_WARNING', 'alerted');
    }
    return () => { };
  }, []);

  return {};
}
