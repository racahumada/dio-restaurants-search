import React, { useState } from 'react';
import { Container, Img, Search } from './style';
import TextField, { Input } from '@material/react-text-field';
import logo from '../../assets/logo.svg';

export default function Home() {
  const [input, setInput] = useState('');

  return (
    <Container>
      <Search>
        <Img src={logo} alt="logo" />
        <TextField label="Pesquisar" outlined>
          <Input value={input}
            onChange={(e) => setInput(e.target.value)} />
        </TextField>
      </Search>
    </Container>
  )
}
