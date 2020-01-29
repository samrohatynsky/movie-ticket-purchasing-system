import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  container: {
    padding: '50px 10px'
  },
  screen: {
    height: 80,
    background: '#222222',
    color: 'white',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  seats: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'space-between',
    gridGap: 10,
  },
  button: {
    margin: 5,
    height: 60,
    width: 50
  },
  selectedButton: {
    margin: 5,
    height: 60,
    width: 50,
    background: '#31b068',
    '&:hover': {
      background: '#1f9954'
    }
  },
  seatsList: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: 8,
      marginBottom: 5
    }
  }
}))

export default styles
