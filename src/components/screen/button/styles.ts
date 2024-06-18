import { TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    width: 200px;
    align-items: center;
    backgroundColor: rgb(247,127,39);
    border-radius: 15px;
    padding: 15px;
    margin-top: 30px;
`;

export const Title = styled.Text`
    font-size: 16px;
    color: white;
`;

