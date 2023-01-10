import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 100,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    borderRadius: '50%'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    
  },
  overlay: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    //color: 'rgba(0, 0, 0, 0.2)',
  },
  overlay2: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    //color: 'rgba(0, 0, 0, 0.2)',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});