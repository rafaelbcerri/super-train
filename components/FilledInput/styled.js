import { darken } from '@material-ui/core/styles';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

export const Input = styled(InputBase)`${({ theme }) => `
  .MuiInputBase-root {
    .MuiInputBase-label + & {
      color: ${theme.palette.primary.main};
      margin-top: 20px;
      font-family: inherit;
      width: 100%;
    }
  }
  .MuiInputBase-input {
    color: ${theme.palette.primary.main};
    font-weight: bold;
    font-size: 1rem;
    border: none;
    font-family: inherit;
    padding: ${theme.spacing(2)}px;
    border-radius: ${theme.spacing(1)}px;
    background-color: #e0e0e0;
    text-align: inherit;

    &::placeholder {
      color: #AB96E6;
    }

    &:focus {
      outline: none;
    },
  }
`}`;

export const Label = styled(InputLabel)`${({ theme }) => `
  .MuiInputLabel-label {
    font-weight: bold;
    color: ${theme.palette.primary.main};
  }
`}`;


  // backgr
//   label: {
//     alignSelf: 'flex-start',
//     fontWeight: 700,
//     color: theme.palette.text.main,
//     fontSize: '1rem',
//     fontFamily: 'inherit',
//   }
// });