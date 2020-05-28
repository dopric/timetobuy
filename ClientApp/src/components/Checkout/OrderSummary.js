import React from 'react'

export default class OrderSummary extends React.Component {
    state = { itemsCount: 3, total: 2.99 }

    render() {
        return (
            <div>
                <h3>Your order </h3>
                {this.state.itemsCount} Items <br/>
                    Total: ${this.state.total}<br/>
            </div>
        )
    }
}