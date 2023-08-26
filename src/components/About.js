import React from 'react';
import {
	Container,
	Typography,
	Box
} from "@mui/material";

function About() {
	return (
		<Container
			maxWidth='sm'
			sx={{
				display: 'flex',
				alignItems: 'center',
				paddingTop: '1.5rem'
			}}
		>
			<Box
				maxWidth='sm'
				sx={{
					textAlign: "left"
				}}
			>
				<Typography variant="h6" gutterBottom>
					About
				</Typography>

				<Typography variant="body2" color='#FFFFFFA3'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
					neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
					quasi quidem quibusdam.
				</Typography>
			</Box>
		</Container>
	);
}

export default About;
