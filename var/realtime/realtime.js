Poneys = new Mongo.Collection("poneys");

if (Meteor.isClient) {
    Meteor.subscribe("poneys");

    Template.ranch.helpers({
        poneys: function(){
            return Poneys.find();
        },
        checked: function(){
            return this.free ? "checked" : "";
        }
    });

    Template.ranch.events({
        "click input[name='free']": function(e, t){
            Poneys.update(this._id, {$set: {free: $(e.target).is(':checked')}});
        },
        "click .remove": function(e, t){
            Poneys.remove(this._id);
        },
        "submit form": function(e, t){
            e.preventDefault();
            var $name = $('input[name="name"]', e.target);
            if ($name.val()) {
                Poneys.insert({name: $name.val(), free: false});
                $name.val('');
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.publish("poneys", function () {
        return Poneys.find(); // everything
    });
}
