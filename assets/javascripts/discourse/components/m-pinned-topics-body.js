import Component from "@ember/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class MPinnedTopicsBody extends Component {
    @tracked topics = [];

    get pinnedTopics() {
        // Defensive check for undefined topics
        if (!this.args.topics || !Array.isArray(this.args.topics)) {
            console.error("Topics are undefined or not an array");
            return [];
        }
        return this.args.topics.filter((t) => t.get("pinned"));
    }
}