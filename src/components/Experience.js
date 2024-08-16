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
      date: "January 2021 - January 2023",
      productName: "Senior Software Engineer",
      description: "Continued development and support for applications on Azure. Also started work on building data pipelines using spark.",
      technologies: ".NETCore • C# • SQL • Azure • Azure DevOps • Databricks • Git • Docker • PowerShell",
    },
    {
      date: "January 2020 - January 2021",
      productName: "Software Engineer",
      description: "Migrated 5 application and their CICD processes to Azure, and setup processes to run them on AzureBatch. Along with creating cross-platform C# applications using .NET Core, which would run in docker containers",
      technologies: ".NETCore • C# • SQL • Azure • Azure DevOps • Git • Docker • PowerShell",
    },
    {
      date: "June 2019 - January 2020",
      productName: "Associate Software Engineer",
      description: "Created cross-platform WPF and Console applications using .NET Core, which could run as standalone applications or with other Milliman products. They primarily analysed and grouped medical data to help organizations visualize the information and help make crucial business decisions.",
      technologies: ".NETCore • C# • SQL • TeamCity • SVN • PowerShell • Pascal",
    },
    {
      date: "May 2018 - June 2019",
      productName: "Trainee Software Engineer",
      description: "Created WPF and Console applications using .NET, which could run as standalone applications or with other Milliman products. They primarily analysed and grouped medical data to help organizations visualize the information and help make crucial business decisions.",
      technologies: ".NET • C# • SQL • TeamCity • SVN • PowerShell",
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