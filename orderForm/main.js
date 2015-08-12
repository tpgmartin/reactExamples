var ServiceChooser = React.createClass({

    getInitialState: function () {
        console.log('ServiceChooser');
        console.log(this.props);
        return { total: 0 };
    },

    addTotal: function (price) {
        console.log('ServiceChooser');
        console.log(this.state);
        this.setState({ total: this.state.total + price });
    },

    render: function () {
        // point to instance of ServiceChooser communicate to/from Service
        var self = this;
        var services = this.props.items.map(function (s) {
            return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal}/>;
        });

        return <div>
                    <h1>Our service</h1>
                    <div id='services'>
                        {services}
                        <p id='total'>Total <b>£{this.state.total.toFixed(2)}</b></p>
                    </div>
               </div>;
    }

});

var Service = React.createClass({

    getInitialState: function () {
        console.log('Service');
        console.log(this.props);
        return { active: false };
    },

    clickHandler: function () {
        console.log('Servicr');
        console.log(this.state);
        var active = !this.state.active;
        this.setState({active: active});
        // notify the ServiceChooser by calling its addTotal method
        this.props.addTotal( active ? this.props.price : -this.props.price );
    },

    render: function () {
        return <p className={this.state.active ? 'active' : ''} onClick={this.clickHandler}>
            {this.props.name} <b>£{this.props.price.toFixed(2)}</b>
               </p>;
    }

});

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

React.render(
    <ServiceChooser items={services} />,
    document.body
);