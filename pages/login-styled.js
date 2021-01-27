import Head from 'next/head'
import * as Styled from './styled';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FilledInput from '../components/FilledInput';

export default function LoginStyled() {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Box mx={2}>
          Menu
        </Box>
        <div>
          Logo
        </div>
        <Box mx={2}>
          Entrar
        </Box>
      </Styled.Header>
      <main >
        <Styled.Title>
          Entrar com minha conta
        </Styled.Title>
        <FilledInput />
      </main>
    </Styled.Wrapper>
  )
}

function ContainedInput () {

}