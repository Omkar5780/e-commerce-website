import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';


function Dashboard() {
  return (
    <>
      <div style={{marginTop:"100px"}} >
        <div className="row">
          <div className="col-lg-4 col-md-6">
            
            <Card sx={{ maxWidth: 345 }}>
              
              <CardActionArea>
                
              <CardMedia
                  component="img"
                  height="240"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_aVh-pybMMf46GCOnWC5gCcsg-C_ugy9_A&usqp=CAU"
                  alt="green iguana"
                  
                />
              

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                    <Button> USER</Button>
                
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="col-lg-4  col-md-6">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydT_22ez19oaqjNdnzZIqs6d9XevcmQCTTjC3ZezR7_HsligwmhD0RF1g-GYtx6o9Qwc&usqp=CAU"
              
                />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                    <Button> Product</Button>
                
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="col-lg-4  col-md-6">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image="https://i.etsystatic.com/36669067/r/il/3f61b3/4194978783/il_600x600.4194978783_eima.jpg"
                  alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                    <Button> Product</Button>
                
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard