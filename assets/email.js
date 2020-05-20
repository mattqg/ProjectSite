/* Simple script to make it harder for bots to scrape my email address. */

const user = `matt`;
const domain = `mattmakes.dev`;
const email = `${user}@${domain}`;

const image = `<img class="icon" src="/assets/img/link-email.svg">`;
const link = `<a href="mailto:${email}">${image}</a>`;
const spacer = `<span class="spacer-horizontal"></span>`;

document.write(link);
document.write(spacer);