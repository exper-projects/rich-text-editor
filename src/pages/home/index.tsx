import {
  Button,
  LetterBoldIcon,
  LetterItalicIcon,
  LetterUnderlineIcon,
  LinkIcon,
} from "@usy-ui/base";

import {
  EditableBox,
  EditorContainer,
  ToolBox,
  Separator,
} from "./styled.components";

export const Home = () => {
  const handleStyleClick = (tagName: string) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const boldNode = document.createElement(tagName);
    range.surroundContents(boldNode);
  };

  return (
    <EditorContainer>
      <ToolBox>
        <Button
          variant="normal"
          size="small"
          onClick={() => handleStyleClick("i")}
          noSole
        >
          <LetterItalicIcon />
        </Button>
        <Button
          variant="normal"
          size="small"
          onClick={() => handleStyleClick("b")}
          noSole
        >
          <LetterBoldIcon />
        </Button>
        <Button variant="normal" size="small" noSole>
          <LetterUnderlineIcon />
        </Button>
        <Separator />
        <Button variant="normal" size="small" noSole>
          <LinkIcon />
        </Button>
      </ToolBox>
      <EditableBox contentEditable>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry is standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </EditableBox>
    </EditorContainer>
  );
};
