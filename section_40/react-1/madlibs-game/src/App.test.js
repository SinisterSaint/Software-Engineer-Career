import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('test to see if it renders welcome message', () => {
    render(<App />);
    const welcomeMsg = screen.getByText(/Welcome to the Madlibs Game/i);
    expect(welcomeMsg).toBeInTheDocument();
  });

  test('The form is initially rendered', () => {
    render(<App />);
    const formComponent = screen.getByRole('textbox');
    expect(formComponent).toBeInTheDocument();
  });

  test('form is submitted and story component is rendered', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton); // Simulate form submission

    const storyComponent = screen.getByTestId('story-component');
    expect(storyComponent).toBeInTheDocument();
  });
});







