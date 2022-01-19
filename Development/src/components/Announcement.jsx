import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #7e1e46;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Weekly Deal ! Free Shipping on Orders Over 1,500 ฿</Container>
  );
};

export default Announcement;
