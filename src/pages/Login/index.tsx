import { Typography } from "antd";
import React from "react";
import ButtonStyled from "../../components/ButtonStyled";
import Header from "../../components/Header";
import InputRoundPassword from "../../components/InputRoundPassword";
import InputRoundText from "../../components/InputRoundText";
import * as S from "./styles";

const Login: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.WrapperLogin>
          <S.WrapperLoginTitle>
            <Typography.Text strong>Login</Typography.Text>
            <Typography.Text className="subtitle-login">
              Hello, enter your credentials to get access to your account
            </Typography.Text>
          </S.WrapperLoginTitle>
          <S.WrapperInputs>
            <InputRoundText placeholderText="E-mail" />
            <InputRoundPassword placeholderText="Password" />
          </S.WrapperInputs>
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
