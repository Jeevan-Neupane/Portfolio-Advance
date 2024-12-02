import { DownloadButton, DownloadButtonDiv, IconDiv } from "./style";
import { FaDownload } from "react-icons/fa";

function DownloadCVButton() {
  return (
    <DownloadButtonDiv>
      <DownloadButton href='https://www.google.com'>
        <span>Download CV</span>
        <IconDiv>
          <FaDownload />
        </IconDiv>
      </DownloadButton>
    </DownloadButtonDiv>
  );
}

export default DownloadCVButton;
