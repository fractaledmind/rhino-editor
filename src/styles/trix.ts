import { css } from "lit";

// These all come from Trix / ActionText. This should probably be cleaned up into
// a regular .css for users to include.
export default css`
	.trix-content {
		box-sizing: border-box;
	}
  .trix-content * {
  	box-sizing: inherit;
		margin: 0;
		padding: 0;
  }
  .trix-content h1 {
    font-size: 1.2em;
    line-height: 1.2;
  }
  .trix-content blockquote {
    border: 0 solid #ccc;
    border-inline-start-width: 0.3em;
    margin-inline-start: 0.3em;
    padding-inline-start: 0.6em;
  }
  .trix-content li {
    margin-inline-start: 1em;
  }
  .trix-content pre {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    font-family: monospace;
    font-size: 0.9em;
    padding: 0.5em;
    white-space: pre;
    background-color: #eee;
    overflow-x: auto;
  }
  .trix-content img {
    max-width: 100%;
    height: auto;
  }
  .trix-content .attachment {
    display: block;
    position: relative;
    max-width: 100%;
  }
  .trix-content .attachment a {
    color: inherit;
    text-decoration: none;
  }
  .trix-content .attachment a:hover,
  .trix-content .attachment a:visited:hover {
    color: inherit;
  }
  .trix-content .attachment__caption {
    text-align: center;
  }
  .trix-content
    .attachment__caption
    .attachment__name
    + .attachment__size::before {
    content: " · ";
  }
  .trix-content .attachment--preview {
    width: 100%;
    text-align: center;
  }
  .trix-content .attachment--preview .attachment__caption {
    color: #666;
    font-size: 0.9em;
    line-height: 1.2;
  }
  .trix-content .attachment--file {
    color: #333;
    line-height: 1;
    margin: 0 2px 2px 2px;
    padding: 0.4em 1em;
    border: 1px solid #bbb;
    border-radius: 5px;
  }
  .trix-content .attachment-gallery {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
.trix-content .attachment-gallery > :is(.attachment, action-text-attachment) {
  flex: 1 0 33%;
  padding: 0 0.5em;
  max-width: 33%;
  white-space: normal;
}

/* 1 / 3 / n item[s] */
.trix-content .attachment-gallery > :is(.attachment, action-text-attachment):first-of-type:nth-last-of-type(1) ~ :is(.attachment, action-text-attachment),
.trix-content .attachment-gallery > :is(.attachment, action-text-attachment):first-of-type:nth-last-of-type(1) {
	padding: 0;
  flex-basis: 100%;
  max-width: 100%;
}

/* 2 items / 4 items */
.attachment-gallery > :is(.attachment, action-text-attachment):first-of-type:nth-last-of-type(2),
.attachment-gallery > :is(.attachment, action-text-attachment):first-of-type:nth-last-of-type(2) ~ :is(.attachment, action-text-attachment),
.attachment-gallery > :is(.attachment, action-text-attachment):first-of-type:nth-last-of-type(4),
.attachment-gallery > :is(.attachment, action-text-attachment):first-of-type:nth-last-of-type(4) ~ :is(.attachment, action-text-attachment) {
  flex-basis: 50%;
  max-width: 50%;
}

.trix-content .attachment-gallery.attachment-gallery--2 action-text-attachment > .attachment,
.trix-content .attachment-gallery.attachment-gallery--4 action-text-attachment > .attachment,
.trix-content .attachment-gallery action-text-attachment > .attachment {
	max-width: 100%;
}
`;
