import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 1,
    price: 10,
    title: "Book 1",
    description: "This is a first product - amazing!"
  },
  {
    id: 2,
    price: 20,
    title: "Book 2",
    description: "This is a second product - amazing!"
  },
  {
    id: 3,
    price: 15,
    title: "Book 3",
    description: "This is a third product - amazing!"
  },
  {
    id: 4,
    price: 60,
    title: "Book 4",
    description: "This is a fourth product - amazing!"
  }
];

const Products = (props) => {
  const items = DUMMY_DATA.map((itm) => (<ProductItem key={itm.id} id={itm.id} title={itm.title} price={itm.price} description={itm.description} />))

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items}
      </ul>
    </section>
  );
};

export default Products;
