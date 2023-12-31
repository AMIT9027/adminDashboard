import styled from "styled-components"
import {Modal} from "antd"

export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 1250px;
    display: flex;
    align-items: center;
    justify-content: center;

   
`
export const StyledModal = styled(Modal)`
    .ant-header-title{
    border-bottom: 1px solid gray;
    border-radius: 10px;
    padding: 5px;
    background-color: red;
    }
`

export const RegForm = styled.form`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap:10px;
    @media (max-width:426px)
    {
        
        flex-direction:column;
    }
`

export const Title = styled.div`
    width:100%;
    max-width: 400px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
export const TitleLabel = styled.label`
font-weight:bold;
font-size: 16px;
`

export const TitleInput = styled.input`
    padding: 10px;
    border-radius: 10px;
    border:1px solid grey;
    width: 100%;
    max-width: 400px;
    outline: none;
`

export const DescriptionWrapper = styled.div`
    width:100%;
    max-width:400px;
    display:flex;
    flex-direction: column;
    gap:7px;
`



export const ButtonWrapper = styled.div`
    width:100%;
    max-width:500px;
    display:flex;
    justify-content:center;
    align-items: center;
`

export const SelectCourse = styled.select`
 padding: 10px;
    border-radius: 10px;
    border:1px solid grey;
    width: 100%;
    max-width: 400px;
    cursor: pointer;
    outline: none   ;
`
export const Options = styled.option`
   
`

export const SubmitButton = styled.button`
width:100%;
max-width:400px;    
padding:10px;
    border-radius:10px;
    cursor:pointer;
    background-color:#1677ff;
    color:white;
    border:1px solid grey;
`

export const ErrorMessage = styled.p`
    font-size : 12px;
    color:red;
`

export const CourseReactQuill = styled.div`
height:200px;
border-radius: 20px;


    .ql-toolbar {
        border-radius: 20px 20px 0 0;
        display: flex;
        gap: 14px;
    }

    .ql-container {
        border-radius: 0 0 20px 20px ;
    }

   .ql-toolbar .ql-clean {
        display:none;
    }
    
    .ql-editor {
        height:150px;
    }
`
