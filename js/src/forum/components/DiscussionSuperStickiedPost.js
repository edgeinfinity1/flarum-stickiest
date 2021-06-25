import EventPost from 'flarum/components/EventPost';

export default class DiscussionSuperStickiedPost extends EventPost {
  icon() {
    return app.forum.attribute('stickiest.badge_icon');
  }

  descriptionKey() {
    return this.attrs.post.content().stickiest
      ? 'the-turk-stickiest.forum.post_stream.discussion_super_stickied_text'
      : 'the-turk-stickiest.forum.post_stream.discussion_common_stickied_text';
  }
}
