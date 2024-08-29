import { createTemplateFactory } from "@ember/template-factory";

export default createTemplateFactory({
    /*
        {{#if this.discoveryList}}
        <MPinnedTopicsBody
            @topics={{this.topics}}
            @bulkSelectEnabled={{this.bulkSelectEnabled}}
            @lastVisitedTopics={{this.lastVisitedTopic}}
            @selected={{this.selected}}
            @hideCategory={{this.hideCategory}}
        />
        {{/if}}
     */
});