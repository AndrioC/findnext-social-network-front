import { useMutation } from "@apollo/client";
import { Typography, Form, Spin } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyled from "../../components/ButtonStyled";
import Header from "../../components/Header";
import InputRoundPassword from "../../components/InputRoundPassword";
import InputRoundText from "../../components/InputRoundText";
import { GQL_LOGIN } from "../../graphql/mutations/auth";
import { useAuth } from "../../hooks/auth";
import * as S from "./styles";

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [signin, { loading }] = useMutation(GQL_LOGIN);
  const { login } = useAuth();

  const handleSubmit = async (values: any) => {
    const dataValues = {
      email: values.email,
      password: values.password,
    };

    const signinUser = await signin({
      variables: { input: dataValues },
    });

    login(signinUser.data.signin);

    navigate("/home");
  };

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
          <Form form={form} onFinish={handleSubmit}>
            <S.WrapperInputs>
              <InputRoundText placeholderText="E-mail" name="email" />
              <InputRoundPassword placeholderText="Password" name="password" />
            </S.WrapperInputs>
            <S.WrapperSignInButton>
              <Spin spinning={loading}>
                <ButtonStyled text="Sign In" type="submit" />
              </Spin>
            </S.WrapperSignInButton>
          </Form>
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
