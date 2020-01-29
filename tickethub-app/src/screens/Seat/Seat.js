import React, { useState } from 'react'
import { Button, Typography, Container, Chip, Box } from '@material-ui/core'
import useStyles from './styles'
import GetTheater from "../../components/TheaterData";
import {Link} from "react-router-dom";

const Seats = (props) => {
  const s = useStyles();
  const [seats, setSeats] = useState([
    [
      { name: 'A1', side: 'left', price: 10, taken: false, selected: false },
      { name: 'A2', side: 'left', price: 10, taken: false, selected: false },
      { name: 'A4', side: 'center', price: 10, taken: false, selected: false },
      { name: 'A3', side: 'center', price: 10, taken: false, selected: false },
      { name: 'A5', side: 'center', price: 10, taken: false, selected: false },
      { name: 'A6', side: 'center', price: 10, taken: false, selected: false },
      { name: 'A7', side: 'center', price: 10, taken: false, selected: false },
      { name: 'A8', side: 'center', price: 10, taken: false, selected: false },
      { name: 'A9', side: 'right', price: 10, taken: false, selected: false },
      { name: 'A10', side: 'right', price: 10, taken: false, selected: false }
    ],
    [
      { name: 'B1', side: 'left', price: 10, taken: false, selected: false },
      { name: 'B2', side: 'left', price: 10, taken: false, selected: false },
      { name: 'B3', side: 'left', price: 10, taken: false, selected: false },
      { name: 'B4', side: 'center', price: 10, taken: true, selected: false },
      { name: 'B5', side: 'center', price: 10, taken: false, selected: false },
      { name: 'B6', side: 'center', price: 10, taken: false, selected: false },
      { name: 'B7', side: 'center', price: 10, taken: false, selected: false },
      { name: 'B8', side: 'center', price: 10, taken: false, selected: false },
      { name: 'B9', side: 'center', price: 10, taken: false, selected: false },
      { name: 'B10', side: 'right', price: 10, taken: false, selected: false },
      { name: 'B11', side: 'right', price: 10, taken: false, selected: false },
      { name: 'B12', side: 'right', price: 10, taken: false, selected: false }
    ],
    [
      { name: 'C1', side: 'left', price: 10, taken: false, selected: false },
      { name: 'C2', side: 'left', price: 10, taken: false, selected: false },
      { name: 'C3', side: 'left', price: 10, taken: false, selected: false },
      { name: 'C4', side: 'center', price: 10, taken: false, selected: false },
      { name: 'C5', side: 'center', price: 10, taken: false, selected: false },
      { name: 'C6', side: 'center', price: 10, taken: false, selected: false },
      { name: 'C7', side: 'center', price: 10, taken: false, selected: false },
      { name: 'C8', side: 'center', price: 10, taken: false, selected: false },
      { name: 'C9', side: 'center', price: 10, taken: false, selected: false },
      { name: 'C10', side: 'right', price: 10, taken: true, selected: false },
      { name: 'C11', side: 'right', price: 10, taken: false, selected: false },
      { name: 'C12', side: 'right', price: 10, taken: false, selected: false }
    ],
    [
      { name: 'D1', side: 'left', price: 10, taken: false, selected: false },
      { name: 'D2', side: 'left', price: 10, taken: false, selected: false },
      { name: 'D3', side: 'left', price: 10, taken: false, selected: false },
      { name: 'D4', side: 'center', price: 10, taken: false, selected: false },
      { name: 'D5', side: 'center', price: 10, taken: false, selected: false },
      { name: 'D6', side: 'center', price: 10, taken: false, selected: false },
      { name: 'D7', side: 'center', price: 10, taken: false, selected: false },
      { name: 'D8', side: 'center', price: 10, taken: false, selected: false },
      { name: 'D9', side: 'center', price: 10, taken: false, selected: false },
      { name: 'D10', side: 'right', price: 10, taken: false, selected: false },
      { name: 'D11', side: 'right', price: 10, taken: false, selected: false },
      { name: 'D12', side: 'right', price: 10, taken: false, selected: false }
    ],
  ]);

  const [price, setPrice] = useState(0);
  const [path, setPath] = useState('/checkout');
  const [help, setHelp] = useState('#FFFFFF');
  // Get only the selected ones
  const selected = seats.flat().filter(seat => seat.selected)

  // When a seat is clicked
  const onSelect = name => {
    const newSeats = seats.map(row =>
      row.map(seat => {
        if (seat.name === name) return { ...seat, selected: !seat.selected }
        return seat
      })
    );
    setSeats(newSeats);
  };

  const calcPrice = () => {
    if (selected.length > 0) {
      setPrice(selected.map(seat => seat.price).reduce((a, c) => a + c));
      setPath('/checkout');
      return false;
    }
    setPath('/seat');
    return true;
  };

  const nextClick = () => {
    if (selected.length === 0) {
      setHelp('#000000');
    }
  };

  // Renders the seats
  const renderSeats = seats.map((row, index) => {
    const left = row.filter(seat => seat.side === 'left')
    const right = row.filter(seat => seat.side === 'right')
    const center = row.filter(seat => seat.side === 'center')

    return (
      <div className={s.seats} key={index}>
        <div>
          {left.map(seat => (
            <Button
              className={seat.selected ? s.selectedButton : s.button}
              disabled={seat.taken}
              key={seat.name}
              onClick={() => onSelect(seat.name)}
              variant='contained'
              color='primary'
              size='large'
            >
              {seat.name}
            </Button>
          ))}
        </div>
        <div>
          {center.map(seat => (
            <Button
              className={seat.selected ? s.selectedButton : s.button}
              disabled={seat.taken}
              key={seat.name}
              onClick={() => onSelect(seat.name)}
              variant='contained'
              color='primary'
              size='large'
            >
              {seat.name}
            </Button>
          ))}
        </div>
        <div>
          {right.map(seat => (
            <Button
              className={seat.selected ? s.selectedButton : s.button}
              disabled={seat.taken}
              key={seat.name}
              onClick={() => onSelect(seat.name)}
              variant='contained'
              color='primary'
              size='large'
            >
              {seat.name}
            </Button>
          ))}
        </div>
      </div>
    )
  })

  return (
    <Container className={s.container} maxWidth='md'>
      <Box className={s.screen} mb={5}>
        <Typography variant="h4">Screen</Typography>
      </Box>
      {renderSeats}
      <Container maxWidth='sm'>
        <Box pt={5} pb={2}>
          <div className={s.seatsList}>
            <Typography variant='h6'>
              Seats:{' '}
            </Typography>
            {selected.map(seat => <Chip label={seat.name} />)}
          </div>
          <Typography variant='h6'>
            Cost: {selected.length > 0 ? '$' + selected.map(seat => seat.price).reduce((a, c) => a + c) : '$' + 0}
          </Typography>
        </Box>
         <Link to={{
                      pathname: path,
                      state: {
                          movieId: props.location.state.selectedMovieId,
                          date: props.location.state.selectedDate,
                          time: props.location.state.selectedTime,
                          theater: props.location.state.selectedTheater.name,
                          seats: {selected},
                          price: {price}
                      },
                  }}
                >
          <Button style={{ width: '100%' }} variant='contained' color='primary'
                  size='large' onMouseOver={calcPrice} onClick={nextClick}>
            Next
          </Button>
         </Link>
        <Typography variant='p' style={{color: help, paddingTop: '30px'}}>
          Error: You must select one seat for each ticket you intend on purchasing
        </Typography>
      </Container>
    </Container>
  )
};

export default Seats
