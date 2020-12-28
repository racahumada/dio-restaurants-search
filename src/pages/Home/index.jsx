import React, { useState } from 'react';
import { Container, Img, Search, Wrapper } from './style';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import { MapContainer, Modal, RestaurantCard, Slides } from '../../components';

export default function Home() {
	const [input, setInput] = useState('');
	const [query, setQuery] = useState(null);
	const [modalOpened, setModalOpened] = useState(false);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			setQuery(input);
		}
	};

	return (
		<Wrapper>
			<Container>
				<Search>
					<Img src={logo} alt="logo" />
					<TextField
						label="Pesquisar Restaurante"
						outlined
						trailingIcon={<MaterialIcon role="button" icon="search" />}>
						<Input
							value={input}
							onKeyPress={handleKeyPress}
							onChange={(e) => setInput(e.target.value)}
						/>
					</TextField>
					<Slides />
					<button onClick={() => setModalOpened(true)}>Abrir Modal</button>
				</Search>
				<RestaurantCard />
			</Container>
			<MapContainer query={query} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
		</Wrapper>
	);
}
