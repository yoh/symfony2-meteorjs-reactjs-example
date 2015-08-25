"use strict";

class FreePonies extends ReactiveList {
    render() {
        if (this.state.items.length > 0) {
            var nodes = this.state.items.map(function(node){
                var path = "/pony/" + node._id + "/edit";
                return (
                    <li key={node._id}>
                        <a href={path}>
                            {node.name}
                        </a>
                    </li>
                );
            });

            return (
                <div>
                    <h4>There are free ponies :</h4>
                    <ul>{nodes}</ul>
                </div>
            );
        }

        return (<h4>Sorry, there is no free pony :(</h4>);
    }
}

FreePonies.defaultProps = {
    subscriptionName: "free-ponies",
    collectionName: "ponies",
    queryFilters: {free: true},
    sortFn: function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }
}
