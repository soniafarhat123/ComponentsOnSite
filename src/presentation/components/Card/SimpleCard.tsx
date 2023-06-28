import React, { Children } from 'react';
import { MyCard } from '../../../lib/ionic-adapter-compo/Card';
import Card from '../../../lib/ionic-adapter-compo/Card';
import './CardStyle.css';


interface CardProps extends MyCard {
    className?: string;
   
    onClickCard?: () => void;
}

const SimpleCard: React.FC<CardProps> = ({
    className,
    title,
    subtitle,
   
    onClickCard,
    children,
    ...props
}) => {
    return (
        <>
            {/* <style>{`
  .container {
    position: relative;
    
  }
  .ion-cards {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .ion-card {
    width: 160px;
    margin: 8px;
    box-shadow: 0 2px 4px rgba(243, 239, 239, 0.1), 0 2px 3px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }

  @media screen and (min-width: 370px) {
    .ion-card {
      width: 45%;
    }
  }

  @media screen and (min-width: 412px) {
    .ion-card {
      width: 45%;
    }
  }

  @media screen and (min-width: 700px) {
    .ion-card {
      width: 30%;
    }
  }

  @media screen and (min-width: 900px) {
    .ion-card {
      width: 18%;
    }
  }

  @media screen and (min-width: 1024px) {
    .ion-card {
      width: 13%;
    }
  }
`}</style> */}

            <Card
                {...props}
                mode="md"
                title={title && title.length > 0 ? title : ''}
                subtitle={subtitle && subtitle.length > 0 ? subtitle : ''}
                onClick={onClickCard}
                className={className && className.length > 0 ? className : ''}
            >
               
                {children}
            </Card>
        </>
    );
};
export default SimpleCard;
