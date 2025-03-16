import React, { Component } from 'react';
import { {{Component}}Props } from './{{Component}}.types';
import * as S from './{{Component}}.styles';

export class {{Component}} extends Component<{{Component}}Props> {
    render() {
        const { children, className } = this.props;
        
        return (
            <S.Container>
                {children}
            </S.Container>
        );
    }
}

export default {{Component}}; 