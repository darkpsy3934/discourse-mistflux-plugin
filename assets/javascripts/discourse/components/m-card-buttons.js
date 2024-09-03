import { action } from '@ember/object';
import { routeTo, userPath } from 'discourse/lib/url';

class MCardButtons extends Component {
    @action
    showUserActivity() {
        let user = this.args.user;
        this.args.close();
        routeTo(userPath(`${user.username}/activity`));
    }

    @action
    showProfile() {
        let user = this.args.user;
        this.args.close();
        let profileUrl = user?.custom_fields?.profile_url;
        if (profileUrl) {
            window.open(profileUrl, "_blank");
        }
    }
}

export default MCardButtons;