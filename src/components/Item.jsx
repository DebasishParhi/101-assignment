import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    Box, Center, SimpleGrid,  Button,
} from '@chakra-ui/react'
import "../styles/foodlist.css"


export const Item = () => {
    const [oneitem, setoneItem] = useState([])
    const [menu, setMenu] = useState({})
    const { Id } = useParams()

    let singleProduct;
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088 ")
        .then(res=>{
            setoneItem(res.data)
            filtering(res.data, Id)
        }).catch((err)=>{console.log("err")})

    }, [singleProduct])
    
    function filtering(oneitem, Id) {
        singleProduct = oneitem.find(e => e.Id == Id)
        setMenu(singleProduct)
    }

    // console.log(data)
   


    return (
        <div>
            <Box>
                <SimpleGrid minChildWidth='100px' style={{ margin: "20px" }} spacing='20px' key={menu.Id}>
                   
                    <Box className='product'>
                        <Center>
                            <p>{menu.Menu_Items} {`(${menu.Menu_Category})`}</p>
                        </Center>
                    </Box>
                </SimpleGrid>

            </Box>


            <div>

                <table>
            <h1 style={{fontWeight:"bold" , fontSize:"30px" ,color:"Red"}}>Table</h1>
                    
                    <tr>
                        <thead>
                            <th>Menu_Items</th>
                            <td>{menu.Menu_Items}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Energy_kCal</th>
                            <td>{menu.Energy_kCal}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Protein_g</th>
                            <td>{menu.Protein_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Total_fat_g</th>
                            <td>{menu.Total_fat_g}</td>
                        </thead>
                    </tr>
                    <tr>
                        <thead>
                            <th>Sodium_mg</th>
                            <td>{menu.Sodium_mg}</td>
                        </thead>
                    </tr>
                </table>
            </div>
            <Center style={{ marginTop: "41px",display:"flex",gap:"31px" }}>
                
                    <Box>
                    <Link to="/"><Button style={{ backgroundColor: "rgb(100,50,249)" }}>Back</Button></Link>
                    </Box>
                <Box>
                    <Button style={{ backgroundColor: "rgb(100,50,249)" }} >Add to Favourite</Button>
                </Box>
              
            </Center>
        </div>
    )
}
