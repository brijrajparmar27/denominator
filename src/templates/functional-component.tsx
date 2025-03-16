import React from 'react';
import { {{Component}}Props } from './{{Component}}.types';
import * as S from './{{Component}}.styles';

export const {{Component}}: React.FC<{{Component}}Props> = ({ children }) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    );
};

export default {{Component}}; 