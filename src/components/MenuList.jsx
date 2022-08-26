import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Box, Button, Center, Heading, Select, SimpleGrid, Text,option} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const MenuList = () => {
    const [data, setData] = useState([])

    

    useEffect(()=>{
        axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088 ")
        .then(res=>{
            setData(res.data)
        }).catch(err =>{
          console.log("err")
        })
    },[])

    return (
        <div style={{backgroundColor:"aqua"}}>
            <Heading className='heading' style={{padding:"2px"}} >FoodList</Heading>
         

            {data.map((e) => {
                return (
                    <Box key={e.Id}>
                        <Link to={`/${e.Id}`}><SimpleGrid minChildWidth='80px'style={{margin:"10px"}}>
                            <Box className='img'>
                                <Center>
                                    <img src={require("../icon.png")} alt="" />
                                </Center>
                            </Box>
                            <Box className='product'>
                                <Center>
                                    <Text>{e.Menu_Items} {`(${e.Menu_Category})`}</Text>
                                </Center>
                            </Box>
                        </SimpleGrid>
                        </Link>
                        <Box><hr /></Box>
                    </Box>
                )
            })}
        </div>
    )
}
