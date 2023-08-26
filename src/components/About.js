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

				<Typography variant="body2">
					<strong>👩‍💻 .NET Developer | ☁️ Azure Enthusiast | 🩺 Healthcare Tech Professional</strong>
				</Typography>

				<Typography variant="body2" color='#FFFFFFA3'>
					Welcome to my digital playground! I'm a seasoned .NET developer with 5 years of healthcare tech expertise. From code to CI/CD, I bring end-to-end solutions to life. Let's explore my journey together. 🚀
				</Typography>
			</Box>
		</Container>
	);
}

export default About;
