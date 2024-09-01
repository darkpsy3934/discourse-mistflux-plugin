import Component from "@ember/component";

export default class PinnedTopicsBody extends Component{
    get pinnedTopics() {
        return this.outletArgs.topics.filter((t) => t.get("pinned"));
    }
}