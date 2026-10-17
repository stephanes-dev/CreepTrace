// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CreepTrace title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CreepTrace/i);
    expect(titleElement).toBeInTheDocument();
});
