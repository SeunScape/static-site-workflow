import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';

describe('LandingPage Component', () => {
  test('renders main heading', () => {
    render(<LandingPage />);
    const heading = screen.getByText(/Welcome to My CI\/CD Demo/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders all three feature cards', () => {
    render(<LandingPage />);
    const automatedDeployment = screen.getByText(/Automated Deployment/i);
    const codeQuality = screen.getByText(/Code Quality/i);
    const testing = screen.getByText(/Testing/i);
    
    expect(automatedDeployment).toBeInTheDocument();
    expect(codeQuality).toBeInTheDocument();
    expect(testing).toBeInTheDocument();
  });

  test('renders CTA button', () => {
    render(<LandingPage />);
    const button = screen.getByText(/Get Started/i);
    expect(button).toBeInTheDocument();
  });
});