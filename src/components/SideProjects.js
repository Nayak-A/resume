import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
  Tooltip
} from "@mui/material";
import {
  SportsEsports as SportsEsportsIcon
} from '@mui/icons-material';

function SideProjects() {

  // Array of work experiences
  const sideProjects = [
    {
      period: "2020",
      projectName: "Laser Defender",
      description: "A simple 2D top down shooting video game similar to the classic Space Invaders",
      technologies: "C# • Batchfile • Unity",
      repoLink: "https://github.com/prajnanBhuyan/Laser-Defender",
      liveLink: "https://prajnanbhuyan.github.io/Laser-Defender/"
    },
    {
      period: "2020",
      projectName: "Glitch Garden",
      description: "A simple version of of the famous Plants vs. Zombies game, where instead of zombies we have foxes and lizards",
      technologies: "C# • Batchfile • Unity",
      repoLink: "https://github.com/prajnanBhuyan/Glitch-Garden",
      liveLink: "https://prajnanbhuyan.github.io/Glitch-Garden/"
    },
  ];

  return (
    <React.Fragment>
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex',
          flexDirection: "column",
          alignItems: 'left',
          paddingTop: '1.5rem',
          textAlign: "left",

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

        <Typography variant="h6" gutterBottom>
          Side Projects
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
          >
            {sideProjects.map((project, index) => (
              <React.Fragment key={index}>
                <Grid item xs={4} color='#FFFFFFA3'>
                  {project.period}
                </Grid>
                <Grid item xs={8}>
                  <Box>
                    <Typography variant="body2">
                      <strong>{project.projectName}</strong>
                    </Typography>
                    <Typography variant="body2" color='#FFFFFFA3'>
                      {project.description}
                    </Typography>
                    <Typography variant="body2" color='#FFFFFF70'>
                      {project.technologies}
                    </Typography>
                    {
                      project.liveLink &&
                      <a
                        key={index}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Tooltip title='Play'>
                          <IconButton>
                            <SportsEsportsIcon />
                            <Typography variant="body2" color='#FFFFFF'>
                              Try it out
                            </Typography>
                          </IconButton>
                        </Tooltip>
                      </a>
                    }
                  </Box>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default SideProjects;