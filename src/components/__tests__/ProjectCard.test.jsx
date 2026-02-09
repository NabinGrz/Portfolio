import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

describe('ProjectCard Component', () => {
  const mockProps = {
    title: 'Test Project',
    category: 'Test Category',
    tags: ['React', 'Vite'],
    color: 'from-blue-500 to-purple-500'
  };

  test('renders project title and category', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
  });

  test('renders all tags', () => {
    render(<ProjectCard {...mockProps} />);
    
    mockProps.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});
