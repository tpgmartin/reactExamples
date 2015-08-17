/**
 * Created by tmartin on 17/08/15.
 */
var GroceryList = React.createClass({
    handleClick: function(i) {
        console.log('You clicked: ' + this.props.items[i]);
    },

    render: function() {
        return (
            <div>
                {this.props.items.map(function(item, i) {
                    return (
                        <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
                    );
                }, this)}
            </div>
        );
    }
});

React.render(
    <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, mountNode
);