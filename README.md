# EV Steam Montana

Informational landing page for the Montana EV International door-to-door team. It explains the EV Atlantis X dry steam cleaner, links the manufacturer's how-to videos, and sends visitors to call or text Anthony.

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser to preview.

## Editing

- **Phone number:** change `PHONE_DISPLAY` and `PHONE_E164` at the top of `script.js`. The `tel:`/`sms:` links in `index.html` are fallbacks for visitors without JavaScript, so update those too.
- **Videos:** each card in the `#videos` section uses a YouTube video ID in `data-id` and in the thumbnail URL.

## Publishing with GitHub Pages

Repo **Settings → Pages → Deploy from a branch → `main` / root**. The site will be live at `https://<username>.github.io/<repo>/`.

## Meta ads tracking

When ads start, paste the Meta Pixel base code into the `<head>` of `index.html` and fire a `Contact` event on the call/text buttons.
