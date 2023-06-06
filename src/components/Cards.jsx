import './Cards.scss'


const Cards = ({Tab}) => {
    return (
        <>
 {Tab.map((item, index) => (
            <div className="cardGlobal" key={index}>
                <img src={item.imgSrc} alt=""/>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>
            
            
                    ))}
        </>
    );
};

export default Cards