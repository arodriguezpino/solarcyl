import {
  Accordion,
  AccordionItem,
  Form,
  Image,
  InputGroup,
} from "react-bootstrap";
import Title from "../../title/Title";
import SpainMapImage from "../../../assets/images/potencial_fotovoltaico_espana.png";
import { useState } from "react";

const CalculatorPage = () => {
  const [consumption, setConsumption] = useState(0.00);
  const [dailyPotential, setDailyPotential] = useState(0.00);
  const totalPanels = Math.ceil(consumption / (dailyPotential * 30)) | 0;

  return (
    <>
      <Title
        title="Calculadora"
        subtitle="Aquí podras informarte de cuantas placas solares harían falta en tu casa para poder realizar una transición energética ecológica."
      />
      <div className="p-3">
        <h5 className="fw-bold">Realiza los siguientes pasos : </h5>
        <Accordion>
          <AccordionItem eventKey="0">
            <Accordion.Header>
              <p className="fw-bold">Determina tu consumo</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Consulta tu consumo energético: Analizando tus facturas de
                electricidad podrás conocer tu consumo promedio mensual en
                kilovatios-hora (KWh).
              </p>
              <InputGroup>
                <InputGroup.Text>KWh</InputGroup.Text>
                <Form.Control
                  min={0}
                  type="number"
                  aria-label="Introduce tu consumo"
                  onChange={(e) => setConsumption(parseInt(e.target.value, 0))}
                />
              </InputGroup>
            </Accordion.Body>
          </AccordionItem>
          <AccordionItem eventKey="1">
            <Accordion.Header>
              <p className="fw-bold">
                Consulta el potencial fotovoltaico de tu zona
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                En la siguiente imágen podrás ver un mapa con la el potencial
                fotovoltaico de toda la superficie Española. En la leyenda
                encontrarás el total diario según el color de tu zona.
              </p>
              <InputGroup>
                <InputGroup.Text>KWh</InputGroup.Text>
                <Form.Control
                  min={0}
                  step={"any"}
                  type="number"
                  aria-label="Introduce tu consumo"
                  placeholder="Escribe el promedio diario de tu zona"
                  onChange={(e) =>
                    setDailyPotential(parseInt(e.target.value, 0))
                  }
                />
              </InputGroup>
              <a
                className="d-flex justify-content-center align-items-center"
                href={SpainMapImage}
                target="_blank"
              >
                <Image
                  src={SpainMapImage}
                  fluid
                  rounded
                  style={{ width: "50%" }}
                />
              </a>
            </Accordion.Body>
          </AccordionItem>
          <AccordionItem eventKey="2">
            <Accordion.Header>
              <p className="fw-bold">Realiza el calculo</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>Para realizar el calculo realizaremos lo siguiente</p>
              <ol>
                <li>Determinar cuantos KWh se producirán en tu zona mensualmente con un solo panel : <pre>{dailyPotential} * 30 = {dailyPotential * 30}</pre></li>
                <li>Ahora calcularemos cuantos paneles necesiarás sabiendo tu gasto mensual : <pre>{consumption} / {dailyPotential * 30} = {totalPanels}</pre></li>
                <p>{totalPanels}, son la cantidad de paneles solares que se necesitan para cubrir sus gastos.</p>
                <p style={{fontSize: "14px"}}>*Se redondea al alza</p>
              </ol>
            </Accordion.Body>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CalculatorPage;
