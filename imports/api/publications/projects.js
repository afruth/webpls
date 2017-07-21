import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import DB from '../../common/database/DB.js';

Meteor.publish('projects.user', function() {
    return DB.Projects.find({
        ownerId: this.userId
    });
});

Meteor.publish('projects.one', function(projectId) {
    check(projectId, String);

    return DB.Projects.find({
        _id: projectId
    });
});