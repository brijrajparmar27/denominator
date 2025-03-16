import React from 'react';
import { render, screen } from '@testing-library/react';
import {{Component}} from './{{Component}}';

describe('{{Component}}', () => {
    it('renders without crashing', () => {
        render(<{{Component}}>Test Content</{{Component}}>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    // Add more test cases here
}); 