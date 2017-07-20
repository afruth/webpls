import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Projects = new Mongo.Collection('projects');

Projects.Schema = new SimpleSchema({
    title: {
        type: String,
        label: "Project title"
    },
    ownerId: {
        type: String,
        label: "Project owner"
    },
    createdAt: {
        type: Date,
        label: "Project creation date",
        defaultValue: new Date()
    },
    modifiedAt: {
        type: Date,
        label: "Project last modified on",
        defaultValue: new Date()
    }
});

export default Projects;