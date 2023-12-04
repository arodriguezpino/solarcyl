import arrowSvg from "../../assets/icons/arrow-right.svg";
import "./IconWithText.css";

interface IconWithTextProps {
  icon: string;
  text: string;
  link: string;
}

export const IconWithText = ({ icon, text, link }: IconWithTextProps) => {
  return (
    <div className="mb-3">
      <a href={link} className="no-link" target="_blank">
        <div className="rounded border p-2 row icon-with-text align-middle">
          <div className="col-2 align-self-center">
            <img src={icon} alt="" width={"84px"} />
          </div>
          <div className="col-5 align-self-center">
            <div className="no-link">{text}</div>
          </div>
          <div className="col-3 align-self-center" id="arrow">
            <img src={arrowSvg} alt="" />
          </div>
        </div>
      </a>
    </div>
  );
};
