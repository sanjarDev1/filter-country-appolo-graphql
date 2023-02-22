import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
    margin: 5,
  },
});

const ComponentCard = ({
  item: {
    name,
    code,
    capital,
    continent,
    currency,
    emoji,
    languages,
    native,
    phone,
  },
}) => {
  const classes = useStyles();
  console.log(code);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://flagcdn.com/w1280/${code?.toLowerCase()}.png`}
          title='Country image'
        />
        <CardContent>
          <div className='country__data'>
            <Typography>
              🚩 Country: <span className='span__font'>{name}</span>
            </Typography>
            <Typography>
              🎌 Native: <span className='span__font'>{native}</span>
            </Typography>
            <Typography>
              📱 Phone : <span className='span__font'>{phone}</span>
            </Typography>
            <Typography>
              🗽 Capital : <span className='span__font'>{capital}</span>
            </Typography>
            <Typography>
              💰Currency: <span className='span__font'>{currency}</span>
            </Typography>
            <Typography>
              📍 Continent :{' '}
              <span className='span__font'>{continent?.name}</span>
            </Typography>
            <Typography>
              <span>
                🌍 Languages :
                {languages?.map((item) => (
                  <h5 style={{ marginLeft: '50px' }}>
                    <span className='span__font'>{item.name}</span>
                  </h5>
                ))}
              </span>
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ComponentCard;
