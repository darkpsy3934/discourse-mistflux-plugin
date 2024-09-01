import Component from "@ember/component";
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
    @tracked topics;

    get pinnedTopics() {
        return this.args.topics.filter(t => t.get("pinned"));
    }
}