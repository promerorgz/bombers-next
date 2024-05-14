import React from "react";
import {
  MobileCard,
  MobileCardCta,
  MobileCardDescription,
  MobileCardTitle,
  MobileReelContainer,
} from "./styles";
import { Article } from "../../types/newsTypes";

const MobileReel = ({ articles }) => {
  return (
    <MobileReelContainer>
      {articles.map((article: Article) => {
        return (
          <MobileCard
            bg={article?.image?.formats.large.url}
            key={article.title}
          >
            <MobileCardDescription>
              <MobileCardTitle>{article.title}</MobileCardTitle>
              <MobileCardCta>Read More</MobileCardCta>
            </MobileCardDescription>
          </MobileCard>
        );
      })}
    </MobileReelContainer>
  );
};

export default MobileReel;
