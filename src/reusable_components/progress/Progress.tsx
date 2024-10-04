import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ProgressProps = {
  percentage: number;
  width: string;
  color: string;
  textSize: string;
};

function Progress({ percentage, width, color, textSize }: ProgressProps) {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={{
        root: {
          width: `${width}`,
        },
        path: {
          stroke: `${color}`,
          strokeLinecap: "butt",
          transition: "stroke-dashoffset 0.5s ease 0s",
        },
        text: {
          fill: "green",
          fontSize: `${textSize}`,
        },
      }}
    />
  );
}

export default Progress;
