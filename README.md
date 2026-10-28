# EV of Montana

Landing page for EV of Montana, the Montana EV International team. Its main job is to get people to book a free in-home tile & grout cleaning, where Anthony demonstrates the EV Atlantis steam cleaner. It also explains the machine and links the manufacturer's how-to videos for owners.

The booking form opens a pre-written text to Anthony. If you bump `styles.css` or `script.js`, also bump the `?v=` number on their tags in `index.html` so returning visitors get the new file.

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser to preview.

## Editing

- **Phone number:** change `PHONE_DISPLAY` and `PHONE_E164` at the top of `script.js`. The `tel:`/`sms:` links in `index.html` are fallbacks for visitors without JavaScript, so update those too.
- **Videos:** each card in the `#videos` section uses a YouTube video ID in `data-id` and in the thumbnail URL.

## Publishing with GitHub Pages

Repo **Settings → Pages → Deploy from a branch → `main` / root**. The site will be live at `https://<username>.github.io/<repo>/`.

## Meta ads tracking

When ads start, paste the Meta Pixel base code into the `<head>` of `index.html` and fire a `Contact` event on the call/text buttons.
