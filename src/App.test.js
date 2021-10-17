import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/* to run these tests within terminal do npm test */ 
test('render company name', () => {
  render(<App />);
  expect(screen.getByText('Burger Town')).toBeInTheDocument();
});

test('render headings', () => {
    render(<App />);   
    expect(screen.getByText('Choose Your Favorite')).toBeInTheDocument();
    expect(screen.getByText('Burger of the Day')).toBeInTheDocument();
  });

  test('hero heading ', () => {
    render(<App />);   
    expect(screen.getByText('Best Burgers in Philadelphia')).toBeInTheDocument();
  });

  test('hero p ', () => {
    render(<App />);   
    expect(screen.getByText('Hot and Fresh')).toBeInTheDocument();
  });

  test('hero btn ', () => {
    render(<App />);   
    expect(screen.getByText('Place Order')).toBeInTheDocument();
  });
  

