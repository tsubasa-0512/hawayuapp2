import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,ChakraProvider,Center,useDisclosure,Link,Grid

  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon,ExternalLinkIcon } from '@chakra-ui/icons'
import { BiBeenHere } from "react-icons/bi";

  const ContentsList = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const onClickToEnglish = () =>{
      history.push('/contents/en/list')
    }

    return(
        <ChakraProvider>

                  <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
                   </ButtonGroup>

                   {/* <Button ml="0.5rem" onClick={onClickToEnglish}>English</Button> */}
  
{/* 
            <Button  bg="yellow.100" color="gray" size="sm" shadow="lg"
               w="20vw" h="10vw" mr="1vw">痛み</Button> */}

            <Grid templateColumns="repeat(4, 1fr)" gap={3}>

                <Link href ="https://hawayu-wellbeing.com/tag/fukutsuu/">
                  お腹が痛い<ExternalLinkIcon mx="2px" />
                </Link>

                <Link href ="https://hawayu-wellbeing.com/tag/zutsuu/">
                  頭が痛い<ExternalLinkIcon mx="2px" />
                </Link>
         
     

            {/* <Button  bg="yellow.100" color="gray" size="sm" shadow="lg"
               w="20vw" h="10vw" mr="1vw">睡眠</Button> */}

                <Link href ="https://hawayu-wellbeing.com/tag/suimin/">
                  睡眠の悩み<ExternalLinkIcon mx="2px" />
                </Link>
  
                <Link href ="https://hawayu-wellbeing.com/tag/darui/">
                  体がだるい<ExternalLinkIcon mx="2px" />
                </Link>

                <Link href ="https://hawayu-wellbeing.com/tag/memai/">
                  めまい・ふらつき<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/douki/">
                  動悸・息が苦しい<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/iyoku/">
                 意欲の低下・やる気が起きない<ExternalLinkIcon mx="2px" />
                </Link>
          
                <Link href ="https://hawayu-wellbeing.com/tag/otikomu/">
                気分が落ち込む<ExternalLinkIcon mx="2px" />
                </Link>

                <Link href ="https://hawayu-wellbeing.com/tag/miss/">
                忘れ物・ミスが多い<ExternalLinkIcon mx="2px" />
                </Link>
  
                <Link href ="https://hawayu-wellbeing.com/tag/namida/">
                涙もろい<ExternalLinkIcon mx="2px" />
                </Link>
           
                <Link href ="https://hawayu-wellbeing.com/tag/aseru/">
                焦燥感<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/shuchu/">
                集中できない<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/binkan/">
                周囲に敏感すぎる<ExternalLinkIcon mx="2px" />
                </Link>
              
                <Link href ="https://hawayu-wellbeing.com/tag/hirou/">
                疲れやすい<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/katakori/">
                肩こり<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/shokuyoku/">
                食欲がない<ExternalLinkIcon mx="2px" />
                </Link>
          
                <Link href ="https://hawayu-wellbeing.com/tag/frustrated/">
                イライラする<ExternalLinkIcon mx="2px" />
                </Link>
        
                <Link href ="https://hawayu-wellbeing.com/tag/fuan/">
                不安<ExternalLinkIcon mx="2px" />
                </Link>
          
                <Link href ="https://hawayu-wellbeing.com/tag/kizukare/">
                人と話すと疲れる・気疲れする<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/hie/">
                冷え<ExternalLinkIcon mx="2px" />
                </Link>
           
                <Link href ="https://hawayu-wellbeing.com/tag/nodo/">
                喉に違和感・声がかすれる<ExternalLinkIcon mx="2px" />
                </Link>
              
                <Link href ="https://hawayu-wellbeing.com/tag/emotion/">
                感情の起伏が激しい<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/seirichu/">
                生理中の悩み<ExternalLinkIcon mx="2px" />
                </Link>
           
                <Link href ="https://hawayu-wellbeing.com/tag/mukumi/">
                むくみ<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/shuchu/">
                集中できない<ExternalLinkIcon mx="2px" />
                </Link>
           
                <Link href ="https://hawayu-wellbeing.com/tag/kyomi/">
                今まで興味があったものへの<br />興味がない<ExternalLinkIcon mx="2px" />
                </Link>
              
                <Link href ="https://hawayu-wellbeing.com/tag/semeru/">
                以前よりも自分のことを<br />責めるようになった<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/handan/">
                判断や決断ができない<ExternalLinkIcon mx="2px" />
                </Link>
            
                <Link href ="https://hawayu-wellbeing.com/tag/shi/">
                死にたいと考えてしまう<ExternalLinkIcon mx="2px" />
                </Link>
          
                <Link href ="https://hawayu-wellbeing.com/tag/otikomu/">
                気分が落ち込む<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/value/">
                自分の価値がないと感じる<ExternalLinkIcon mx="2px" />
                </Link>
           
                <Link href ="https://hawayu-wellbeing.com/tag/multiple/">
                マルチタスクが苦手<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/sayu/">
                他人の気分に左右される<ExternalLinkIcon mx="2px" />
                </Link>
             
                <Link href ="https://hawayu-wellbeing.com/tag/mabushii/">
                眩しいのが苦手<ExternalLinkIcon mx="2px" />
                </Link>
           


            </Grid>
            
{/* 
           <Center mt={'2rem'}>
             <Sleep />
           </Center>

           <Center mt={'2rem'}>
             <Jiritsu />
           </Center> */}
      </ChakraProvider>
    )
  }

  export default ContentsList;