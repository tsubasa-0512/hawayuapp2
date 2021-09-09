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

const HawayuInfoByOpe= (props)=>{

    const {userHawayuInfo} = props;


        return (
        <>
 
                         {userHawayuInfo.hawayu ?
                    
                            <div>
                             <h1>＜ハワユ回答＞</h1>
                                  最終回答：{userHawayuInfo.hawayu.created_at}  
                                 {userHawayuInfo.hawayu.results.map((hawayu) =>
                                <li className="list-group-item" id={hawayu.id} key={hawayu.id}>
                                    <p>{hawayu.question_id}</p>
                                    <p>{hawayu.answer.answer}</p>
                                </li>
                            )   
                        }
                        </div>

                    :

                    <div>まだ回答していません</div>
                        }
        </>
        )
        
}


export default HawayuInfoByOpe;