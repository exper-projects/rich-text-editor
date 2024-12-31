import { usyColor } from "@usy-ui/base";
import styled from "styled-components";

export const EditorContainer = styled.main`
  max-width: 500px;
  outline: none;
  margin: 0 auto;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
`;

export const ToolBox = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6px;
  border: 1px solid ${usyColor.light2};
  border-radius: 4px;
  padding: 6px;
  margin-bottom: 20px;
`;

export const Separator = styled.div`
  width: 0;
  border-left: 1px solid ${usyColor.light2};
  margin: 0 4px;
`;

export const EditableBox = styled.div`
  min-height: 200px;
  border: 1px solid ${usyColor.light2};
  outline: none;
  border-radius: 4px;
  padding: 20px;

  &:focus-visible {
    border: 1px solid ${usyColor.light2};
  }
`;
