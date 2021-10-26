import styled from 'styled-components';
import background from '../../assets/images/background.jpg' 

const Button = styled.input`
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    background-color: ${({disabled}) => (disabled ? 'grey' : 'green')};
    width: 150px;
    height: 25px;
    margin: auto;
    color: white;
    border: none;
    border-radius: 5px;
`;

const InputWrapper = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border-radius: 5px;
`;


const Label = styled.label`
    margin-bottom: 10px;
    font: italic small-caps bold 16px/2 cursive;
`;

const TextArea = styled.textarea`
    resize: none;
    height: 100px;
    border-radius: 5px;
    font: italic 1em "Fira Sans", serif;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    height: 500px;
    margin: auto;
    background-image: url(${background});
    background-size: cover;
    border-radius: 15px;
`;

export {
    Button,
    Input,
    InputWrapper,
    Label,
    TextArea,
    FormWrapper,
};
