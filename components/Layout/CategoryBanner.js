import styled from "styled-components";
import tw from "twin.macro";

const CategoryBannner = (props) => {
  return (
    <Wrapper>
        <CategoryTitleContainer>
            <CategoryTitle>
                {props.categoryTitle}
            </CategoryTitle>
        </CategoryTitleContainer>
      <CardsContainer>
        {props.cards.map((card) => (
          <>
            <CardItem>{card}</CardItem>
          </>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${tw`flex flex-col`}
`;
const CategoryTitleContainer = styled.div`
  ${tw`mb-4`}
`;
const CategoryTitle = styled.p`
  ${tw`mx-2 text-2xl`}
`;
const CardsContainer = styled.ul`
  ${tw`flex flex-row`}
`;
const CardItem = styled.li`
  ${tw`mx-2`}
`;


export default CategoryBannner;
