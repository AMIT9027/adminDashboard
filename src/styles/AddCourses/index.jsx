import styled from "styled-components";

export const AddCoursesWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddCoursesForm = styled.form`
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
`;
export const Heading = styled.h2`
  color: black;
  line-height: 1;
`;
export const NameWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NameLabel = styled.label``;
export const NameInput = styled.input`
  padding: 8px;
  background-color: white;
  border: 1px solid lightGrey;
  outline: none;
`;
export const Description = styled.textarea`
  padding: 8px;
  min-height: 80px;
  background-color: white;
  border: 1px solid lightGrey;
  outline: none;
`;

export const PriceMentorWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
export const PriceWrapper = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SelectMentor = styled.select`
  background-color: white;
  border: 1px solid lightGrey;
  min-height: 33px;
  outline: none;
  cursor: pointer;
`;
export const Options = styled.option``;

export const Submit = styled.button`
  width: 400px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid green;
  background-color: green;
  color: white;
  cursor: pointer;
`;
