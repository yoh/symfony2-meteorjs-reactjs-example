"use strict";

class ReactiveList extends React.Component {

    constructor(props) {
        props.asteroid.subscribe(props.subscriptionName);
        var collection = props.asteroid.getCollection(props.collectionName);
        props.reactiveQuery = collection.reactiveQuery(props.queryFilters);

        super(props);

        this.state = {
            items: props.reactiveQuery.result.sort(props.sortFn)
        };
    }

    componentDidMount() {
        this.props.reactiveQuery.on("change", function () {
            this.setState({
                items: this.props.reactiveQuery.result.sort(this.props.sortFn)
            });
        }.bind(this));
    }
}
