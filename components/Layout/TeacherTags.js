import styled, { css } from "styled-components";
import tw from "twin.macro";

const TeacherTags = (props) => {
  return (
    <TagsContainer>
      {props.tags.map((tag) => (
        <TagTiTle>
          <p>{tag}</p>
        </TagTiTle>
      ))}
    </TagsContainer>
  );
};
const TagContainer = styled.div`
  ${tw``}
`;
const TagTitle = styled.p`
  ${tw``}
`;
const TagsContainer = styled.div`
  ${tw`mt-2 grid grid-flow-row md:(grid-cols-2 grid-rows-1)`}
`;
const TagTiTle = styled.div`
  ${tw`m-1 bg-blue-100 flex inline text-center rounded-3xl px-2`}
  & p {
    ${tw`text-sm `}
  }
`;
export default TeacherTags;
