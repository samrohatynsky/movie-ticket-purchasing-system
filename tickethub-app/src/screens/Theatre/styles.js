import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  container: {
    padding: '50px 10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridGap: 40
  },
  button: {
    height: 110
  },
  help: {

  }
}));

export default styles
