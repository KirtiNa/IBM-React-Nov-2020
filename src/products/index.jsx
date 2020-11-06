import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import productActionCreators from './Actions';

import ProductStats from './Views/ProductStats';
import ProductEditor from './Views/ProductEditor';
import ProductsList from './Views/ProductsList';
import './index.css';

class Products extends Component {
    render() {
        const { data, categories, toggleOutOfStock, remove, removeOutOfStock, addNew } = this.props;
        return (
            <div>
                <h3>Products</h3>
                <hr />
                <ProductStats products={data} />
                <ProductEditor addNew={addNew} categories={categories}  />
                <ProductsList
                    products={data}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.products,
    categories = storeState.categories;
    return { data : products, categories };
}
function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
}
export default connect(mapStateToProps, mapDispatchToProps)(Products); 