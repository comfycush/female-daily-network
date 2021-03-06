import "./App.css";
import {
  Articles,
  BottomFrame,
  BrandImages,
  BrandImg,
  Container,
  ContentContainer,
  EditorChoiceCards,
  InternalCampaignBanner,
  InternalCampaignBannerText,
  LatestReviewContainer,
  LatestReviewHeader,
  MR2Banner,
  MR2BannerText,
  MyMatches,
  MyMatchesCards,
  MyMatchesContainer,
  MyMatchesCTA,
  MyMatchesInnerContainer,
  MyMatchesSubtitle,
  MyMatchesText,
  MyyMatchesTitle,
  PopularGroupsCards,
  Section,
  TrendingCardSliderWrapper,
  VideoGrid,
} from "./styled/shared/styles";
import Navbar from "./components/NavBar/Navbar";
import TopAd from "./components/TopAd/TopAd";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import EditorChoiceCard from "./components/EditorChoiceCard/EditorChoiceCard";
import MyMatchesCard from "./components/MyMatchesCard/MyMatchesCard";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import Slider from "react-slick";
import React, { useEffect, useRef, useState } from "react";
import PopularGroupCard from "./components/PopularGroupCard/PopularGroupCard";
import avatar10 from "./assets/images/avatars/10.jpeg";
import avatar9 from "./assets/images/avatars/9.jpeg";
import avatar8 from "./assets/images/avatars/8.jpg";
import avatar11 from "./assets/images/avatars/11.jpeg";
import VideoItem from "./components/VideoItem/VideoItem";
import TrendingCard from "./components/TrendingCard/TrendingCard";
import niveaLogo from "./assets/images/brands/nivea.png";
import theOrdinaryLogo from "./assets/images/brands/the-ordinary.png";
import theBodyShopLogo from "./assets/images/brands/the-body-shop.png";
import skiiLogo from "./assets/images/brands/skii.png";
import maybellineLogo from "./assets/images/brands/maybelline.png";
import innisfreeLogo from "./assets/images/brands/innisfree.png";
import PreFooter from "./components/PreFooter/PreFooter";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getDataAsync } from "./store/data/dataActions";
import CarouselControl from "./components/CarouselControl/CarouselControl";

const videoSources = [
  {
    src: "https://www.youtube.com/embed/pVE92TNDwUk",
  },
  {
    src: "https://www.youtube.com/embed/hnp1pt8biD4",
  },
  {
    src: "https://www.youtube.com/embed/ni5hRK1ehzk",
  },
];
function App() {
  const dispatch = useDispatch();
  const {
    "editor's choice": editorsChoiceList,
    "latest articles": latestArticleList,
    "latest review": latestReviewList,
  } = useSelector(({ data }) => data.data);

  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });
  const [reviewCurrentSlide, setReviewCurrentSlide] = useState(0);
  const [trendingCurrentSlide, setTrendingCurrentSlide] = useState(0);

  const trendingCardMultiplier = 13;

  const latestReviewSliderSettings = {
    slidesToShow: 2,
    infinite: false,
    dots: false,
    arrows: false,
    swipe: false,
  };

  const trendingSliderSettings = {
    slidesToShow: 6,
    infinite: false,
    dots: false,
    arrows: false,
    slidesToScroll: 6,
    swipe: false,
  };

  const reviewSlider = useRef();
  const trendingSlider = useRef();

  useEffect(() => {
    setState({
      nav1: reviewSlider.current,
      nav2: trendingSlider.current,
    });
  }, []);

  // Fetch data
  useEffect(() => {
    dispatch(getDataAsync.request());
  }, [dispatch]);

  const { nav1, nav2 } = state;

  const handleNextReview = () => {
    if (!!latestReviewList && reviewCurrentSlide < latestReviewList.length) {
      setReviewCurrentSlide(
        reviewCurrentSlide + latestReviewSliderSettings.slidesToShow
      );
      reviewSlider.current.slickNext();
    }
  };
  const handlePreviousReview = () => {
    if (reviewCurrentSlide > 0) {
      setReviewCurrentSlide(
        reviewCurrentSlide - latestReviewSliderSettings.slidesToShow
      );
      reviewSlider.current.slickPrev();
    }
  };
  const handleClickDotReview = (e) => {
    setReviewCurrentSlide(e);
    reviewSlider.current.slickGoTo(e);
  };

  const handleNextTrending = () => {
    if (trendingCurrentSlide < trendingCardMultiplier - 1) {
      setTrendingCurrentSlide(
        trendingCurrentSlide + trendingSliderSettings.slidesToShow
      );
      trendingSlider.current.slickNext();
    }
  };
  const handlePreviousTrending = () => {
    if (trendingCurrentSlide > 0) {
      setTrendingCurrentSlide(
        trendingCurrentSlide - trendingSliderSettings.slidesToShow
      );
      trendingSlider.current.slickPrev();
    }
  };
  const handleClickDotTrending = (e) => {
    setTrendingCurrentSlide(e);
    trendingSlider.current.slickGoTo(e);
  };

  return (
    <Container>
      <Navbar />

      <ContentContainer>
        <TopAd />

        {/* Editor's Choice */}
        <Section>
          <SectionHeader
            title={"Editor's Choice"}
            subtitle={"Curated with love"}
          />
          <EditorChoiceCards>
            {editorsChoiceList.map((v, i) => (
              <EditorChoiceCard
                key={i}
                name={v.editor}
                role={v.role}
                score={v.product ? v.product.rating : 0}
                productImage={v.product ? v.product.image : ""}
                description={v.product ? v.product.description : ""}
                productName={v.product ? v.product.name : ""}
              />
            ))}
          </EditorChoiceCards>
        </Section>
      </ContentContainer>

      {/* My Matches */}
      <MyMatches>
        <MyMatchesContainer>
          <MyMatchesInnerContainer>
            <MyMatchesText>
              <MyyMatchesTitle>
                Looking for products that are just simply perfect for you?
              </MyyMatchesTitle>
              <MyMatchesSubtitle>
                Here are some products that we believe match your skin, hair,
                and body! Have we mentioned that they solve your concerns too?
              </MyMatchesSubtitle>
              <MyMatchesCTA>
                <p>See My Matches</p>
              </MyMatchesCTA>
            </MyMatchesText>
          </MyMatchesInnerContainer>

          <MyMatchesCards>
            <MyMatchesCard />
            <MyMatchesCard />
            <MyMatchesCard />
          </MyMatchesCards>
        </MyMatchesContainer>
      </MyMatches>

      <ContentContainer>
        <InternalCampaignBanner>
          <InternalCampaignBannerText>
            <p>Horizontal 970x250</p>
            <p>(Interal campaign only)</p>
          </InternalCampaignBannerText>
        </InternalCampaignBanner>

        {/* Articles */}
        <Section>
          <SectionHeader
            title={"Latest Articles"}
            subtitle={"So you can make better purchase decision"}
            isSeeMore
          />
          <Articles>
            {latestArticleList.map((v, i) => (
              <ArticleCard
                key={i}
                image={v.image}
                author={v.author}
                published_at={v.published_at}
                title={v.title}
              />
            ))}
          </Articles>
        </Section>

        {/* Latest Reviews */}
        <LatestReviewContainer>
          <LatestReviewHeader>
            <SectionHeader
              title={"Latest Reviews"}
              subtitle={"So you can make better purchase decision"}
              isSeeMore
            />
          </LatestReviewHeader>
        </LatestReviewContainer>
        <LatestReviewContainer>
          <Section style={{ minWidth: "100%" }}>
            <Slider
              {...latestReviewSliderSettings}
              asNavFor={nav1}
              ref={(slider) => (reviewSlider.current = slider)}
            >
              {latestReviewList.map((v, i) => (
                <ReviewCard
                  key={i}
                  comment={v.comment}
                  productDesc={v.product ? v.product.desc : ""}
                  productImage={v.product ? v.product.image : ""}
                  productName={v.product ? v.product.name : ""}
                  profile={v.profile}
                  star={v.star}
                  user={v.user}
                />
              ))}
            </Slider>
            <CarouselControl
              handleOnClickLeft={handlePreviousReview}
              handleOnClickRight={handleNextReview}
              slidesToShow={latestReviewSliderSettings.slidesToShow}
              totalItems={latestReviewList.length}
              handleOnClickDot={handleClickDotReview}
              currentSlide={reviewCurrentSlide}
            />
          </Section>

          <MR2Banner>
            <MR2BannerText>
              <p>MR 2</p>
              <p>300x250</p>
            </MR2BannerText>
          </MR2Banner>
        </LatestReviewContainer>

        {/* Popular Groups */}
        <Section>
          <SectionHeader
            title={"Popular Groups"}
            subtitle={"Where the beauty TALK are"}
            isSeeMore
          />
          <PopularGroupsCards>
            <PopularGroupCard
              name={"Embrace the curl"}
              img={avatar10}
              text="May our curls pop and never stop!"
            />
            <PopularGroupCard
              name={"Embrace the curl"}
              img={avatar11}
              text="May our curls pop and never stop!"
            />
            <PopularGroupCard
              name={"Embrace the curl"}
              img={avatar8}
              text="May our curls pop and never stop!"
            />
            <PopularGroupCard
              name={"Embrace the curl"}
              img={avatar9}
              text="May our curls pop and never stop!"
            />
          </PopularGroupsCards>
        </Section>

        {/* Latest Videos */}
        <Section>
          <SectionHeader
            title={"Latest Videos"}
            subtitle={"Watch and learn, ladies"}
            isSeeMore
          />

          <VideoGrid>
            {videoSources.map((video, i) => (
              <VideoItem src={video.src} key={i} />
            ))}
          </VideoGrid>
        </Section>

        {/* Trending */}
        <Section>
          <SectionHeader
            title={"Trending This Week"}
            subtitle={"See our weekly most reviewed products"}
            isSeeMore
          />

          <TrendingCardSliderWrapper>
            <Slider
              {...trendingSliderSettings}
              asNavFor={nav2}
              ref={(slider) => (trendingSlider.current = slider)}
            >
              {[...Array(trendingCardMultiplier)].map((_, i) => (
                <TrendingCard score={4.9} key={i} />
              ))}
            </Slider>
          </TrendingCardSliderWrapper>
          <CarouselControl
            handleOnClickLeft={handlePreviousTrending}
            handleOnClickRight={handleNextTrending}
            slidesToShow={6}
            totalItems={13}
            handleOnClickDot={handleClickDotTrending}
            currentSlide={trendingCurrentSlide}
          />
        </Section>

        {/* Top Brands */}
        <Section>
          <SectionHeader
            title={"Top Brands"}
            subtitle={"We all know and love"}
            isSeeMore
          />

          <BrandImages>
            <BrandImg src={niveaLogo} alt="nivea-logo" />
            <BrandImg src={theOrdinaryLogo} alt="the-ordinary-logo" />
            <BrandImg src={theBodyShopLogo} alt="the-body-shop-logo" />
            <BrandImg src={skiiLogo} alt="sk-ii-logo" />
            <BrandImg src={maybellineLogo} alt="maybelline-logo" />
            <BrandImg src={innisfreeLogo} alt="innisfree-logo" />
          </BrandImages>
        </Section>

        <Section>
          <PreFooter />
        </Section>
      </ContentContainer>
      <Footer />
      <BottomFrame>
        <p>Bottom Frame 970x50, 468x60, 320x50</p>
      </BottomFrame>
    </Container>
  );
}

export default App;
