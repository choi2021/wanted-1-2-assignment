import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import S from './styles';

const ISSUE = 'issue';

const ErrorContent = ({ text, type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <S.ContentBox>
      <img src="https://i.stack.imgur.com/Esppm.png" alt="404" />
      <h1>{text}</h1>
      {type === ISSUE ? (
        <S.Button type="button" onClick={handleClick}>
          <FaGithub />
          Issue List로 돌아가기
        </S.Button>
      ) : undefined}
    </S.ContentBox>
  );
};

export default ErrorContent;
