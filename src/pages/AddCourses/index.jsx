import React, { useState } from "react";
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
import { Card, Select, Space } from "antd";

const { Option } = Select;

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
  startDate: yup.string().required("Start date is required"),
  EndDate: yup.string().required("End date is required"),
});

const AddCourses = () => {
  const [selectedMentor, setSelectedMentor] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log({ ...data, mentor: selectedMentor });
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
            {errors && errors.name && (
              <ErrorMessage>{errors.name.message}</ErrorMessage>
            )}
          </NameWrapper>
          <NameWrapper>
            <NameLabel>Description</NameLabel>
            <Description {...register("description")}></Description>
            {errors && errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </NameWrapper>
          <PriceMentorWrapper>
            <PriceWrapper>
              <NameLabel>Price</NameLabel>
              <NameInput
                {...register("price")}
                type="text"
                placeholder="Price"
              />
              {errors && errors.price && (
                <ErrorMessage>{errors.price.message}</ErrorMessage>
              )}
            </PriceWrapper>
            <PriceWrapper>
              <NameLabel>Mentor</NameLabel>
              <Select
                mode="multiple"
                style={{
                  width: "100%",
                }}
                placeholder="Select your mentor"
                onChange={(data) => setSelectedMentor(data)}
                optionLabelProp="label"
              >
                <Option value="Mentor 1" label="Mentor 1">
                  <Space>Mentor 1</Space>
                </Option>
                <Option value="Mentor 2" label="Mentor 2">
                  <Space>Mentor 2</Space>
                </Option>
                <Option value="Mentor 3" label="Mentor 3">
                  <Space>Mentor 3</Space>
                </Option>
                <Option value="Mentor 4" label="Mentor 4">
                  <Space>Mentor 4</Space>
                </Option>
              </Select>
            </PriceWrapper>
          </PriceMentorWrapper>
          <PriceMentorWrapper>
            <PriceWrapper>
              <NameLabel>Start date</NameLabel>
              <NameInput {...register("startDate")} type="date" />
              {errors && errors.startDate && (
                <ErrorMessage>{errors.startDate.message}</ErrorMessage>
              )}
            </PriceWrapper>
            <PriceWrapper>
              <NameLabel>End date</NameLabel>
              <NameInput {...register("EndDate")} type="date" />
              {errors && errors.EndDate && (
                <ErrorMessage>{errors.EndDate.message}</ErrorMessage>
              )}
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
