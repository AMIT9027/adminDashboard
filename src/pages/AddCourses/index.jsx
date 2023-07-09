import React, { Component } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Wrapper,
  FormContainer,
  Header,
  Form,
  Title,
  Author,
  Price,
  Textarea,
  Submit,
  ContentWrapper,
  Content,
  Text,
  Error,
} from "../../styles/AddCourses";
const AddCourses = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      mentor: "",
      price: "",
      discription: "",
    },
    reValidateMode: "onChange" | "onblur",
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
  };
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Header>Add Courses </Header>

          <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <ContentWrapper>
              <Content>
                <Text>Title</Text>
                <Title
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Please specify Course title",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "That's not a valid title ",
                    },
                  })}
                />
                <Error>{errors.title?.message}</Error>
              </Content>

              <Content>
                <Text>Author</Text>
                <Author
                  {...register("author", {
                    required: {
                      value: true,
                      message: "Please specify Author name",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "That's not a valid title where I come from...",
                    },
                  })}
                  name="author"
                />
                <Error>{errors.author?.message}</Error>
              </Content>

              <Content>
                <Text>Price</Text>
                <Price
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Please specify Courses Price",
                    },
                    pattern: {
                      value: /^(?!.*(,,|,\.|\.,|\.\.))[\d.,]+$/,

                      message: "please enter price as shown in format",
                    },
                  })}
                  name="price"
                />
                <Error>{errors.price?.message}</Error>
              </Content>

              <Content>
                <Text>Description</Text>
                <Textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Please specify description",
                    },
                  })}
                />
                <Error>{errors.description?.message}</Error>
              </Content>
            </ContentWrapper>
            <Submit value="Add Course" />
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default AddCourses;
