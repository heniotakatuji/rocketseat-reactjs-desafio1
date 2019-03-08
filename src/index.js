import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        nome: 'HENIO',
        tempo: '12 min',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihrN8CzxmPRXPtpjVhVzsch49uOevpg5-NokJ4hb-1ulbO5nIaA',
        content:
          'Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.',
      },
      {
        nome: 'Raimundo Carrilho',
        tempo: 'Ontem às 08:05',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RAHZZKTeEh8WFB6rpfQ3RjjpmsmaGUKVAWy_09ek7Xupd9LMOQ',
        content:
          'Veja como as equipas bria ajudam as empresas a atar as suas comunicações diárias as equipas bria ajudaram realmente a melhorar a nossa capacidade de comunicar quando precisamos de nos comunicar. E faz com que os telefones antigos pareçam estranhos."-Josh Loewen',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts.map(post => (
          <Post nome={post.nome} tempo={post.tempo} avatar={post.avatar}>
            {post.content}
          </Post>
        ))}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
