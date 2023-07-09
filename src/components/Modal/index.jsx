import { Button, Modal } from "antd";
import { useState } from "react";
import {
  AddressLabel,
  Address,
  AddressWrapper,
  ButtonWrapper,
  RegButton,
  LastNameInput,
  LastNameLabel,
  FirstLastName,
  FirstName,
  LastName,
  ModalWrapper,
  NameInput,
  NameLabel,
  RegForm,
  ContactEmail,
  ContactNumber,
  ContactLabel,
  ContactInput,
  Email,
  EmailLabel,
  EmailInput,
  ErrorMessage,
  PasswordInput,
  PasswordLabel,
  Password,
} from "../../styles/Dashboard/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8).max(32).required("This field is required"),
  number: yup.string().required("This field is required"),
  name: yup.string().max(40).required("This field is required"),
  address: yup.string().max(100),
});

const ModalSection = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
    // <ModalWrapper>
    <Modal
      footer={null}
      title="User details"
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <RegForm onSubmit={handleSubmit(onSubmitHandler)}>
        <FirstLastName>
          <FirstName>
            <NameLabel>Full name</NameLabel>
            <NameInput
              {...register("name")}
              placeholder="Enter fullname"
              type="text"
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </FirstName>
        </FirstLastName>
        <ContactEmail>
          <ContactNumber>
            <ContactLabel>Phone no.</ContactLabel>
            <ContactInput
              {...register("number")}
              placeholder="Enter phone no."
              type="text"
            />
            <ErrorMessage>{errors.number?.message}</ErrorMessage>
          </ContactNumber>
          <Email>
            <EmailLabel>Email</EmailLabel>
            <EmailInput {...register("email")} placeholder="Enter email" />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </Email>
        </ContactEmail>
        <Password>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput
            {...register("password")}
            placeholder="Enter password"
          />
        </Password>

        <ButtonWrapper>
          <RegButton>Submit</RegButton>
        </ButtonWrapper>
      </RegForm>
    </Modal>
    // </ModalWrapper>
  );
};
export default ModalSection;
