import React from "react";
import Styled from 'styled-components/native';

export const AppTile = Styled.View`
    width: 250px;
    height: 250px;
    background: white;
    border-radius: 10px;
    margin: 10px;
`;

const AppIconStyle = Styled.Image`
    width: 115px;
    height: 115px;
`;

interface Props {
    uri: string;
}

export const AppIcon: React.FC<Props> = (props) => {
    return <AppIconStyle
        source={{
            uri: props.uri,
        }} />
}

export const AppLabel = Styled.Text`
    color: #333;
`;