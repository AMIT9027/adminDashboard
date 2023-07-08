import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #fcfcfc;  /* fallback for old browsers */

`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
 
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div` 
    width: 100%;
    height: 100%; 
    border-radius: 5px; 
    padding  :20px ;
  //  background-color: #dde9e5; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     `
export const Header = styled.h1`
 width: 100%;
 text-align: center;
  font-size: 25px;
  font-family: 'Outfit';

`
export const Form=styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  min-height:520px ;

`
export const Title=styled.input.attrs({type:'text',placeholder:'Course Title'})`
  width: 100%;
  height: 100%;
  min-height: 40px;
  text-indent:10px;
  border-radius: 5px;
  font-size: 15px;
  border: 1px solid rgba(107, 105, 105, 0.788);
 
  
`
export const Author=styled.input.attrs({type:'text',placeholder:'Course Author Name'})`
   width: 100%;
  height: 100%;
  min-height: 40px;
  text-indent: 10px;
  border-radius: 5px;
  font-size: 15px;
  border: 1px solid rgba(107, 105, 105, 0.788);
`
export const Price=styled.input.attrs({type:"number ", min:'0.00', max:'10000.0', step:'0.01',placeholder:'0.00'})`
  width: 100%;
  height: 100%;
  min-height: 40px;
  text-indent: 10px;
  border-radius: 5px;
  font-size: 15px;
  border:1px solid rgba(107, 105, 105, 0.788);
`
export const Textarea=styled.textarea.attrs({placeholder:'Description'})`
  width: 100%;
  height: 100%;
  min-height: 80px;
  text-indent: 10px;
  line-height: 30px;
  border-radius: 5px;
  font-size: 15px;
  border: 1px solid rgba(107, 105, 105, 0.788);
`
export const Submit=styled.input.attrs({type:'submit'})`
  width: 100%;

  min-height: 40px;
  background: #d0bea7ee;
  color: #474040;
  border-radius: 5px;
  font-size:22px ;
  border: 1px solid rgba(0, 0, 0, 0.758);
  &:hover{
  background: #e0e7e7;
  color: #5a7f81;
  border: 1px solid rgba(80, 78, 78, 0.758);
  }
`

export const Content=styled.div`
  width: 100%;
  height: 100%;
  max-height: 70px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
`
export const Text=styled.h2`
  font-size: 18px;
  height: 100%;
  min-height: 25px;
  
`
export const ContentWrapper=styled.div`
  width: 100%;

  gap:30px;
  min-height: 400px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  
`

export const Error = styled.p`
  font-size: 12px;
  color: red;
  padding: 5px;
  
`
