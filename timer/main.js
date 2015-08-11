var TimerExample = React.createClass({

    getInitialState: function () {
        return { elapsed: 0 };
    },

    componentDidMount: function () {
        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
    },

    tick: function () {
        this.setState({elapsed: new Date() - this.props.start});
    },

    clickHandler: function () {
        alert('sdfsdnsgkgdsklfsdklfsmkl');
    },

    render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);

        var seconds = (elapsed / 10).toFixed(1);

        return (
            <div>
                <p>This example was started <b>{seconds} seconds</b> ago.</p>
                <button type="button" onClick={this.clickHandler}>Click Me!</button>
            </div>
        );
    }
});

// renderComponent has been deprecated v0.12
React.render(
<TimerExample start={Date.now()} />,
document.body
);