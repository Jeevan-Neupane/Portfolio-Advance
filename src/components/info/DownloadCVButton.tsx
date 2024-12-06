import { DownloadButton, DownloadButtonDiv, IconDiv } from "./style";
import { FaDownload } from "react-icons/fa";
import cv from "../../assets/documents/jeevan_neupane_resume.pdf";

function DownloadCVButton() {
  return (
    <DownloadButtonDiv>
      <DownloadButton
        href={cv}
        target='_blank'
      >
        <span>Download CV</span>
        <IconDiv>
          <FaDownload />
        </IconDiv>
      </DownloadButton>
    </DownloadButtonDiv>
  );
}

export default DownloadCVButton;
