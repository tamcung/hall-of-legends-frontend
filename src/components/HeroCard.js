import { Card } from 'antd';
import './HeroCard.css'
const { Meta } = Card;

const HeroCard = (props) => {
    const { data } = props
    return (
        <Card
            hoverable
            style={{ width: 260}}
            cover={
                <div className="hero-pic">
                    <img
                        alt={data.name}
                        src={data.pic}
                    />
                </div>
            }
        >
            <Meta
                title={data.name || "探险家-伊泽瑞尔"}
                description={data.words || "如果我不懂规矩，那要我如何打破规矩？"}
            />
        </Card>
    )
};

export default HeroCard;