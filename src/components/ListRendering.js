export default function ListRendering() {
    const products = ['Book', 'Headphones', 'Shoes'];
    const pList = products.map((product) => <h3>{product}</h3>);
    return <div>{pList}</div>;

}