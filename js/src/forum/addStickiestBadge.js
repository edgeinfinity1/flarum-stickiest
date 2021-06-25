import { extend } from 'flarum/extend';
import Discussion from 'flarum/models/Discussion';
import Badge from 'flarum/components/Badge';

export default function addStickiestBadge() {
  extend(Discussion.prototype, 'badges', function (badges) {
    if (this.isStickiest()) {
      badges.add(
        'stickiest',
        Badge.component({
          type: 'stickiest',
          label: app.translator.trans('the-turk-stickiest.forum.badge.super_sticky_tooltip'),
          icon: app.forum.attribute('stickiest.badge_icon'),
        }),
        10
      );
    }
  });
}
