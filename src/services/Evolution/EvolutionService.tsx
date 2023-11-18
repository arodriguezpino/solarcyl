import { MonthlyFee, Provincia } from "./MonthlyFee.model";

class EvolutionService {
  private monthlyFee: MonthlyFee[] = [];
  private url =
    "https://datosabiertos.jcyl.es/web/jcyl/risp/es/energia/consumo-electricidad-mensual/1284978851890.json";

  fetchData = async () => {
    await fetch(this.url)
      .then(async (response) => await response.json())
      .then((data) => (this.monthlyFee = data))
      .catch((error) => console.error(error));
  };

  filterByProvince = async (provincia: Provincia) => {
    if (!this.monthlyFee) await this.fetchData();
    return this.monthlyFee.filter(
      (month) => month.fields.provincia === provincia
    );
  };

  getTotalByProvince = async (provincia: Provincia): Promise<number> => {
    await this.fetchData();
    return this.monthlyFee
      .filter((month) => month.fields.provincia === provincia)
      .reduce((total, month) => total + month.fields.consumo_kwh, 0);
  };

  getTotalProvinces = async () => {
    const provinces = [
      Provincia.Valladolid,
      Provincia.Palencia,
      Provincia.León,
      Provincia.Burgos,
      Provincia.Salamanca,
      Provincia.Segovia,
      Provincia.Soria,
      Provincia.Ávila,
      Provincia.Zamora,
    ];

    const totalPromises = provinces.map(async (province) => {
      const total = await this.getTotalByProvince(province);
      return { province, total };
    });

    return Promise.all(totalPromises);
  };
}

export default new EvolutionService();
