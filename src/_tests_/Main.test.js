/**
* @jest-enviroment jsdom
*/

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App'


describe('Testing if whole main app renders correctly', () => {
    it('Testing main app', () => {
      render(<App />);
    });
  });