import Title from "../../title/Title"
import './Documentation.page.css'
import pdf from '../../../assets/docs/Memoria_Solarcyl_Alvaro_Rodriguez_Pino.pdf'
import { PDFViewer } from "./components/PDFViewer"

export const Documentation = () => {
  return (
    <>
        <Title title="Documentación" subtitle="Memoria del proyecto"/>
        <PDFViewer fileUrl={pdf}/>

    </>
  )
}
