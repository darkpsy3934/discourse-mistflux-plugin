import { helper } from '@ember/component/helper';

export default helper(([idx]) => {
    return `third-${idx % 3}`;
});