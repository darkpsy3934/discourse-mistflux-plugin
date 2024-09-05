import Component from '@ember/component';
import { service } from '@ember/service';
import discourseCommonLibGetUrl from 'discourse-common/lib/get-url';

export default class MNavBreadcrumbs extends Component {
    @service router;
    @service discovery;

    get category() {
        let currentCategory = null;
        if (this.router.currentRouteName.match(/^discovery\.[a-z]*category$/i)) {
            currentCategory = this.discovery.category;
        }

        if (this.outletArgs.topic) {
            return this.outletArgs.topic.get("category");
        } else if (currentCategory && !currentCategory.get("isUncategorized")) {
            return currentCategory;
        }
    }

    get homeUrl() {
        return discourseCommonLibGetUrl("/");
    }

    get topicTitle() {
        return this.outletArgs.topic?.get("fancyTitle") || "";
    }

    get topicUrl() {
        return this.outletArgs.topic?.get("url");
    }

    get categoryUrl() {
        return this.category?.get("url");
    }

    get parentCategoryUrl() {
        return this.category?.parentCategory?.get("url");
    }
}