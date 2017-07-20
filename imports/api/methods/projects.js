import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import DB from '../../common/database/DB.js';

Meteor.methods({
    "projects.add": function(project) {
        check(project, Object);

        project.ownerId = this.userId;

        return DB.Projects.insert(project);
    },
    "projects.edit": function(project) {
        check(project, Object);

        let proj = DB.Projects.findOne(project._id);

        if(!proj) throw new Meteor.Error("Project not found");

        if(proj.ownerId !== this.userId) throw Meteor.Error("You are not allowed to edit this project");

        return DB.Projects.update({
            _id: project._id
        }, {
            $set: project
        });
    },
    "projects.remove": function(projectId) {
        check(projectId, String);

        let proj = DB.Projects.findOne(projectId);

        if(!proj) throw new Meteor.Error("Project not found");

        if(proj.ownerId !== this.userId) throw new Meteor.Error("You are not allowed to remove this project");

        return DB.Projects.remove({
            _id: projectId
        });
    }
});