import React from "react";
import {
  AddCoursesForm,
  AddCoursesWrapper,
  Description,
  Heading,
  HeadingWrapper,
  NameInput,
  NameLabel,
  NameWrapper,
  Options,
  PriceMentorWrapper,
  PriceWrapper,
  SelectMentor,
  Submit,
} from "../../styles/AddCourses";
import { ErrorMessage } from "../../styles/Dashboard/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card } from "antd";

const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  description: yup.string().max(100).required("This field is required"),
  price: yup.string().required("This field is required"),
  mentor: yup.string().required("This field is required"),
  startDate: yup.string().required("This field is required"),
  EndDate: yup.string().required("This field is required"),
});

const AddCourses = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <AddCoursesWrapper>
      <Card title="Add Courses">
        <AddCoursesForm onSubmit={handleSubmit(onSubmitHandler)}>
          <NameWrapper>
            <NameLabel>Name</NameLabel>
            <NameInput
              {...register("name")}
              type="text"
              placeholder="Enter your name"
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </NameWrapper>
          <NameWrapper>
            <NameLabel>Description</NameLabel>
            <Description {...register("description")}></Description>
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </NameWrapper>
          <PriceMentorWrapper>
            <PriceWrapper>
              <NameLabel>Price</NameLabel>
              <NameInput
                {...register("price")}
                type="text"
                placeholder="Price"
              />
              <ErrorMessage>{errors.price?.message}</ErrorMessage>
            </PriceWrapper>
            <PriceWrapper>
              <NameLabel>Mentor</NameLabel>
              <SelectMentor name="mentors" {...register("mentor")}>
                <Options disabled selected>
                  Select mentor
                </Options>
                <Options>Shreyash</Options>
                <Options>Jitesh</Options>
              </SelectMentor>
              <ErrorMessage>{errors.mentor?.message}</ErrorMessage>
            </PriceWrapper>
          </PriceMentorWrapper>
          <PriceMentorWrapper>
            <PriceWrapper>
              <NameLabel>Start date</NameLabel>
              <NameInput {...register("startDate")} type="date" />
              <ErrorMessage>{errors.startDate?.message}</ErrorMessage>
            </PriceWrapper>
            <PriceWrapper>
              <NameLabel>End date</NameLabel>
              <NameInput {...register("EndDate")} type="date" />
              <ErrorMessage>{errors.EndDate?.message}</ErrorMessage>
            </PriceWrapper>
          </PriceMentorWrapper>
          <HeadingWrapper>
            <Submit>Submit</Submit>
          </HeadingWrapper>
        </AddCoursesForm>
      </Card>
    </AddCoursesWrapper>
  );
};

export default AddCourses;
