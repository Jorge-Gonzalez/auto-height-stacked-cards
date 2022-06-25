import * as React from 'react';
import './style.css';
import { data } from './data'
import StackGrid from './components/stack-grid'

export default function App() {
  return (
    <StackGrid cards={data} />
  );
}
