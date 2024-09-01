import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "pinned-topics-tbody",

    initialize() {
        withPluginApi("0.8.20", (api) => {
            api.createWidget("pinned-topics-tbody", {
                tagName: "tbody.pinned-topics",
                template: hbs`
          {{#if @topics}}
            <MPinnedTopicsBody
              @topics={{@topics}}
              @bulkSelectEnabled={{@bulkSelectEnabled}}
              @lastVisitedTopic={{@lastVisitedTopic}}
              @selected={{@selected}}
              @hideCategory={{@hideCategory}}
            />
          {{/if}}
        `,
            });
        });
    },
};
