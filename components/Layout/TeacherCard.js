import styled, { css } from "styled-components";
import tw from "twin.macro";
import TeacherTags from "./TeacherTags";
import RatingStar from "./RatingStar";
const TeacherCard = (props) => {
  return (
    <Container>
      <TopContainer>
        <SubjectTitle>
          <p>{props.title}</p>
        </SubjectTitle>
        <RatingContainer>
          <TotalReviewers>{props.totalReviewers}</TotalReviewers>
          <RatingStar />
        </RatingContainer>
      </TopContainer>
      <TeacherImage src={props.image} height="100px" width="100p" />
      <TeacherTags tags={["7+ years", "expert"]} />
    </Container>
  );
};
const Container = styled.div`
  ${tw`border-2 p-4 rounded`}
`;
const SubjectTitle = styled.div`
  ${tw``}
  & p {
    ${tw``}
  }
`;
const TeacherImage = styled.img`
  ${tw`mx-auto`}
`;
const TotalReviewers = styled.p`
  ${tw`text-sm mr-0`}
`;
const TopContainer = styled.div`
  ${tw`flex flex-row justify-between mb-2`}
`;
const RatingContainer = styled.div`
  ${tw`flex flex-row`}
`;
export default TeacherCard;
