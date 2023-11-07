interface TitleProps {
  title: string;
  subtitle?: string;
}

export const Title = (props: TitleProps) => {
  return (
    <div className="py-3 header m-3">
      <h1 className="text-center mx-auto mt-3">{props.title}</h1>
      {props.subtitle && (
        <h4 className="text-center mx-auto mt-3">{props.subtitle}</h4>
      )}
    </div>
  );
};
