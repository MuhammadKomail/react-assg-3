
import { useEffect, useState } from 'react';
import Card from "./Card"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

let cardData = [
  {
    title: 'Rolex Wrist watch',
    price: 500,
    imgLink: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: "Rolex Sea-Dweller Deepsea Steel Wrist watch  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"watch"
  },
  {
    title: 'Samsung phones',
    price: 15000,
    imgLink: 'https://images.unsplash.com/photo-1421757350652-9f65a35effc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80',
    description: "Samsung phones Google play dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"phone"
  },
  {
    title: 'Headphone',
    price: 15499,
    imgLink: 'https://images.unsplash.com/photo-1495305379050-64540d6ee95d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    description: "Picture speaks for itself dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"phone"
  },
  {
    title: 'Analog watch',
    price: 9500,
    imgLink: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    description: "round silver-colored analog watch with black strap dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"watch",
  },
  {
    title: 'Apple products',
    price: 5000,
    imgLink: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80',
    description: "2017 Apple products unboxed ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"watch"
  },
  {
    title: 'iPhone 11 Pro',
    price: 999,
    imgLink: 'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80',
    description: "All Colors of the iPhone 11 Pro dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'Sold Out',
    type:"phone"
  },
  {
    title: 'Round silver watch',
    price: 15000,
    imgLink: 'https://images.unsplash.com/photo-1548359638-e51353ca6d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    description: "Round silver chronograph watch dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"watch"
  },
  {
    title: 'Apple Watch & laptop',
    price: 2299,
    imgLink: 'https://images.unsplash.com/photo-1516375195448-0b545d6a2c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    description: "space gray Apple Watch & laptop computer dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'Sold Out',
    type:"watch"
  },
  {
    title: 'iPhone 11',
    price: 9549,
    imgLink: 'https://images.unsplash.com/photo-1574719128055-f4f84a835363?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1289&q=80',
    description: "White, Black, & Red iPhone 11 dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"phone"
  },
  {
    title: 'brown Nike sneaker',
    price: 1950,
    imgLink: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
    description: "brown Nike sneaker on yellow textile  dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    status: 'In Stock',
    type:"shoes",
  }

]



function Products() {
    const [data,setData]=useState(cardData);
    let [name,setName]=useState("")


    const HandleChange=(val)=>{
        setData(cardData)
        setName(val)
       
        if(val == "all"){
            
            setData(cardData)
            
        }
        else if(val === "phone"){
            const newData=cardData.filter(item=> item.type === val)
            setData(newData)
           

           
        }
        else if(val == "watch"){
            const newData=cardData.filter(item=> item.type === val)
           
            setData(newData)
        }
        else if(val == "shoes"){
                const newData=cardData.filter(item=> item.type === val)
               
                setData(newData)
            }
            
            
            
        }
        
        
        return (

    <>
      <div>
        <h4 style={{textAlign:"center",fontSize:"20px",margin:"10px 0"}}>Categories</h4>
        <div style={{margin:"20px 0",textAlign:"center"}} >
        <Box sx={{ minWidth: 50  }}>
      <FormControl style={{width:"90%",}}>
        <InputLabel id="demo-simple-select-label">All</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
            value={name}
          label="Age"
          onChange={(e)=>HandleChange(e.target.value)}
          
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="watch">Watch</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="shoes">Shoes</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        <div >
          <Grid container   spacing={2}>
           
              {
                data.map((data, index) => {
                  return( 
              
                   <div style={{margin:"25px"}}>

                  <Card  key={index}  src={data.imgLink} title={data.title} price={new Intl.NumberFormat().format(data.price)} description={data.description} />
                </div>
              
              
                  )
                })

              }
      
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Products;

