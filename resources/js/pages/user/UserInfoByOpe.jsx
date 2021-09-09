import React, { useEffect, useState ,useContext} from 'react';
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

const UserInfoByOpe= (props)=>{
    // const[userInfo,setUserInfo] = useState([]);
    const {nickname,company,gender} = props;


        return (
        <>
    <div>
                                <h1>＜ユーザー情報＞</h1>
                                 <p>ニックネーム：{nickname}さん</p>
                                 <p>会社名：{company}</p>
                                 <p>性別：{gender}</p>
                            </div>

                            <br />
                         {/* {hawayuInfo.created_at && */}
                            {/* <div>
                             <h1>＜ハワユ回答＞</h1>
                                  最終回答：{created_at}  
                                 {hawayuInfo.map((hawayu) =>
                                <li className="list-group-item" id={hawayu.id} key={hawayu.id}>
                                    <p>{hawayu.question_id}</p>
                                    <p>{hawayu.answer.answer}</p>
                                </li>
                            )   
                        }
                        </div> */}
                        {/* } */}
        </>
        )
        
}


export default UserInfoByOpe;