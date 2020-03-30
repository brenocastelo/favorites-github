import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  margin: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #7159c1;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background-color: #eee;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  margin-left: 10px;
  border-radius: 4px;
  background-color: #7159c1;
  opacity: ${({ loading }) => (loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background: #fff;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 10px;
`;

export const Bio = styled.Text`
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #999;
  margin-top: 5px;
`;
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
