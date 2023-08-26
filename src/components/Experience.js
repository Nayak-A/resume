import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid
} from "@mui/material";

function Experience() {

  // Array of work experiences
  const workExperiences = [
    {
      date: "Jun 2022 - Current",
      productName: "Product Name 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum",
      technologies: "TS • Next • Nest • Stitches • Mobx • Turbo",
    },
    {
      date: "Aug 2021 - Jun 2022",
      productName: "Product Name 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum",
      technologies: "TS • Next • Nest • Stitches • Mobx • Turbo",
    },
    {
      date: "Apr 2020 - Aug 2021",
      productName: "Product Name 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum",
      technologies: "TS • Next • Nest • Stitches • Mobx • Turbo",
    },
    {
      date: "Feb 2018 - Apr 2020",
      productName: "Product Name 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum",
      technologies: "TS • Next • Nest • Stitches • Mobx • Turbo",
    },
    {
      date: "Dec 2017 - Feb 2018",
      productName: "Product Name 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum",
      technologies: "TS • Next • Nest • Stitches • Mobx • Turbo",
    },
  ];

  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'left',
        paddingTop: '1.5rem',
        textAlign: "left"
      }}
    >

      <Typography variant="h6" gutterBottom>
        Work Experience
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
        >
          {workExperiences.map((experience, index) => (
            <React.Fragment key={index}>
              <Grid item xs={4} color='#FFFFFFA3'>
                {experience.date}
              </Grid>
              <Grid item xs={8}>
                <Box>
                  <Typography variant="body2">
                    <strong>{experience.productName}</strong>
                  </Typography>
                  <Typography variant="body2" color='#FFFFFFA3'>
                    {experience.description}
                  </Typography>
                  <Typography variant="body2" color='#FFFFFF70'>
                    {experience.technologies}
                  </Typography>
                </Box>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Experience;