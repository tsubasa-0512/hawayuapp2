import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, ButtonGroup } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

function AddChatRoom () {

    const OpenChatRoom = async () => {
        const api_token = document
        .querySelector('meta[name="api-token"]')
        .getAttribute("content")

        const csrf_token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")

        await axios
        .post(`/api/create-room`,{api_token},{csrf_token})

        // then((res以下returnまでグレーアウト))
        .then((res)=>{
            const room_id = res.data.id
            location.href = "/chatpage?roomid="+room_id;
            // location.href="/chatpage"
            // console.log("roomid",res.data)
                // console.log("チャットルームを作りました")
                // e.preventDefault();
                // history.push("/chatpage");
                }).catch(error => {
                     console.log('Error',error.response);
                         });
                }

    return (
        <SDiv>
            <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={OpenChatRoom}>
                新しく相談する
            </Button>
            {/* <SButton id="addchat" onClick={OpenChatRoom}> */}
                {/* <SP>新しく相談する</SP> */}
            {/* </SButton> */}
        </SDiv>
    )
}

export default AddChatRoom

const SDiv = styled.div `
    width:1000px;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content: center;
`

const SButton = styled.button`
    background-color:#FFCB72;
    width:200px;
    height:70px;
    margin:10px auto;
    border:none;
    border-radius:30%;
    outline:none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .2);
`

const SP = styled.p`
    line-height:70px;
`
