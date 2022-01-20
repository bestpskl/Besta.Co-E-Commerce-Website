import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 50px;
  font-weight: 100;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: flex-start;
`;

const Filter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 7px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  flex: 1;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  margin: 0px 100px;
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="./assets/single-product.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>BESTA DENIM JACKET</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            eum dicta tempora facere, non, nam vero, dolor maiores neque a
            cupiditate dolorum quam quo sint repudiandae. Cumque excepturi enim
            at. Animi eligendi, qui in tempore facilis rem molestias obcaecati
            dolore voluptatum, atque minus! Aperiam nobis voluptatum iure aut
            quos quibusdam quaerat ullam?
          </Desc>
          <Price>1,490 ฿</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#527487" />
              <FilterColor color="#0F1E25" />
              <FilterColor color="#E5E6E5" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
