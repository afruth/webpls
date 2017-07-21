import { Meteor } from 'meteor/meteor';
import DB from '../../../common/database/DB.js';

export default ({ match }) => {
    const sub = Meteor.subscribe('projects.one', match.params.id);
    return {
        subReady: sub.ready(),
        project: DB.Projects.findOne(match.params.id)
    }
}