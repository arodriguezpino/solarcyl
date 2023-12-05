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
import { useTranslation } from "react-i18next";

const CalculatorPage = () => {
  const [consumption, setConsumption] = useState(0.0);
  const [dailyPotential, setDailyPotential] = useState(0.0);
  const totalPanels = Math.ceil(consumption / (dailyPotential * 30)) | 0;
  const { t } = useTranslation("translations");
  const tPrefix = "pages.calculator";

  return (
    <>
      <Title
        title={t(`${tPrefix}.title`)}
        subtitle={t(`${tPrefix}.subtitle`)}
      />
      <div className="p-3">
        <h5 className="fw-bold">{t(`${tPrefix}.accordion.tooltip`)}</h5>
        <Accordion>
          <AccordionItem eventKey="0">
            <Accordion.Header>
              <p className="fw-bold">{t(`${tPrefix}.accordion.item1.title`)}</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{t(`${tPrefix}.accordion.item1.content`)}</p>
              <InputGroup>
                <InputGroup.Text>
                  {t(`${tPrefix}.accordion.units`)}
                </InputGroup.Text>
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
              <p className="fw-bold">{t(`${tPrefix}.accordion.item2.title`)}</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{t(`${tPrefix}.accordion.item2.content`)}</p>
              <InputGroup>
                <InputGroup.Text>
                  {t(`${tPrefix}.accordion.units`)}
                </InputGroup.Text>
                <Form.Control
                  min={0}
                  step={"any"}
                  type="number"
                  aria-label="Introduce tu consumo"
                  placeholder={t(`${tPrefix}.accordion.item2.placeholder`)}
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
              <p className="fw-bold">{t(`${tPrefix}.accordion.item3.title`)}</p>
            </Accordion.Header>
            <Accordion.Body>
              <p>{t(`${tPrefix}.accordion.item3.content`)}</p>
              <ol>
                <li>
                  {t(`${tPrefix}.accordion.item3.step1`)}
                  <pre>
                    {dailyPotential} * 30 = {dailyPotential * 30}
                  </pre>
                </li>
                <li>
                  {t(`${tPrefix}.accordion.item3.step2`)}
                  <pre>
                    {consumption} / {dailyPotential * 30} = {totalPanels}
                  </pre>
                </li>
                <p>
                  {totalPanels}, {t(`${tPrefix}.accordion.item3.step3`)}
                </p>
                <p style={{ fontSize: "14px" }}>
                  {t(`${tPrefix}.accordion.item3.advise`)}
                </p>
              </ol>
            </Accordion.Body>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CalculatorPage;
