import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Img, Search, Wrapper, ModalTitle, ModalContent } from './style';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import { MapContainer, Modal, RestaurantCard, Slides, Loader, Skeleton } from '../../components';

export default function Home() {
	const [input, setInput] = useState('');
	const [query, setQuery] = useState(null);
	const [placeId, setPlaceId] = useState(null);
	const [modalOpened, setModalOpened] = useState(false);
	const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			setQuery(input);
		}
	};

	const handleOpenModal = (placeId) => {
		setPlaceId(placeId);
		setModalOpened(true);
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
					{restaurants.length > 0 ? (
						<>
							<Slides />
						</>
					) : (
						<>
							<Loader />
						</>
					)}

					{/* <button onClick={() => setModalOpened(true)}>Abrir Modal</button> */}
				</Search>
				{restaurants.map((restaurant) => (
					<RestaurantCard
						onClick={() => handleOpenModal(restaurant.place_id)}
						restaurant={restaurant}
						key={restaurant.place_id}
					/>
				))}
			</Container>
			<MapContainer query={query} placeId={placeId} />
			<Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
				{restaurantSelected ? (
					<>
						<ModalTitle>{restaurantSelected?.name}</ModalTitle>
						<ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
						<ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
						<ModalContent>
							{restaurantSelected?.opening_hours?.open_now ? 'Aberto Agora' : 'Fechado'}
						</ModalContent>
					</>
				) : (
					<>
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
						<Skeleton width="10px" height="10px" />
					</>
				)}
			</Modal>
		</Wrapper>
	);
}
