import Component from '@ember/component';
import { service } from '@ember/service';

class MCategoriesColumned extends Component {
    @service site;

    get columnedCategories() {
        return this.categories;
    }

    get displayMobileSubcategories() {
        if (this.site.mobileView) {
            let hasSubcategories = this.site.get("categories").some(c => {
                return (c.get("subcategories.length") || 0) >= 1;
            });
            if (hasSubcategories) {
                return true;
            }
        }
        return false;
    }
}

export default MCategoriesColumned;