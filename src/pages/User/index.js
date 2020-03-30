import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  Infos,
  OwnerAvatar,
  Title,
  Author,
} from './styles';

import api from '../../services/api';

class User extends Component {
  // para que a propriedaade  estática navigationOptions tenha acesso ao this e as props
  // devemostra tranformá-la em uma função que retorna um objeto
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    page: 1,
    loading: false,
    refreshing: false,
    hasScroll: false,
  };

  componentDidMount() {
    this.loadStars();
  }

  handleNavigate = (name, url) => {
    const { navigation } = this.props;

    navigation.navigate('Repository', { name, url });
  };

  loadStars = async (page = 1) => {
    const { navigation } = this.props;
    const { stars } = this.state;
    const user = navigation.getParam('user');

    this.setState({ loading: true });

    const response =
      (await api.get(`/users/${user.login}/starred?page=${page}`)) || [];

    this.setState({
      stars: [...stars, ...response.data],
      loading: false,
      page,
      refreshing: false,
    });
  };

  loadMore = async () => {
    const { page, loading, hasScroll } = this.state;
    const nextPage = page + 1;
    if (loading || !hasScroll) return;

    this.loadStars(nextPage);
  };

  renderLoading = () => {
    const { loading } = this.state;

    if (!loading) return null;

    return <ActivityIndicator />;
  };

  refreshList = () => {
    this.setState({ stars: [], refreshing: true }, () => this.loadStars());
  };

  render() {
    const { navigation } = this.props;
    const { stars, refreshing } = this.state;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar_url }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          onMomentumScrollBegin={() => this.setState({ hasScroll: true })}
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Starred
              onPress={() => this.handleNavigate(item.name, item.html_url)}
            >
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Infos>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Infos>
            </Starred>
          )}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
          onRefresh={this.refreshList}
          refreshing={refreshing}
          ListFooterComponent={this.renderLoading}
        />
      </Container>
    );
  }
}

export default User;
