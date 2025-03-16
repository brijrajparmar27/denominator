import React from 'react';
import { {{Component}}Props } from './{{Component}}.types';

export const {{Component}}: React.FC<{{Component}}Props> = ({ children, className }) => {
    return (
        <div className={`root-{{Component}} ${className || ''}`}>
            {children}
        </div>
    );
};

export default {{Component}}; 