import React, { useEffect, useState ,useContext} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Text,
    List,ListItem,ListIcon,Flex
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'

import UserProvider, { UserContext } from '../user/UserProvider';
// ({user_id,user_name,nickname,email,gender,birthday,company_id,created_at})

const UserInfo= ()=>{

    const [user, setUser] = useState([]);
    const history = useHistory();

    const api_token=
    document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    const csrf_token = 
    document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content")

    useEffect(() => {
        getUser()
    },[])

    const getUser = async () => {
        console.log("URL",`/api/user?api_token=${api_token}`)
         await axios
        .get(`/api/user?api_token=${api_token}`)
        .then( (res) => {
                console.log("user",res.data)
                    setUser(res.data);
                }).catch(error => {
                     console.log('Error',error.response);
                         });
                }

    const birthday = user.birthday
    const ageCalculation = ( birthday , nowDate ) => {
        const birthNumber = birthday.getFullYear() * 10000 
                                   + (birthday.getMonth() + 1 ) * 100 
                                   + birthday.getDate();
        const nowNumber = nowDate.getFullYear() * 10000 
                                   + (nowDate.getMonth() + 1 ) * 100 
                                   + nowDate.getDate();
     
        return Math.floor( (nowNumber - birthNumber) / 10000 );
    }
     
    const age = ageCalculation( new Date(birthday) , new Date() );

    return (
        <>
      
        <ChakraProvider>
        <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
        </ButtonGroup>
        
        <Flex shadow="sm" justifyContent="center" w="80vw" h="50vh" bg="orange.100"
        mx="auto" mt={"2rem"} mb={"1rem"} rounded="lg" p={4} shadow="lg">
            <Box>
                <Image
                    src="https://source.unsplash.com/random"
                    // boxSize= "100px"
                    w={"3rem"} h={"3rem"}
                    borderRadius="full"
                 />
                 <Text>お名前：{user.name}</Text>
                 <Text>ニックネーム：{user.nickname}</Text>
            </Box>
            <Box color="gray.600" fontSize="sm" ml={"2rem"}>
                <Text>性別：{user.gender}</Text>
                <Text>誕生日：{user.birthday}（{age}歳）</Text>
                {/* 法人コードと一致するcompany名を取得する予定 */}
                <Text>法人コード:{user.company_id}</Text>
                <Text>登録日：{user.created_at}</Text>
             </Box>

        </Flex>
        </ChakraProvider>
     
      </>
    )
}
const SBox = styled.div`
    background-color:#FED7D7;
    width:20%;
    color:gray;
    box-shadow:2px 2px 4px gray;
`
const S2Box = styled.div`
    background-color:#FFF5F5;
    width:40%;
    color:gray;
    box-shadow:2px 2px 4px gray;
`
const SH1 = styled.h1`
    text-align:center;
    color: palevioletred;
`
const SImage = styled.img`
    border-radius:100%;
`
const SDiv = styled.div`
    display:flex;
    width:1000px;
    margin:auto;
    text-align:center;
    justify-content: center;
    `
export default UserInfo;

// if (document.getElementById('usermypage')) {
//     ReactDOM.render(<UserMyPage />, document.getElementById('usermypage'));
// }