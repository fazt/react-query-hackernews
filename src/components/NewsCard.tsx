import { Hit } from "../types/News";
import './NewsCard.css'

interface NewsCardProps {
  article: Hit;
}

function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="card">
      <h3>{article.title}</h3>
      <a href={article.url}>Read More</a>
    </div>
  );
}

export default NewsCard;
