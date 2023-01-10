import NewsCard from "./NewsCard";
import { Hit } from "../types/News";

interface NewsListProps {
  news: Hit[];
}

function NewsList({ news }: NewsListProps) {
  return (
    <div>
      {news.map((hit) => (
        <NewsCard article={hit} key={hit.objectID} />
      ))}
    </div>
  );
}

export default NewsList;
