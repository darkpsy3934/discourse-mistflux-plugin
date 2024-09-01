import Component from "@ember/component";
import { tracked } from '@glimmer/tracking';

export default class MPinnedTopicsBody extends Component {
    @tracked topics = [];

    get pinnedTopics() {
        if (!this.args.topics ||!Array.isArray(this.args.topics)) {
            console.error("topics is undefined");
            return [];
        }
        return this.args.topics.filter(t => t.get("pinned"));
    }
}