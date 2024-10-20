import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid2,
  Button,
  Rating,
} from "@mui/material";
import { Banner } from "../../components/Banner/banner";
import freshimg from "../../assets/img/freshFruit.png";
import offer from "../../assets/img/offer.png";
import { Colors } from "../../Config/Colors";
import orange from "../../assets/img/orange.png";
import Organic from "../../assets/img/organicFood.png";
import message from "../../assets/img/message.png";
import { PorductsData } from "../../Data/Products";
import { Products } from "../../components/Products";
import { ButtonIconContained } from "../../assets/icons/button-contained-icon";
import Customer from "../../assets/img/customer.png";
import Customerbg from "../../assets/img/Customerbg.png";
import { CustomerData } from "../../Data/customer-data";
import { CustomerItems } from "../../components/CustomerItems";
import { CustomButton } from "../../components/Custom-button/custom-button";
import { YellowButtonIcon } from "../../assets/icons/yellow-button-icon";
import Nature from "../../assets/img/nature.png";
import { CategoriesData } from "../../Data/Categories-Data";
import { Category } from "../../components/CategoriesDataMap";
import { HomeComment } from "../../components/Home-comment";
import { CommentData } from "../../Data/Comment-data";

export const Home = () => {
  return (
    <>
      <Box mb={"154px"}>
        <Banner />
      </Box>
      <Box mb={"190px"}>
        <Container maxWidth="lg">
          <Stack direction={"row"} gap={"36px"}>
            <Box
              padding={"109px 0 127px 54px "}
              width={"682px"}
              sx={{
                backgroundImage: `url(${freshimg})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box width={"277px"}>
                <Typography
                  fontFamily={"Yellowtail"}
                  fontWeight={"400"}
                  color={Colors.white}
                  variant="h4"
                >
                  Natural!!
                </Typography>
                <Typography color={Colors.white} variant="h3">
                  Get Garden Fresh Fruits
                </Typography>
              </Box>
            </Box>
            <Box
              padding={"109px 0 127px 54px "}
              width={"682px"}
              sx={{
                backgroundImage: `url(${offer})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <Box width={"320px"}>
                <Typography
                  fontFamily={"Yellowtail"}
                  fontWeight={"400"}
                  color={Colors.lightGreen}
                  variant="h4"
                >
                  Offer!!
                </Typography>
                <Typography variant="h3">Get 10% off on Vegetables</Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box mb={"176px"} bgcolor={Colors.darkWhite} py={"132px"}>
        <Container maxWidth="lg">
          <Stack direction={"row"} alignItems={"center"}>
            <Box width={"700px"}>
              <img width={"100%"} src={orange} alt="#" />
            </Box>
            <Box width={"702px"}>
              <Typography
                mb={"8px"}
                color={Colors.lightGreen}
                fontFamily={"Yellowtail"}
                variant="h4"
              >
                About Us
              </Typography>
              <Typography mb={"14px"} variant="h2">
                We Believe in Working Accredited Farmers
              </Typography>
              <Typography mb={"46px"} variant="body1">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </Typography>
              <Stack
                gap={"19px"}
                direction={"row"}
                mb={"30px"}
                alignItems={"center"}
              >
                <Box>
                  <img src={Organic} alt="#" />
                </Box>
                <Box width={"444px"}>
                  <Typography mb={"7px"} variant="h6">
                    Organic Foods Only
                  </Typography>
                  <Typography variant="body1">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction={"row"}
                gap={"19px"}
                mb={"46px"}
                alignItems={"center"}
              >
                <Box>
                  <img src={message} alt="#" />
                </Box>
                <Box width={"444px"}>
                  <Typography mb={"7px"} variant="h6">
                    Quality Standards
                  </Typography>
                  <Typography variant="body1">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </Typography>
                </Box>
              </Stack>
              <Button variant="contained" endIcon={<ButtonIconContained />}>
                Shop Now
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box mb={"200px"}>
        <Container maxWidth={"lg"}>
          <Box textAlign={"center"} mb={"40px"}>
            <Typography
              fontFamily={"Yellowtail"}
              fontWeight={"400"}
              mb={"8px"}
              color={Colors.lightGreen}
              variant="h4"
            >
              Categories
            </Typography>
            <Typography variant="h2">Our Products</Typography>
          </Box>
          <Grid2 container spacing={"20px"}>
            {PorductsData.slice(0, 8).map((item) => (
              <Grid2 key={item.id}>
                <Products
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  cPrice={item.cPrice}
                  pPrice={item.pPrice}
                  rating={item.rating}
                  badge={item.badge}
                />
              </Grid2>
            ))}
          </Grid2>
          <Box mt={"122px"} textAlign={"center"}>
            <Button
              sx={{ height: "80px" }}
              variant="contained"
              endIcon={<ButtonIconContained />}
            >
              Load More
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        py={"164px"}
        sx={{
          backgroundImage: `url(${Customerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign={"center"}>
            <Typography
              mb={"8px"}
              color={Colors.lightGreen}
              fontFamily={"Yellowtail"}
              variant="h4"
              fontWeight={"400"}
            >
              Testimonial
            </Typography>
            <Typography variant="h2" mb={"60px"}>
              What Our Customer Saying?
            </Typography>
          </Box>
          <Box textAlign={"center"} width={"780px"} mx={"auto"}>
            <Box mb={"20px"}>
              <img src={Customer} alt="$" />
            </Box>
            <Box mb={"25px"}>
              <Rating value={5} readOnly />
            </Box>
            <Typography mb={"20px"} variant="body1">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </Typography>
            <Box mb={"129px"}>
              <Typography variant="h6">Sara Taylor</Typography>
              <Typography variant="body1">Consumer</Typography>
            </Box>
            <hr
              style={{ border: "1px solid #e0e0e0", marginBottom: "102px" }}
            />
          </Box>
          <Grid2 container spacing={"62px"} justifyContent={"center"}>
            {CustomerData.map((item) => (
              <Grid2 key={item.id}>
                <CustomerItems process={item.process} text={item.text} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Box py={"200px"} bgcolor={Colors.primary}>
        <Container maxWidth="lg">
          <Typography
            mb={"8px"}
            fontFamily={"Yellowtail"}
            fontWeight={"400"}
            color={Colors.lightGreen}
            variant="h4"
          >
            Offer
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={"50px"}
          >
            <Typography color={Colors.white} variant="h2">
              We Offer Organic For You
            </Typography>
            <Box>
              <CustomButton
                sx={{ height: "80px" }}
                endIcon={<YellowButtonIcon />}
                variant="contained"
              >
                View All Product
              </CustomButton>
            </Box>
          </Stack>
          <Grid2 container spacing={"20px"}>
            {PorductsData.slice(12, 16).map((item) => (
              <Grid2 key={item.id}>
                <Products
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  cPrice={item.cPrice}
                  pPrice={item.pPrice}
                  rating={item.rating}
                  badge={item.badge}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack width={"950px"} height={"931px"}>
            <img src={Nature} alt="img" />
          </Stack>
          <Stack position={"relative"} width={"50%"}>
            <Stack
              position={"absolute"}
              top={"50%"}
              left={"-100px"}
              maxWidth={"789px"}
              sx={{
                pl: "65px",
                pb: "77px",
                pr: "89px",
                pt: "76px",
                transform: "translateY(-50%)",
              }}
              borderRadius={"30px"}
              bgcolor="#fff"
            >
              <Typography
                fontFamily={"Yellowtail"}
                fontWeight={700}
                variant="h4"
                color={Colors.lightGreen}
              >
                Eco Friendly
              </Typography>
              <Typography mb={"35px"} variant="h2">
                Econis is a Friendly Organic Store
              </Typography>
              <Box>
                <Stack>
                  <Typography fontWeight={500} variant="h6">
                    Start with Our Company First
                  </Typography>
                  <Typography variant="body1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </Typography>
                </Stack>
                <Stack>
                  <Typography fontWeight={500} variant="h6">
                    Start with Our Company First
                  </Typography>
                  <Typography variant="body1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </Typography>
                </Stack>
                <Stack>
                  <Typography fontWeight={500} variant="h6">
                    Start with Our Company First
                  </Typography>
                  <Typography variant="body1">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box mb={"177px"} bgcolor={Colors.category} py={"187px"}>
        <Grid2 container textAlign={"center"} spacing={"42px"}>
          {CategoriesData.map((item) => (
            <Grid2 justifyContent={"space-between"} size={4} key={item.id}>
              <Category text={item.text} img={item.img} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Box mb={"253px"}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mb={"48px"}
          >
            <Box width={"1002px"}>
              <Typography
                mb={"8px"}
                fontWeight={"400"}
                fontFamily={"Yellowtail"}
                variant="h4"
                color={Colors.lightGreen}
              >
                News
              </Typography>
              <Typography variant="h2">
                Discover weekly content about organic food, & more
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{ height: "80px" }}
                endIcon={<YellowButtonIcon />}
                variant="outlined"
              >
                More News
              </Button>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"46px"}
            justifyContent={"center"}
          >
            {CommentData.slice(0, 2).map((item) => (
              <Box key={item.id}>
                <HomeComment
                  img={item.img}
                  text={item.text}
                  title={item.title}
                  badge={item.badge}
                  commentor={item.commentor}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
