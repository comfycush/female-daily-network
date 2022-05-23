import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const ContentContainer = styled.div`
  display: block;
  margin: auto;
  width: 1110px;
`;
export const Section = styled.div`
  margin-bottom: 60px;
  width: 100%;
`;
export const SectionHeader = styled.div`
  margin-bottom: 30px;
`;
export const SectionHeaderTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 24px;
`;
export const SectionHeaderSubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SectionHeaderSubtitle = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
`;
export const EditorChoiceCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
`;
export const ScoreContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Score = styled.p`
  font-weight: bold;
  margin-right: 8px;
`;
export const ScoreStars = styled.div`
  display: flex;
  color: #da254e;
  margin-right: 8px;
`;
export const ProductDetail = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;
`;
export const ProductDetailBrand = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;
export const ProductDetailName = styled.div`
  width: 150px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const ProductDetailColor = styled.div`
  color: rgba(0, 0, 0, 0.5);
  width: 150px;
`;

export const MyMatches = styled(Section)`
  width: 100%;
  height: 400px;
  background-color: #fddae0;
`;
export const MyMatchesContainer = styled.div`
  width: 1110px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 2fr 3fr;
`;
export const MyMatchesInnerContainer = styled.div`
  margin: auto 18px auto auto;
`;
export const MyMatchesText = styled.div`
  width: 300px;
  margin: auto 0;
`;
export const MyyMatchesTitle = styled.p`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
`;
export const MyMatchesSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;
export const MyMatchesCTA = styled.button`
  display: block;
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  background-color: #da254e;
  border: 0;
  border-radius: 5px;
  height: 45px;
  width: 185px;
  float: right;
`;
export const MyMatchesCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: auto 0;
  margin-left: 12px;
`;
export const InternalCampaignBanner = styled.div`
  display: block;
  margin: 15px auto 50px;
  width: 970px;
`;
export const InternalCampaignBannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 970px;
  height: 250px;
  border: 1px solid grey;
  background-color: lightgrey;
  font-size: x-large;
`;
export const Articles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
export const LatestReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const LatestReviewHeader = styled(Section)`
  margin-bottom: 0 !important;
`;
export const MR2Banner = styled.div`
  display: block;
  margin: 0 0 auto auto;
`;
export const MR2BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 250px;
  border: 1px solid grey;
  background-color: lightgrey;
  font-size: x-large;
`;
export const PopularGroupsCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 380px;
  gap: 20px;
`;
export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  margin: 0;
`;
export const TrendingCards = styled.div`
  display: flex;
  flex: 1 1 1 1 1 1;

  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 30px;
`;
export const BrandImages = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  align-items: center;
`;
export const BrandImg = styled.img`
  width: 100px;
`;
export const BottomFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 970px;
  height: 50px;
  border: 1px solid grey;
  background-color: lightgrey;
  font-size: x-large;
  margin: 0 auto;
`;
export const TrendingCardSliderWrapper = styled.div`
  min-width: 80%;
  margin-bottom: 50px;
`;
