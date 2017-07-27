import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import DB from '../../common/database/DB.js';

Meteor.publish('datasets.project', function(projectId) {
    check(projectId, String);

    return DB.Datasets.find({
        projectId
    });
});
