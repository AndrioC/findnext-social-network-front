import { Space, Typography } from "antd";
import React from "react";
import ButtonStyled from "../../components/ButtonStyled";
import InputRoundPassword from "../../components/InputRoundPassword";
import InputRoundText from "../../components/InputRoundText";
import * as S from "./styles";
import logoImg from "../../assets/logo.svg";

const SignUp: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="FindNext" />
      </S.Header>
      <S.Content>
        <S.WrapperSignUp>
          <S.WrapperSignUpTitle>
            <Typography.Text strong>Sign Up</Typography.Text>
            <Typography.Text className="subtitle-signup">
              Hi, create your account and start planning your next adventure
            </Typography.Text>
          </S.WrapperSignUpTitle>
          <S.WrapperInputs>
            <Space
              size={6}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <InputRoundText placeholderText="Name" />
              <InputRoundText placeholderText="E-mail" />
              <InputRoundPassword placeholderText="Password" />
              <InputRoundPassword placeholderText="Confirm password" />
            </Space>
          </S.WrapperInputs>
          <S.WrapperSignInButton>
            <ButtonStyled text="Sign In" />
          </S.WrapperSignInButton>
          <S.WrapperSignIn>
            <Typography.Text>
              Already have an account? <a href="www.google.com">Sign In</a>{" "}
            </Typography.Text>
          </S.WrapperSignIn>
        </S.WrapperSignUp>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
