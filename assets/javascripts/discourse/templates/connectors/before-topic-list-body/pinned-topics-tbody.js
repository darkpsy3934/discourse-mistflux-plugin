import Component from "@ember/component";
import { classNames, tagName } from "@ember-decorators/component";

@tagName("")
export default class PinnedTopicsBody extends Component{
    get pinnedTopics() {
        return this.outletArgs.topics.filter((t) => t.get("pinned"));
    }
}