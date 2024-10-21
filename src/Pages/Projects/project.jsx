import { Grid2, Container, Typography, Box } from "@mui/material";
import React from "react";
import { ExportData } from "../../Data/ExportsData";
import { AboutExperts } from "../../components/About-experts/about-experts";
import { Colors } from "../../Config/Colors";
import OurTeam from "../../assets/img/ourTeamBg.png";
export const Team = () => {
  return (
    <>
      <Box mb={"120px"}>
        <Box
          sx={{
            backgroundImage: `url(${OurTeam})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
            py: "180px",
            mb: "150px",
          }}
        >
          <Typography variant="h1">Our Team</Typography>
        </Box>
        <Box width={"852px"} mb={"42px"} mx={"auto"} textAlign={"center"}>
          <Typography
            variant="h4"
            color={Colors.lightGreen}
            fontFamily={"YellowTail"}
          >
            Team
          </Typography>
          <Typography mb={"16px"} variant="h2">
            Our Organic Experts
          </Typography>
          <Typography variant="body1">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Typography>
        </Box>
        <Box>
          <Container maxWidth="lg">
            <Grid2 container spacing={"25px"}>
              {ExportData.map((item) => (
                <Grid2 key={item.id}>
                  <AboutExperts
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </Box>
      </Box>
    </>
  );
};
