import Component from "@ember/component";
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { createTemplateFactory } from "@ember/template-factory";

const __COLOCATED_TEMPLATE__ = createTemplateFactory(
    /*
        {{#if this.pinnedTopics}}
        <tbody class="pinned-topics">
            {{#each this.pinnedTopics as |topic|}}
                {{topic-list-item
                  topic=topic
                  bulkSelectEnabled=@bulkSelectEnabled
                  lastVisitedTopic=@lastVisitedTopic
                  selected=@selected
                  hideCategory=@hideCategory
                }}
            {{/each}}
            <tr class="table-break">
                <td colspan="10">&nbsp;</td>
            </tr>
        </tbody>
        {{/if}}
     */
);

export default class MPinnedTopicsBody extends Component {
    @tracked topics;

    get pinnedTopics() {
        return this.args.topics.filter(t => t.get("pinned"));
    }
}

setComponentTemplate(__COLOCATED_TEMPLATE__, MPinnedTopicsBody);