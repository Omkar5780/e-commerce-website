import { Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios'
// import { DataGrid } from '@mui/x-data-grid';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Products() {
  const [newdata, setNewdata] = useState([])
  let navigate = useNavigate()
  // const[mainData,setMainData] = useState([])
  // const [id,setID] = useState(undefined)



  function GetData() {
    axios.get("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data")
      .then((res) => {
        console.log(res.data);
        setNewdata(res.data);
      })
  }

  function ItemDelete(e,id) {
    e.preventDefault();
    axios.delete("https://65b0d5d0d16d31d11bdd5ad7.mockapi.io/apicreate/Data/" + id)
    .then((res)=>{
        console.log(res.data);
        GetData();

    })

  }

  function HandleUpdate(e,id) {
    e.preventDefault();
    // alert(id)

    navigate("/admin/addproducts/" + id)

  }
  
  
  useEffect(() => {
    GetData();
    
  }, [])



  return (
    <>
     <TableContainer >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {/* <TableCell >Image</TableCell> */}

            <TableCell>Title</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >MRP</TableCell>
            <TableCell >Image</TableCell>
            <TableCell align='center' >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
       {
        newdata.map((eachdat,i)=>{
          return(
            <TableRow  key={i}>
            <TableCell>{i+1}</TableCell>
            <TableCell >{eachdat.title}</TableCell>
            <TableCell >{eachdat.category}</TableCell>
            <TableCell >{eachdat.price}</TableCell>
            <TableCell >{eachdat.mrp}</TableCell>
            <TableCell ><img src={eachdat.image} style={{width:"90px"}} /> </TableCell>
           
            <TableCell  >
               <Link to = {"/Addproducts/"+ eachdat.id}>
                        <Button  variant="contained" onClick={((e)=>HandleUpdate(e,eachdat.id))} >Edit</Button>
              </Link>
              </TableCell>
            
            <TableCell  ><Button variant="contained" onClick={((e)=>ItemDelete(e,eachdat.id))}>Delete</Button></TableCell>
            {/* <TableCell ><img src="{eachdata.image}" alt="d" srcset="" /></TableCell> */}
            </TableRow>
            
            

          )
        })
       }
         
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Products