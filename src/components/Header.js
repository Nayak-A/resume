import React from "react";
import {
	Container,
	Avatar,
	Box,
	Typography,
	Stack,
	IconButton,
	Tooltip
} from "@mui/material";
import {
	GitHub as GitHubIcon,
	LinkedIn as LinkedInIcon,
	Instagram as InstagramIcon,
	WhatsApp as WhatsAppIcon,
	FileOpen as FileOpenIcon
} from '@mui/icons-material';

const socialLinks = [
	{
		name: "GitHub",
		url: "https://github.com/Nayak-A",
		username: "@Nayak-A",
		icon: <GitHubIcon fontSize="small" />,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/arpita-nayak-0b216211b",
		username: "@arpita-nayak-0b216211b",
		icon: <LinkedInIcon fontSize="small" />,
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/arpita__nayak",
		username: "@arpita__nayak",
		icon: <InstagramIcon fontSize="small" />,
	},
	{
		name: "WhatsApp",
		url: "https://wa.me/919776591100",
		username: "(+91) 97765 91100",
		icon: <WhatsAppIcon fontSize="small" />,
	},
	{
		name: "Resume",
		url: "/static/documents/Resume_ArpitaNayak.pdf",
		username: "View Resume",
		icon: <FileOpenIcon fontSize="small" />,
	},
];

function Header() {
	return (
		<Container
			maxWidth='sm'
			sx={{
				display: 'flex',
				alignItems: 'center'
			}}
		>
			<Avatar
				alt='Arpita Nayak'
				src='/static/images/avatar_col.png'
				sx={{
					width: 100,
					height: 100,
					backgroundColor: "#FFFFFF10"
				}}
			/>
			<Box
				sx={{
					alignItems: 'left',
					marginLeft: '2rem'
				}}
			>
				<Typography
					align='left'
					variant='h4'
				>
					Arpita Nayak
				</Typography>

				<Typography
					color='#FFFFFFA3'
					variant='subtitle1'
				>
					C# Developer & Azure Aficionado
				</Typography>

				<Stack
					direction='row'
					spacing={1}
					sx={{
						marginTop: "0.2rem",

						"& .MuiIconButton-root": {
							padding: 0
						},

						"& .MuiSvgIcon-root": {
							color: "#fff",
							transition: "transform 0.2s", // Add a transition effect
						},

						"& .MuiSvgIcon-root:hover": {
							transform: "scale(1.2)", // Scale up on hover
							cursor: "pointer",
						},

						"& a": {
							textDecoration: "none", // Remove underlines for links
							margin: 0, // Remove margin
							padding: 0, // Remove padding
						},
					}}
				>
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Tooltip title={link.username}>
								<IconButton>{link.icon}</IconButton>
							</Tooltip>
						</a>
					))}
				</Stack>
			</Box>
		</Container>
	);
}

export default Header;