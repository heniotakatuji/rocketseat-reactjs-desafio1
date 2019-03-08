import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  const {
    children, nome, tempo, avatar,
  } = props;
  return (
    <div className="_center">
      <PostHeader nome={nome} tempo={tempo} avatar={avatar} />
      <p>{children}</p>
    </div>
  );
};

Post.defaultProps = {
  children: 'RocketBook',
};

Post.propTypes = {
  children: PropTypes.string,
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Post;
