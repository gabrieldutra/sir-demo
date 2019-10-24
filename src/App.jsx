import React, { useState, useCallback } from 'react';
import { Row, Col } from 'antd';
import ControlBar from './components/ControlBar';
import Field from './components/Field';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function useSettings() {
  const [settings, setSettings] = useState({ percentageOfPigs: 0 });

  const updateSettings = useCallback((newSettings) => {
    setSettings({ ...settings, ...newSettings });
  }, [settings]);
  return [settings, updateSettings];
}

function App() {
  const [settings, updateSettings] = useSettings();
  return (
    <div className="App">
      <Row type="flex" style={{ height: '100vh' }}>
        <Col span={4}>
          <ControlBar onUpdate={updateSettings} />
        </Col>
        <Col span={20}>
          <Field {...settings} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
