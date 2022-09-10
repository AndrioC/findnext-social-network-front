import { Space, Typography } from "antd";
import React from "react";
import ButtonStyled from "../../components/ButtonStyled";
import InputRoundPassword from "../../components/InputRoundPassword";
import InputRoundText from "../../components/InputRoundText";
import * as S from "./styles";
import logoImg from "../../assets/logo.svg";

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="FindNext" />
      </S.Header>
      <S.Content>
        <S.WrapperLogin>
          <S.WrapperLoginTitle>
            <Typography.Text strong>Login</Typography.Text>
            <Typography.Text className="subtitle-login">
              Hello, enter your credentials to get access to your account
            </Typography.Text>
          </S.WrapperLoginTitle>
          <Space size={27} style={{ display: "flex", flexDirection: "column" }}>
            <InputRoundText placeholderText="E-mail" />
            <InputRoundPassword placeholderText="Password" />
          </Space>
          <S.WrapperSignInButton>
            <ButtonStyled text="Sign In" />
          </S.WrapperSignInButton>
          <S.WrapperSignUp>
            <Typography.Text>
              Don&apos;t have an account?{" "}
              <a href="www.google.com">Create now</a>{" "}
            </Typography.Text>
          </S.WrapperSignUp>
        </S.WrapperLogin>
      </S.Content>
    </S.Container>
  );
};

export default Login;
