import { ReactNode } from "react";

interface ChartWrapperProps {
  title: string;
  description: string;
  element: ReactNode;
}

export const ChartWrapper = (props: ChartWrapperProps) => {
  return (
    <div className="border border-danger rounded m-4 row">
      <div className="col-md-3 border text-center">
        <h5 className="fw-bold">{props.title}</h5>
        <p>{props.description}</p>
      </div>
      <div className="col-md-9 border d-flex align-items-center justify-content-center">
        {props.element}
      </div>
    </div>
  );
};
