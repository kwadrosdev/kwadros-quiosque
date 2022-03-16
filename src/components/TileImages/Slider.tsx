import { Slider } from '@mui/material';
import { withStyles } from '@mui/styles';

const CustomSlider = withStyles({
  root: {
    color: '#8A199C',
    height: 4,
    width: 200,

    '@media screen and (min-width: 960px)': {
      width: 260,
    },
  },
  thumb: {
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 30%), 0 0 0 1px rgb(0 0 0 / 2%)',
    },

    border: '2px solid #8A199C',
    height: '20px',
    width: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 36%)',
    boxSizing: 'border-box',

    '@media screen and (min-width: 960px)': {
      height: '24px',
      width: '24px',
    },
  },
  track: {
    height: 4,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
    color: '#d9d9d9',
    opacity: 1,
  },
  rail: {
    height: 4,
    borderRadius: 4,
    backgroundColor: '#d9d9d9',
    color: '#d9d9d9',
    opacity: 1,
  },
})(Slider);

export default CustomSlider;
