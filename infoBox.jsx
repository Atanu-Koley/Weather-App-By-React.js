
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({Info}) {
  const INII_URL = "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
 return (
  <div className="InfBox">
   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INII_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {Info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature = {Info.temp}&deg;C</p>
          <p>Humidity = {Info.humidity}</p>
          <p>MinTemp = {Info.tempMin}&deg;C</p>
          <p>MaxTemp = {Info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{Info.weather}</i> and feels like {Info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  </div>
 )
  
}