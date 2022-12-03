import React from "react";
import styled from "styled-components"
import {BiSearch} from "react-icons/bi"
import Flex from "./Flex";

function ContainerForHeader() {
    return (
        <Flex>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" width={150} height={50}/>
            <InputContainer >
                <input type="text" placeholder="Введите запрос" />
                <button type="submit"><BiSearch/></button>
            </InputContainer>
            <AuthBtn/>
        </Flex>
    )

}
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 0;
    input {
        width: 600px;
        height: 25px;
        border-radius: 25px  0 0 25px;
        border: 1px solid gray;
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