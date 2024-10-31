<div align="center">
    <img src="https://github.com/github.png" width="130" height="130" style="display: block; margin: 0 auto;"/>
    <h1>🦡 Add Github Badge 🦡</h1>
    <p><code>addGithubBadge</code> is a simple yet powerful JavaScript library designed to effortlessly add a GitHub badge to any website. With just a script import and a few initialization options, you can display a beautiful badge that showcases your GitHub profile information, enhancing your site's interactivity and providing visitors with quick access to your GitHub profile.</p>
</div>

---

## ✨ Features

- **Easy Integration:** Simply import the script and initialize it with your GitHub username.
- **Customizable Badge:** Display additional information such as custom names, links, and trigger text.
- **Popup Interaction:** Users can click on the badge to reveal a popup with more details and custom links.
- **Lightweight:** Minimal impact on your website’s performance.

## 📦 Installation

To include the `addGithubBadge` library in your website, add the following script tag in your HTML:

###### your website root html

```html
<script
  src="https://cdn.jsdelivr.net/gh/ArnavK-09/add-github-badge@main/dist/main.js"
  async
  defer
></script>
```

- **🍻 CDN URL:- https://cdn.jsdelivr.net/gh/ArnavK-09/add-github-badge@main/dist/main.js**

## 🚀 Usage

### 🚄 Quick Setup

You can quickly add a GitHub badge using just your GitHub username:

###### javascript

```javascript
addGithubBadge("username");
```

### 🚉 Full Configuration

For more control over the badge, use the full configuration method. Here’s how you can do it:

###### javascript

```javascript
addGithubBadge({
  github_username: "username", // Your GitHub username (required)
  custom_name: "Your Name", // Custom display name (optional)
  trigger_options: {
    // Options for the popup trigger
    text: "Open {{username}}'s GitHub", // Custom text for the popup trigger (optional)
  },
  options: {
    // Additional options
    debug: true, // Enable debug mode (optional)
  },
  links: [
    // Custom links to display in the popup
    { title: "Portfolio", href: "https://portfolio.com" },
    { title: "Blog", href: "https://blog.com" },
  ],
});
```

### 🎫 Example

###### index.html

```html
<!-- ... -->
<script>
  // Quick setup
  addGithubBadge("ArnavK-09");

  // Full configuration
  addGithubBadge({
    github_username: "ArnavK-09",
    custom_name: "Arnav Kaushal",
    trigger_options: {
      text: "This project is made by {{username}}",
    },
    options: {
      debug: true,
    },
    links: [{ title: "Blogs", href: "https://dev.to/ArnavK-09" }],
  });
</script>
<!-- ... -->
```

---

## 📖 Props Interface

## Options

The `addGithubBadge` function accepts the following options in the `addGithubBadgeInitProps` interface:

| Type     | Description                                                     |
| -------- | --------------------------------------------------------------- |
| `string` | (Required) GitHub username to fetch user details for the badge. |

<p align="center">OR</p>

| Parameter         | Type                                | Description                                                                                     |
| ----------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| `github_username` | `string`                            | (Required) GitHub username to fetch user details for the badge.                                 |
| `custom_name`     | `string`                            | (Optional) A custom name displayed in the popup instead of the GitHub username.                 |
| `trigger_options` | `addGithubBadgePopupTriggerOptions` | (Optional) Options to customize the popup trigger button text.                                  |
| `options`         | `addGithubBadgeExtraOptions`        | (Optional) Additional options like enabling debug mode.                                         |
| `links`           | `widgetPopupLink[]`                 | (Optional) Array of links displayed in the popup. Each link has an `href` and optional `title`. |

### Sub-Options

#### `addGithubBadgePopupTriggerOptions`

| Parameter | Type     | Description                                                                       |
| --------- | -------- | --------------------------------------------------------------------------------- |
| `text`    | `string` | Text for the popup trigger button. Supports `{{username}}` for dynamic insertion. |

#### `addGithubBadgeExtraOptions`

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| `debug`   | `boolean` | Enables debug mode if `true`. |

#### `widgetPopupLink`

| Parameter | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `title`   | `string` | (Optional) The link title text to display.    |
| `href`    | `string` | (Required) The URL for the link in the popup. |

---

<h2 align="center">📄 License</h2>

<p align="center">
This project is licensed under the <code>MIT</code> - see the <a href="LICENSE"><strong>LICENSE</strong></a> file for details.
</p>

---

<p align="center">
    <strong>If you find this project helpful, please give it a ⭐ on GitHub!</strong>
</p>
