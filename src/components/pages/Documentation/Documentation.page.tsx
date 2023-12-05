import Title from "../../title/Title";
import "./Documentation.page.css";
import pdf from "../../../assets/docs/Memoria_Solarcyl_Alvaro_Rodriguez_Pino.pdf";
import { PDFViewer } from "./components/PDFViewer";
import { useTranslation } from "react-i18next";

export const Documentation = () => {
  const { t } = useTranslation("translations");
  const tPrefix = "pages.documentation";
  return (
    <>
      <Title
        title={t(`${tPrefix}.title`)}
        subtitle={t(`${tPrefix}.subtitle`)}
      />
      <PDFViewer fileUrl={pdf} />
    </>
  );
};
