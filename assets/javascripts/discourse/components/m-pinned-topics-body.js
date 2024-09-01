import Component from "@ember/component";
import { tracked } from '@glimmer/tracking';

export default class MPinnedTopicsBody extends Component {
    @tracked topics;

    get pinnedTopics() {
        // Ensure this.args.topics is an array, or default to an empty array
        return (this.args.topics || []).filter(t => t.get("pinned"));
    }
}