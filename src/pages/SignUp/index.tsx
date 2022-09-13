import { Typography, Form, Spin } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import ButtonStyled from "../../components/ButtonStyled";
import InputRoundPassword from "../../components/InputRoundPassword";
import InputRoundText from "../../components/InputRoundText";
import * as S from "./styles";
import logoImg from "../../assets/logo.svg";
import { GQL_SIGNUP } from "../../graphql/mutations/signup";

const SignUp: React.FC = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const [signup, { loading }] = useMutation(GQL_SIGNUP);

  const handleSubmit = async (values: any) => {
    const dataValues = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    await signup({
      variables: { input: dataValues },
    });

    navigate("/login");
  };
  return (
    <Spin spinning={loading}>
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

            <Form form={form} onFinish={handleSubmit}>
              <S.WrapperInputs>
                <InputRoundText placeholderText="Name" name="name" />
                <InputRoundText placeholderText="E-mail" name="email" />
                <InputRoundPassword
                  placeholderText="Password"
                  name="password"
                />
                <InputRoundPassword
                  placeholderText="Confirm password"
                  name="confirm-password"
                />
              </S.WrapperInputs>
              <S.WrapperSignInButton>
                <ButtonStyled text="Sign Up" type="submit" />
              </S.WrapperSignInButton>
            </Form>
            <S.WrapperSignIn>
              <Typography.Text>
                Already have an account? <Link to="/login">Sign In</Link>{" "}
              </Typography.Text>
            </S.WrapperSignIn>
          </S.WrapperSignUp>
        </S.Content>
      </S.Container>
    </Spin>
  );
};

export default SignUp;
