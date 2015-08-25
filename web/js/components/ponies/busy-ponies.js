"use strict";

class BusyPonies extends ReactiveList {
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
                    <h4>There are busy ponies :</h4>
                    <ul>{nodes}</ul>
                </div>
            );
        }

        return (<h4>There is no busy pony :)</h4>);
    }
}

BusyPonies.defaultProps = {
    subscriptionName: "busy-ponies",
    collectionName: "ponies",
    queryFilters: {free: false},
    sortFn: function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }
}
