import { Mongo } from 'meteor/mongo';
import { Match } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.extendOptions({
    uniforms: Match.Optional(Object)
});

const Projects = new Mongo.Collection('projects');

Projects.Schema = new SimpleSchema({
    title: {
        type: String,
        label: "Project title"
    },
    ownerId: {
        type: String,
        label: "Project owner",
        defaultValue: (Meteor.isServer) ? this.userId : Meteor.userId(),
        uniforms: {
            hidden: true
        }
    },
    createdAt: {
        type: Date,
        label: "Project creation date",
        defaultValue: new Date(),
        uniforms: {
            hidden: true
        }
    },
    modifiedAt: {
        type: Date,
        label: "Project last modified on",
        autoValue: function() {
            return new Date();
        },
        uniforms: {
            hidden: true
        }
    }
});

export default Projects;