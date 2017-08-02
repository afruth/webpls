import { Mongo } from 'meteor/mongo';
import { Match } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Datasets = new Mongo.Collection('datasets');

Datasets.Schema = new SimpleSchema({
    projectId: {
        type: String,
        label: "Project Id"
    },
    data: {
        type: [Array],
        optional: true
    },
    "data.$": {
        type: [String],
        optional: true
    },
    "data.$.$": {
        type: String,
        optional: true
    },
    header: {
        type: [String],
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Project creation date",
        defaultValue: new Date(),
    },
    modifiedAt: {
        type: Date,
        label: "Project last modified on",
        autoValue: function() {
            return new Date();
        }
    }
});

export default Datasets;