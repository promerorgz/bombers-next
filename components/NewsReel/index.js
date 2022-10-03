import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import useFeatures from "hooks/useFeatures";
import { toNumber } from "lodash";
import { useState } from "react";
import {
  CarouselHero,
  Content,
  HeroTile,
  HeroTileDescription,
  HeroTileExplainer,
  HeroTileGradient,
  HeroTileImage,
  HeroTileImageContainer,
  HeroTileMeta,
  HeroTileTitle,
} from "./styles";
import { HeroTileSx, HeroTile_hover } from "./styles/HeroTile";
import { HeroTileTitleSx, HeroTileTitle_hover } from "./styles/HeroTileTitle";

const NewsReel = ({ articles }) => {
  const [active, setActive] = useState(1);
  const features = useFeatures(articles);
  console.log({ active });

  const handleHover = ({ currentTarget }) =>
    console.log("hovering", currentTarget.id) ||
    setActive(toNumber(currentTarget.id));
  return (
    <Content id="content">
      <main id="content-main">
        <CarouselHero id="carousel-hero">
          {features.map((article, i) => {
            const meta = [
              {
                name: "category",
                type: "categoryTag",
                content: article?.category?.name || "Story",
              },
              {
                name: "publishedAt",
                type: "dateTag",
                content: formatDistanceToNow(new Date(article?.publishedAt), {
                  addSuffix: true,
                  locale: {
                    ...enUS,
                    formatDistance: (unit, count) => {
                      switch (true) {
                        case unit === "xDays":
                          return `${count} d`;

                        case unit === "aboutXDays":
                          return `${count} d`;

                        case unit === "aboutXHours":
                          return `${count} h`;
                        case unit === "aboutXYears":
                          return `${count} h`;

                        case unit === "xMinutes":
                          return `${count} min`;

                        case unit === "xMonths":
                          return `${count} mo.`;

                        case unit === "xSeconds":
                          return "just now";

                        case unit === "xYears":
                          return `${count} y`;
                      }
                      return "%d hours";
                    },
                  },
                }),
              },
            ];

            console.log({ article });

            return (
              <HeroTile
                href={`articles/article/${article?.slug || 404}`}
                id={i}
                size={i === 0 ? "lg" : "sm"}
                key={article.slug}
                sx={HeroTileSx}
                _hover={HeroTile_hover}
              >
                <HeroTileImageContainer>
                  <HeroTileImage src={article?.image?.url || ""} />
                </HeroTileImageContainer>
                <HeroTileGradient />
                <HeroTileExplainer>
                  <HeroTileTitle
                    _hover={HeroTileTitle_hover}
                    sx={HeroTileTitleSx}
                    as="h4"
                  >
                    {article.title}
                  </HeroTileTitle>
                  <HeroTileDescription>
                    {article.description}
                  </HeroTileDescription>
                  <HeroTileMeta>
                    {meta.map((item) => (
                      <div className={item?.type || "dateTag"} key={item.name}>
                        {item.content}
                      </div>
                    ))}
                  </HeroTileMeta>
                </HeroTileExplainer>
              </HeroTile>
            );
          })}
        </CarouselHero>
      </main>
    </Content>
  );
};

export default NewsReel;
