import Title from "../../title/Title";
import { ChartWrapper } from "./components/ChartWrapper";
import EvolutionService from "../../../services/Evolution/EvolutionService";
import { useEffect, useState } from "react";
import { TotalConsumption } from "../../../services/Evolution/MonthlyFee.model";
import { Alert, AlertHeading, Container } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { LoadingSpinner } from "../../spinner/LoadingSpinner";

const EvolutionPage = () => {
  const [totalConsumption, setTotalConsumption] = useState<TotalConsumption[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTotalConsumption = async () => {
      const data = await EvolutionService.getTotalProvinces();
      setTotalConsumption(data);
      setIsLoading(false);
    };
    getTotalConsumption();
  }, []);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  const provinces = totalConsumption.map((result) => result.province);
  const totals = totalConsumption.map((result) => result.total);

  const data = {
    labels: provinces,
    datasets: [
      {
        label: "Energía consumida por provincia en KWh",
        data: totals,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <>
      <Title
        title="Evolución"
        subtitle="Esta es la evolución que ha tenido la energía renovable en nuestro país"
      />
      <Container>
        <Alert variant="warning">
          <AlertHeading>Aviso importante</AlertHeading>
          <p>
            Configuraciones de restricción en el navegador podrían afectar a
            esta página.
          </p>
        </Alert>
      </Container>
      <ChartWrapper
        title="Consumo por provincia 2023"
        description="En el siguiente gráfico podemos observar el consumo total que ha gastado cada provincia de Castilla y León, el total representa el sumatorio de todos los sectores del mercado, en el mes actual"
        element={
          isLoading ? <LoadingSpinner /> : <Bar data={data} options={options} />
        }
      />
    </>
  );
};

export default EvolutionPage;
