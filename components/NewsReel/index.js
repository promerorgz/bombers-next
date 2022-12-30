import useFeatures from "hooks/useFeatures";
import { formatDistance } from "date-fns";
import Link from "next/link";
import {
  ContentTag,
  ContentTime,
  HeroContainer,
  HeroTile,
  HeroTileDescription,
  HeroTileGradient,
  HeroTileImage,
  HeroTileImageContainer,
  HeroTileMeta,
  HeroTileMetaData,
  HeroTileTitle,
  HeroTitleExplainer,
} from "./styles";
import { AiOutlineClockCircle } from "react-icons/ai";

const NewsReel = ({ articles }) => {
  const features = useFeatures(articles);
  const reduceFormats = (formats) =>
    Object.entries(formats).reduce((acc, [k, v]) => {
      return [...acc, { format: k, ...v }];
    }, []);

  return (
    <HeroContainer id="hero-container">
      {features.map((feature, i) => {
        return (
          <Link
            href={`/articles/${feature.category.name}/${feature.slug}`}
            passHref
            key={feature.name}
          >
            <HeroTile>
              <HeroTileImageContainer>
                {reduceFormats(feature.image.formats).map((format) => {
                  return (
                    <source
                      key={format.format}
                      srcSet={`${format.url} 2x`}
                    ></source>
                  );
                })}
                <HeroTileImage src={feature?.image?.url}></HeroTileImage>
              </HeroTileImageContainer>
              <HeroTitleExplainer>
                <HeroTileTitle className="hero_tile__title">
                  {feature.title}
                </HeroTileTitle>
                <HeroTileDescription className="hero_tile__description">
                  {feature.description}
                  <HeroTileMeta>
                    <HeroTileMetaData>
                      <ContentTag>{feature.category.name}</ContentTag>
                      <ContentTime className="contentTimeDate">
                        <AiOutlineClockCircle className="contentTimeIcon" />
                        {formatDistance(
                          new Date(feature?.publishedAt),
                          new Date(),
                          { addSuffix: true }
                        )}
                      </ContentTime>
                    </HeroTileMetaData>
                  </HeroTileMeta>
                </HeroTileDescription>
              </HeroTitleExplainer>
              <HeroTileGradient />
            </HeroTile>
          </Link>
        );
      })}
    </HeroContainer>
  );
};

export default NewsReel;
