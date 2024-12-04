import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/cupang.jpg") center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 2;
`;
const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & > img {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
`;
const StyledInput = styled.input`
  width: 550px;
  height: 80px;
  padding-left: 20px;
  background: #181a21;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
const CheckBoxWrapper = styled.div`
  margin-left: 6px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  & > label {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
`;
const CheckBox = styled.input`
  width: 15px;
  height: 15px;
`;

const FindId = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: end;
  width: 100%;
  margin-bottom: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const Join = styled.div`
  margin-top: 28px;
  color: #fff;
  font-size: 20px;
  font-weight: normal;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
type LoginProps = {
  onLogin: (isAuthenticated: boolean) => void;
};

const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/"); // 메인 페이지로 이동
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleLogin}>
        <Logo onClick={handleLogo}>
          <img src="/logo.png" alt="logo" />
        </Logo>
        <Title>로그인</Title>
        <StyledInput
          type="text"
          placeholder="이메일 주소 또는 아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          required
        />
        <CheckBoxWrapper>
          <CheckBox type="checkbox" id="remember" />
          <label htmlFor="remember">로그인 정보 저장</label>
        </CheckBoxWrapper>
        <FindId>아이디, 비밀번호 찾기 &gt;</FindId>
        <Button type="submit">로그인</Button>
        <Join>
          viva회원이 아닌가요? <b>지금 가입하세요.</b>
        </Join>
      </Form>
    </Wrapper>
  );
};

export default Login;
