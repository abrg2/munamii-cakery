import './Products.css';

import Card from '../components/Card';
import Cards from '../components/Cards';

export default function Products() {
    return (
        <div className="Products">
            <div className="ProductHeader">Cupcakes</div>
            <Cards>
                <Card src="/cupcake1.png" title="White-red cupcake" price="$3.50" />
                <Card src="/cupcake2.png" title="Chocolate cupcake" price="$3.50" />
                <Card src="/cupcake3.png" title="Pink cupcake" price="$3.50" />
                <Card src="/cupcake4.png" title="Chocolate cupcake #2" price="$3.50" />
                <Card src="/cupcake5.png" title="Yellow cupcake" price="$3.50" />
                <Card src="/cupcake6.png" title="Chocolate cupcake w/ icing" price="$3.50" />
                <Card src="/cupcake7.png" title="Chocolate cupcake w/ sprinkles" price="$3.50" />
                <Card src="/cupcake8.png" title="Turquoise cupcake" price="$3.50" />
            </Cards>
            <div className="ProductHeader" style={{marginTop: "2em", marginBottom: "1.5em"}}>Wedding Cakes</div>
            <Cards>
                <Card src="/cake1.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake2.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake3.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake4.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake5.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake6.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake7.jpg" title="Wedding Cake" price="$99.99" />
                <Card src="/cake8.jpg" title="Wedding Cake" price="$99.99" />
            </Cards>
        </div>
    )
}   