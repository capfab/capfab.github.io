# capfab.github.io

GitHub Pages builds this site with Jekyll. `index.html` and `experience.html` are plain HTML. The notes are
Jekyll posts, one file each, and each has its own link: `/notes/<topic>/<slug>/`.

## Add a note
1. Create `_posts/YYYY-MM-DD-short-title.md` (Markdown) or `.html` (HTML, like the existing notes). The date
   orders the notes and shows as "Month Year"; the file name after the date is the slug in the link.
2. Start it with:
   ```
   ---
   title: "Your title"
   categories: [research]        # food, research, travel or hobbies (_data/topics.yml)
   image: /assets/img/notes_images/your-cover.jpg   # optional: list thumbnail and link-preview image
   description: "Optional one line for link previews; otherwise the first ~30 words are used."
   ---
   ```
3. Put images in `assets/img/notes_images/` and reference them as `/assets/img/notes_images/...`.

Topic pages, counts, the Latest list on `notes.html`, previous/next links, link previews and the feed
(`/notes/feed.xml`) update by themselves. Work in progress goes in `_drafts/` (git-ignored, never published).
A new topic: add it to `_data/topics.yml` and create `notes/<topic>.html` like the others.

The Breakaway chips on the research map (desktop and mobile SVGs in `index.html`) are commented out with
`{% comment %}`. To turn them on: publish the post with the slug `breakaway`, then delete the two comment
wrappers; each chip then shows only while that post exists.

## Preview locally
```
export PATH=/opt/homebrew/opt/ruby@3.3/bin:$PATH   # Ruby 3.3; GitHub Pages' gems do not run on Ruby 4
bundle install                                     # once
bundle exec jekyll serve --drafts                  # http://localhost:4000, drafts included
```
`_config.yml` sets `theme: null`: without it the default Pages theme replaces `assets/css/style.css`.
