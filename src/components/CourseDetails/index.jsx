import { Button } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ButtonWrapper,
  ModalWrapper,
  RegForm,
  Title,
  TitleLabel,
  TitleInput,
  ErrorMessage,
  DescriptionWrapper,
  SubmitButton,
  SelectCourse,
  Options,
  StyledModal,
} from "../../styles/FaqModal";
import "react-quill/dist/quill.snow.css";
import { CourseReactQuill } from "../../styles/CourseDetails";
import ReactQuill from "react-quill";

const schema = yup.object().shape({
  title: yup.string().required("This field is required"),
  courses: yup.string().required("This field is required"),
});

const CourseDetails = () => {
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

  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <ModalWrapper>
      <Button type="primary" onClick={showModal}>
        Course Details
      </Button>
      <StyledModal
        footer={null}
        title="Course Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <RegForm onSubmit={handleSubmit(onSubmitHandler)}>
          <Title>
            <TitleLabel>Title</TitleLabel>
            <TitleInput
              {...register("title")}
              placeholder="Title"
              type="text"
            />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </Title>
          <Title>
            <DescriptionWrapper>
              <TitleLabel>Description</TitleLabel>
            </DescriptionWrapper>
            <CourseReactQuill>
              <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
              />
              {/* <ErrorMessage>{errors.name?.message}</ErrorMessage> */}
            </CourseReactQuill>
          </Title>
          <Title>
            <TitleLabel>Courses</TitleLabel>
            <SelectCourse {...register("courses")}>
              <Options value="">Select a course</Options>
              <Options value="Python">Python</Options>
              <Options value="Javascript">Javascript</Options>
            </SelectCourse>
            <ErrorMessage>{errors.courses?.message}</ErrorMessage>
          </Title>
          <ButtonWrapper>
            <SubmitButton>Submit</SubmitButton>
          </ButtonWrapper>
        </RegForm>
      </StyledModal>
    </ModalWrapper>
  );
};
export default CourseDetails;
