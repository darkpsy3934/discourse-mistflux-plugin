import Component from "@ember/component";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { setComponentTemplate } from "@ember/component";
import layout from '../templates/components/m-pinned-topics-body.hbs'; // Import the template

export default class MPinnedTopicsBody extends Component {
    @tracked topics;

    get pinnedTopics() {
        return this.args.topics.filter(t => t.get("pinned"));
    }
}

setComponentTemplate(layout, MPinnedTopicsBody);