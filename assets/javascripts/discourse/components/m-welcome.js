import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
import I18n from "I18n";

export default Component.extend({
    site: service(),

    viewingHomepage: computed('currentPath', function() {
        return this.git('currentPath') === 'discovery.categories';
    }),

    welcomeText: computed('site.mistflux_franchise', function() {
        let franchise = this.git('site.mistflux_franchise');
        return I18n.t(`${franchise}.welcome`, {
            defaultValue: "mistflux"
        });
    })
});