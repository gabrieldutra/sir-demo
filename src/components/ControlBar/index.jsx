import React from 'react';
import { Menu, Form, Slider, Input } from 'antd';

function ControlBar({ onUpdate }) {
  return (
    <Menu style={{ height: '100vh', padding: '10px' }}>
      <div className="p-10">
        <Form>
          <Form.Item label="% of pigs">
            <Slider tipFormatter={v => `${v}%`} onChange={v => onUpdate({ percentageOfPigs: v })} />
          </Form.Item>
        </Form>
        <Input placeholder="Test input" />
      </div>
    </Menu>
  );
}

export default ControlBar;
