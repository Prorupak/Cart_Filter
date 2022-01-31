import React, { Fragment, Component } from "react";
import Product from "./Components/Product";
import Filter from "./Components/Filter";
import products from "./products.json";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...products],
      sort: "",
      size: "",
      gender: ""
    };
  }
  componentDidMount() {
    console.log(this.state.items.length);
  }
  componentDidUpdate() {
    console.log(this.state.items.length);
  }

  sortHandler = (e) => {
    let sort = e.target.value;
    let stateData = this.state;
    this.setState({
      ...stateData,
      sort: sort,
      items: [...this.state.items].sort((a, b) =>
        sort === "Lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "Highest"
          ? a.price < b.price
            ? 1
            : -1
          : [...this.state.items]
      )
    });
    console.log(e.target.value);
  };
  sizeHandler = (e) => {
    let size = e.target.value;
    let stateData = this.state;
    this.setState({
      ...stateData,
      size: size,
      items: [...this.state.items].filter((item) =>
        item.size.find((el) => el === e.target.value)
      )
    });
  };
  genderHandler = (e) => {
    let gender = e.target.value;
    let stateData = this.state;
    let filterByGender = [...this.state.items];
    this.setState((prevState) => ({
      ...prevState,
      gender: gender,
      items: filterByGender.filter((item) => item.gender === e.target.value)
    }));
  };

  render() {
    return (
      <Fragment>
        <div className="main">
          <Filter
            count={this.state.items.length}
            sortHandler={this.sortHandler}
            size={this.state.size}
            gender={this.state.gender}
            sort={this.state.sort}
            sizeHandler={this.sizeHandler}
            genderHandler={this.genderHandler}
          />
          <div className="product__container">
            {this.state.items.map((product) => (
              <Product
                key={product.id}
                product_id={product.id}
                name={product.item}
                gender={product.gender}
                image={product.product_img}
                price={product.price}
                description={product.description}
                sizes={product.size}
              />
            ))}
          </div>
          <div className="sidebar"></div>
        </div>
      </Fragment>
    );
  }
}
