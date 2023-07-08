import { Button, Modal } from 'antd';
import { useState } from 'react';
import {AddressLabel,Address,AddressWrapper,ButtonWrapper,RegButton,LastNameInput , LastNameLabel,FirstLastName,FirstName, LastName, ModalWrapper, NameInput, NameLabel, RegForm, ContactEmail, ContactNumber, ContactLabel, ContactInput, Email, EmailLabel, EmailInput, ErrorMessage} from '../../styles/Dashboard/Modal';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8).max(32).required("This field is required"),
  number: yup.string().required("This field is required"),
  name: yup.string().max(40).required("This field is required"),
  address : yup.string().max(100),
});

const ModalSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

 
const { register, handleSubmit, formState: { errors }, reset } = useForm({
  resolver: yupResolver(schema),
});
const onSubmitHandler = (data) => {
  console.log({ data });
  reset();
};

  return (
    <ModalWrapper>
      <Button type="primary" onClick={showModal}>
        Tap here to register
      </Button>
      <Modal footer={null} title="Add user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <RegForm onSubmit={handleSubmit(onSubmitHandler)}>
            <FirstLastName>
                <FirstName>
                    <NameLabel>
                        First name
                    </NameLabel>
                    <NameInput  {...register("name")} placeholder="name" type="text" />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </FirstName>
                <LastName>
                <LastNameLabel>
                        Last name
                    </LastNameLabel>
                    <LastNameInput  {...register("name")} placeholder="last name" type="text" />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </LastName>
            </FirstLastName>
            <ContactEmail>
                <ContactNumber>
                    <ContactLabel >Contact number</ContactLabel>
                    <ContactInput {...register("number")} placeholder="number" type="text" />
                    <ErrorMessage>{errors.number?.message}</ErrorMessage>
                </ContactNumber>
                <Email>
                    <EmailLabel>Email</EmailLabel>
                    <EmailInput {...register("email")} placeholder="email"/>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </Email>
            </ContactEmail>
            <AddressWrapper>
              <AddressLabel>Address</AddressLabel>
              <Address></Address>
            </AddressWrapper>
            <ButtonWrapper>
              <RegButton>Register</RegButton>
            </ButtonWrapper>
       </RegForm>
      </Modal>
      </ModalWrapper>
  );
};
export default ModalSection;