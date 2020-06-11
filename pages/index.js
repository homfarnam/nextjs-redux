import React from 'react';
import Link from 'next/link'
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';
import './index.css';
import Card from './Card';

class Index extends React.Component {
    static async getInitialProps({ store }) {
        store.dispatch(initialCards());
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link href='/page3'>
                        <img src="/static/logo.png"
                            className="static-logo" alt="logo"
                        />
                    </Link>

                </header>
                <div className="Grid">
                    {
                        this.props.cards.map((card) => (
                            <Card key={card.id} />
                        ))
                    }
                </div>
            </div>
        )
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
