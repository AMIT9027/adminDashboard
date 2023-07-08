import styled from "styled-components"

export const ModalWrapper = styled.div`
    width: 100%;
    max-width: 1250px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RegForm = styled.form`
    width:100%;
    max-width:500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap:20px;
    @media (max-width:426px)
    {
        
        flex-direction:column;
    }
`
export const FirstLastName = styled.div`
    display:flex;
    justify-content:space-between;
    gap:15px;

    @media (max-width:426px)
    {

        flex-direction:column;
        width: 100%;
        max-width:400px;
    }
`
export const FirstName = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`
export const NameLabel = styled.label``

export const NameInput = styled.input`
    padding: 10px;
    border-radius: 10px;
    border:1px solid grey;
`

export const LastName = styled(FirstName)``

export const LastNameLabel = styled(NameLabel)``
    
export const LastNameInput = styled(NameInput)``


export const ContactEmail = styled(FirstLastName)`
`
export const ContactNumber = styled(FirstName)`
`
export const ContactLabel = styled(NameLabel)``

export const ContactInput = styled(NameInput)`
`

export const Email = styled(FirstName)``

export const EmailLabel = styled(NameLabel)``
    
export const EmailInput = styled(NameInput)``

export const AddressWrapper = styled.div`
    width:100%;
    max-width:400px;
    display:flex;
    flex-direction: column;
    gap:7px;
`
export const Address = styled.textarea`
    width:100%;
    max-width:400px;
    min-height:150px;
    border-radius:10px;
    padding: 10px;
`

export const ButtonWrapper = styled.div`
    width:100%;
    max-width:500px;
    display:flex;
    justify-content:center;
    align-items: center;
`

export const AddressLabel = styled.label``

export const RegButton = styled.button`
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