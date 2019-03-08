import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { nome, tempo, avatar } = props;
  return (
    <div id="PostHeader" className="_PostHeader">
      <div id="conteudo-left">
        <img className="img" src={avatar} alt="" aria-label={nome} role="img" />
      </div>
      <div id="conteudo-right">
        <p>
          <strong>{nome}</strong>
          {' '}
          <br />
          {' '}
          <span className="_tempo">{tempo}</span>
        </p>
      </div>
    </div>
  );
};

PostHeader.defaultProps = {};

PostHeader.propTypes = {
  nome: PropTypes.string.isRequired,
  tempo: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostHeader;
