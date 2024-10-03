import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type ProgressProps = {
  percentage: number;
};

function Progress({ percentage }: ProgressProps) {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
    
        pathColor: "green",
        textColor:"green",
        
      })}
    />
  );
}

export default Progress;
