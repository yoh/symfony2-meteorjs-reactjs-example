"use strict";

class AllPonies extends ReactiveList {
    render() {
        var nodes = this.state.items.map(function(node){
            var path = "/pony/" + node._id + "/edit";
            return (
                <tr key={node.name}>
                    <td>
                        <a href={path}>{node.name}</a>
                    </td>
                    <td>
                        {function(){
                            if (node.free) return "✔";
                        }.call(this)}
                    </td>
                    <td>
                        {function(){
                            if (! node.free) return "✘";
                        }.call(this)}
                    </td>
                </tr>
            );
        });

        return (
            <table className="pure-table pure-table-horizontal pure-table-striped">
                <thead>
                    <tr>
                        <th>Pony</th>
                        <th>Free</th>
                        <th>Busy</th>
                    </tr>
                </thead>
                <tbody>
                    {nodes}
                </tbody>
            </table>
        )

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
                    <p>There are free ponies :</p>
                    <ul>{nodes}</ul>
                </div>
            );
        }

        return (<div>Sorry, there is no free pony :(</div>);
    }
}

AllPonies.defaultProps = {
    subscriptionName: "all-ponies",
    collectionName: "ponies",
    queryFilters: {},
    sortFn: function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }
}
