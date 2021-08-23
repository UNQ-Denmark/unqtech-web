import React from 'react';
import { Carousel, Col, Row, Typography } from 'antd';
import styled from '@emotion/styled';
import { IReview } from '../shared/contentfu.interface';

const ReviewText = styled.div`
  flex: 2;
  height: 100%;
  padding: 1rem;
  q {
    font-weight: 400;
    font-style: italic;
    font-size: 20px;
    color: darkgrey;
    @media (max-width: 900px) {
      font-size: 16px;
    }
  }
`;

const ReviewDetails = styled.div`
  flex: 1;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    font-style: italic;
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }
`;

const StyledHeadline = styled(Typography.Title)`
  font-weight: 300;
  font-size: 50px;
`;

const StyledCarousel = styled(Carousel)`
  color: black;
  margin: 0 6rem 0 6rem;
  @media (max-width: 1100px) {
    margin: 0;
  }
`;

type Props = {
  title: string;
  reviews: IReview[];
};

const ReviewCarousel: React.FC<Props> = ({ reviews, title }: Props) => {
  return (
    <Row gutter={[0, 60]}>
      <Col span={24}>
        <StyledHeadline style={{ textAlign: 'center', padding: '0 1rem' }}>
          {title}
        </StyledHeadline>
        <StyledCarousel autoplay>
          {reviews &&
            reviews.map((review, key) => (
              <Row key={key}>
                <Col>
                  <ReviewText>
                    <q>{review.text.text}</q>
                  </ReviewText>
                  <ReviewDetails>
                    <h2>— {review.name}</h2>
                    <p>{review.company}</p>
                  </ReviewDetails>
                </Col>
              </Row>
            ))}
        </StyledCarousel>
      </Col>
    </Row>
  );
};
export default ReviewCarousel;
