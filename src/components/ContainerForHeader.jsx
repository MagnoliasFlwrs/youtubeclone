import React, { useState } from "react";
import styled from "styled-components"
import {BiSearch} from "react-icons/bi"
import Flex from "./Flex";
import { useNavigate } from "react-router";

function ContainerForHeader() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const handleStart = () => {
        navigate('/')
    }
    const handleSubmit = () => {
        navigate(`search/${input}`)
        setInput('')
    }
    const handleKeyDown = (event) =>{
        if (event.keyCode === 13) {
            navigate(`search/${input}`)
            setInput('')
         }
    }
    return (
        <FlexCont>
            <img onClick={handleStart} src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" width={150} height={50}/>
            <InputContainer >
                <input onKeyDown={handleKeyDown} type="text" placeholder="Введите запрос" value={input} onChange={e =>setInput(e.target.value) }/>
                <button onClick={handleSubmit} type="submit"><BiSearch/></button>
            </InputContainer>
            <AuthBtn/>
        </FlexCont>
    )

}
const FlexCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    input {
        width: 600px;
        height: 25px;
        border-radius: 25px  0 0 25px;
        border: 1px solid gray;
        &&::placeholder {
            padding: 0 10px;
        }
    }
    button {
        width: 30px;
        height: 29px;
        border: 1px solid gray;
        border-left: none;
        border-radius:  0 25px 25px 0;
    }
`
const AuthBtn = styled.button`
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50px;
`

export default ContainerForHeader;