import React from 'react';
import { Paper } from './tools/components';
import Login from './tools/components/modules/Login';

export default function App() {
  return (
    <div>
      <h3>Test page</h3>
      <Paper>
        <div>This is Paper component</div>
      </Paper>
      <Paper>
        <Login />
      </Paper>
    </div>
  );
}
