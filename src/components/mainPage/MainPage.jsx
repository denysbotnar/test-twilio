import React, { useState } from 'react';

// Utils
import ApiClient from '../../utilities/ApiClient';
import trimExtraWhitespace from '../../utilities/trimExtraWhitespace';

// Styles
import { 
    Button, 
    Input,
    Label,
    InputWrapper,
    TextArea,
    FormWrapper, 
} from './styles';

const MainPage = () => {

    const [info, setInfo] = useState({
        number: '',
        text: '',
    });

    const onChange = (event) => {
        const { id, value } = event.target;

        setInfo((prevState) => ({ ...prevState, [id]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const formatInfo = trimExtraWhitespace(info);

        ApiClient.post('send', formatInfo)
        .then((res) => {
            if (res.status) {
                alert('Message delivered!')
                return;
            }

            alert('Message not delivered!')

        })
        .catch((err) => alert(err));
    };

    const isValid = Object.values(info).every(data => data);

    return (
        <FormWrapper>
            <InputWrapper>
                <Label>Enter Number:</Label>
                <Input id="number" type="tel" onChange={onChange} value={info.number}/>
            </InputWrapper>
            <InputWrapper>
                <Label>Enter Text:</Label>
                <TextArea id ="text" onChange={onChange} value={info.text}/>
            </InputWrapper>
            <Button disabled={!isValid} type="submit" value="Send SMS" onClick={isValid ? onSubmit : null} />
        </FormWrapper>
    )
};

export default MainPage;