import { Meteor } from 'meteor/meteor';
import DB from '../../common/database/DB.js';

Meteor.publish('projects.user', function() {
    return DB.Projects.find({
        ownerId: this.userId
    });
});