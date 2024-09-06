import Component from '@ember/component';
import { service } from '@ember/service';

export default class GroupNavigation extends Component {
    @service site;

    setupComponent(outletArgs, component) {
        const url = window.location.toString();
        const categoryIdMatch = url.match(/category_id=(\d+)/);

        let category = null;

        if (categoryIdMatch) {
            const categoryId = parseInt(categoryIdMatch[1], 10);
            if (categoryId) {
                category = this.site.get('categories').findBy('id', categoryId);
            }
        }

        component.set('category', category);
    }
}