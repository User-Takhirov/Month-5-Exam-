import React from "react";
import AboutUsBg from "../../assets/img/aboutUsBg.png";
import {
  Box,
  Stack,
  Typography,
  Button,
  Container,
  Grid2,
} from "@mui/material";
import { Colors } from "../../Config/Colors";
import AboutHero from "../../assets/img/AboutHero.png";
import { LamborghiniIcon } from "../../assets/icons/lamborghini-icon";
import { Factoryicon } from "../../assets/icons/factory-icon";
import { ButtonIconContained } from "../../assets/icons/button-contained-icon";
import { CircleIcon } from "../../assets/icons/circle-icon";
import adsWhyChooseUs from "../../assets/img/adsWhyChooseUs.png";
import { AboutAds } from "../../components/About-Ads";
import { AboutExperts } from "../../components/About-experts/about-experts";
import { AboutUsOffer } from "../../Data/About-us-offer";
import { AboutOffer } from "../../components/about-offer";
import { ExportData } from "../../Data/ExportsData";
export const About = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${AboutUsBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: "184px",
          mb: "68px",
        }}
      >
        <Typography textAlign={"center"} variant="h1">
          About Us
        </Typography>
      </Box>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"40px"}
        >
          <Stack width={"976px"} height={"929px"}>
            <img src={AboutHero} alt="img" />
          </Stack>
          {/* <Stack position={"relative"} width={"50%"}> */}
          <Stack
            // position={"absolute"}
            top={"50%"}
            maxWidth={"671px"}
            sx={
              {
                // transform: "translateY(-50%)",
              }
            }
            borderRadius={"30px"}
          >
            <Typography
              fontFamily={"Yellowtail"}
              fontWeight={400}
              variant="h4"
              mb={"8px"}
              color={Colors.lightGreen}
            >
              About Us
            </Typography>
            <Typography mb={"14px"} variant="h2">
              We do Creative Things for Success
            </Typography>
            <Box>
              <Stack mb={"35px"}>
                <Typography variant="body1">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </Typography>
              </Stack>
              <Stack mb={"35px"}>
                <Typography variant="body1">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={"65px"}
                mb={"58px"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
                  <LamborghiniIcon />
                  <Typography
                    width={"226px"}
                    fontWeight={"600"}
                    fontSize={"24px"}
                    variant="h6"
                  >
                    Modern Agriculture Equipment
                  </Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
                  <Factoryicon />
                  <Typography
                    width={"226px"}
                    fontWeight={"600"}
                    fontSize={"24px"}
                    variant="h6"
                  >
                    No growth hormones are used
                  </Typography>
                </Stack>
              </Stack>
              <Box>
                <Button variant={"contained"} endIcon={<ButtonIconContained />}>
                  Explore More
                </Button>
              </Box>
            </Box>
          </Stack>
          {/* </Stack> */}
        </Stack>
      </Box>
      <Box bgcolor={Colors.darkWhite} mb={"177px"} py={"190px"}>
        <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            mb={"91px"}
            gap={"51px"}
          >
            <Box width={"671px"}>
              <Box width={"574px"} mb={"25px"}>
                <Typography
                  fontWeight={"400"}
                  mb={"6px"}
                  variant="h4"
                  color={Colors.lightGreen}
                  fontFamily={"YellowTail"}
                >
                  Why Choose us?
                </Typography>
                <Typography variant="h3">
                  We do not buy from the open market & traders.
                </Typography>
              </Box>
              <Typography mb={"36px"} variant="body1">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </Typography>
              <Box>
                <Stack
                  mb={"12px"}
                  direction={"row"}
                  gap={"7px"}
                  alignItems={"center"}
                  bgcolor={Colors.lighterGrey}
                  borderRadius={"50px"}
                  width={"339px"}
                  p={"29px 75px 29px 52px"}
                >
                  <CircleIcon />
                  <Typography
                    fontWeight={"600"}
                    fontSize={"18px"}
                    variant="body1"
                    width={"193px"}
                    whiteSpace={"nowrap"}
                  >
                    100% Natural Product
                  </Typography>
                </Stack>
                <Typography
                  ml={"60px"}
                  mb={"24px"}
                  width={"444px"}
                  variant="body1"
                >
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </Typography>
              </Box>
              <Box>
                <Stack
                  mb={"12px"}
                  direction={"row"}
                  gap={"7px"}
                  alignItems={"center"}
                  bgcolor={Colors.lighterGrey}
                  borderRadius={"50px"}
                  width={"339px"}
                  p={"29px 75px 29px 52px"}
                >
                  <CircleIcon />
                  <Typography
                    fontWeight={"600"}
                    fontSize={"18px"}
                    variant="body1"
                    width={"193px"}
                    whiteSpace={"nowrap"}
                  >
                    Increases resistance
                  </Typography>
                </Stack>
                <Typography
                  ml={"60px"}
                  mb={"24px"}
                  width={"444px"}
                  variant="body1"
                >
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </Typography>
              </Box>
            </Box>
            <Box>
              <img src={adsWhyChooseUs} alt="#" />
            </Box>
          </Stack>
          <AboutAds />
        </Container>
      </Box>
      <Box mb={"202px"}>
        <Container maxWidth={"lg"}>
          <Box width={"852px"} mx={"auto"} textAlign={"center"}>
            <Typography
              fontWeight={"400"}
              color={Colors.lightGreen}
              variant="h4"
              fontFamily={"YellowTail"}
            >
              Team
            </Typography>
            <Typography mb={"16px"} variant="h2">
              Our Organic Experts
            </Typography>
            <Typography mb={"42px"} variant="body1">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>
          </Box>
          <Box>
            <Grid2 container spacing={"25px"}>
              {ExportData.slice(0, 3).map((item) => (
                <Grid2 size={4} key={item.id}>
                  <AboutExperts
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Container>
      </Box>
      <Box mb={"141px"} py={"188px"} bgcolor={Colors.primary}>
        <Box textAlign={"center"} mb={"33px"}>
          <Typography
            color={Colors.lightGreen}
            variant="h4"
            fontWeight={"400"}
            mb={"8px"}
            fontFamily={"YellowTail"}
          >
            About Us
          </Typography>
          <Typography color={Colors.white} variant="h2">
            What We Offer for You
          </Typography>
        </Box>
        <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            gap={"21px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {AboutUsOffer.map((item) => (
              <Stack direction={"row"} key={item.id}>
                <AboutOffer img={item.img} text={item.text} />
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
