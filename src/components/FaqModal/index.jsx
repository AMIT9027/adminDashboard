import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {ButtonWrapper, ModalWrapper,RegForm,Title,TitleLabel,TitleInput,ErrorMessage, DescriptionWrapper, SubmitButton, Description,SelectCourse,Options, StyledModal} from "../../styles/FaqModal"


const schema = yup.object().shape({

});

const FaqModal = () => {
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
      <Button type="primary" onClick={showModal}>FAQ</Button>
      <StyledModal footer={null} title="FAQ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <RegForm onSubmit={handleSubmit(onSubmitHandler)}>
                <Title>
                    <TitleLabel>
                        Title
                    </TitleLabel>
                    <TitleInput  {...register("Title")} placeholder="Title" type="text" />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </Title>
                <Title>
            <DescriptionWrapper>
              <TitleLabel>Description</TitleLabel>
            </DescriptionWrapper>
            <Description></Description>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </Title>
            <Title>
            <TitleLabel>Select Your Course</TitleLabel>
            <SelectCourse name = "Course" {...register("mentor")}>
                    <Options disabled selected>Select a course</Options>
                    <Options value = "Python">Python</Options>
                    <Options value = "Javascript">Javascript</Options>
                </SelectCourse>
  <ErrorMessage>{errors.name?.message}</ErrorMessage>
  </Title>
            <ButtonWrapper>
              <SubmitButton>Submit</SubmitButton>
            </ButtonWrapper>
       </RegForm>
       
      </StyledModal>
      </ModalWrapper>
  );
};
export default FaqModal;