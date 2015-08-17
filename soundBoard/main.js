// Want 'parent' container of button 'components'

var Board = React.createClass({

    clickyClick: function (index) {
        alert('Greetings from ' + this.props.stuffs[index]);
    },

    render: function () {
        return  (
            <div>
                {this.props.stuffs.map(function (stuff, index) {
                    return (
                        <div onClick={this.clickyClick.bind(this, index)} key={index}>{stuff}</div>
                    );
                }, this)}
            </div>

        );
    }

});

React.render(
    <Board stuffs={['yo', 'hello', 'blah']}/>,
    document.body
);