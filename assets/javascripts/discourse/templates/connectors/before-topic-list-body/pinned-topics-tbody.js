import { registerConnector } from 'discourse/lib/plugin-connectors';

registerConnector('before-topic-list-body', 'pinned-topics-tbody', {
    templateName: 'discourse/connectors/before-topic-list-body/pinned-topics-tbody',
    shouldRender(args, container) {
        return args.topics && args.topics.length > 0;
    }
});