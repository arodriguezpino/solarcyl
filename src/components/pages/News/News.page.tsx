import { useEffect, useState } from "react";
import { NewsCard } from "./components/NewsCard";
import { NewsObj } from "../../../services/News/NewsService";
import Title from "../../title/Title";
import { Carousel } from "react-bootstrap";
import "./News.page.css";

const NewsPage = () => {
  const [news, setNews] = useState<NewsObj>();

  useEffect(() => {
    fetch(
      "https://api.bing.microsoft.com/v7.0/news/search?q=placas+fotovoltaicas&mkt=es-ES",
      {
        headers: new Headers({
          "Ocp-Apim-Subscription-Key": "51b00ba9630546c889003f7f63d65724",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Title
        title="Noticias"
        subtitle="Noticias más relevantes acerca de placas fotovoltaicas y energias renovables"
      />
      <div className="container p-3">
        <Carousel>
          {news?.value &&
            news?.value.map((value, index) => (
              <Carousel.Item>
                <NewsCard
                  img={value.image?.thumbnail.contentUrl || ""}
                  title={value.name}
                  url={value.url}
                  key={index}
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default NewsPage;
