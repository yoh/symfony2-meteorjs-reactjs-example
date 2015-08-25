Ponies = new Mongo.Collection("ponies");

if (Meteor.isClient) {
    Meteor.subscribe("all-ponies");

    Template.ranch.helpers({
        ponies: function(){
            return Ponies.find({}, {sort: {name: 1}});
        },
        checked: function(){
            return this.free ? "checked" : "";
        }
    });

    Template.ranch.events({
        "click input[name='free']": function(e, t){
            Ponies.update(this._id, {$set: {free: $(e.target).is(':checked')}});
        },
        "click .remove": function(e, t){
            Ponies.remove(this._id);
        },
        "submit form": function(e, t){
            e.preventDefault();
            var $name = $('input[name="name"]', e.target);
            if ($name.val()) {
                Ponies.insert({name: $name.val(), free: false});
                $name.val('');
            }
        }
    });
}

if (Meteor.isServer) {
    var options = {sort: {name: 1}};

    Meteor.publish("all-ponies", function () {
        return Ponies.find({}, options); // everything
    });

    Meteor.publish("free-ponies", function () {
        return Ponies.find({free: true}, options); // only free
    });

    Meteor.publish("busy-ponies", function () {
        return Ponies.find({free: false}, options); // only busy
    });
}
