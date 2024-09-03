import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import I18n from 'I18n';

class MWelcome extends Component {
    @service site; // Inject the 'site' service

    get viewingHomepage() {
        return this.args.currentPath === 'discovery.categories';
    }

    get welcomeText() {
        const franchise = 'mistflux';
        return I18n.t(`${franchise}.welcome`, { defaultValue: '' });
    }
}

export default MWelcome;