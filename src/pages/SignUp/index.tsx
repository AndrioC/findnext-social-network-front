import { Typography } from "antd";
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
            <InputRoundText placeholderText="Name" name="name" />
            <InputRoundText placeholderText="E-mail" name="email" />
            <InputRoundPassword placeholderText="Password" name="password" />
            <InputRoundPassword
              placeholderText="Confirm password"
              name="confirm-password"
            />
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
