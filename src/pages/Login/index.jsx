import React from "react";
import { Button, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../validation/login";
import { Error, LoginWrapper, StyledCard } from "../../styles/Login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginWrapper>
      <StyledCard title="Login">
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item>
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Enter email"
              id="email"
              {...register("email")}
            />
            <Error>{errors.email?.message}</Error>
          </Form.Item>
          <Form.Item>
            <label htmlFor="password">Password</label>
            <Input
              placeholder="Enter email"
              id="password"
              {...register("password")}
            />
            <Error>{errors.password?.message}</Error>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </StyledCard>
    </LoginWrapper>
  );
};

export default Login;
