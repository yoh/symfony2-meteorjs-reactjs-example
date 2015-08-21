<script type="text/jsx">
    var PoneysList = React.createClass({
        getInitialState: function() {
            this.props.asteroid.subscribe("poneys");
            var poneys = this.props.asteroid.getCollection("poneys");
            this.props.poneysRQ = poneys.reactiveQuery({free: true});

            return {poneys: this.props.poneysRQ.result};
        },
        componentDidMount: function() {
            this.props.poneysRQ.on("change", function () {
                this.setState({poneys: this.props.poneysRQ.result});
            }.bind(this));
        },
        render: function() {
            if (this.state.poneys.length > 0) {
                var nodes = this.state.poneys.map(function(node){
                    var path = "/poney/" + node._id + "/edit";
                    return (
                        <li>
                            <a href={path}>
                                {node.name}
                            </a>
                        </li>
                    );
                });

                return (
                    <div>
                        <p>There are free poneys :</p>
                        <ul>{nodes}</ul>
                    </div>
                );
            }

            return (<div>Sorry, the is no free poney :(</div>);
        }
    });

    React.render(<PoneysList asteroid={asteroid} />, document.getElementById('react-poneys-list'));
</script>
