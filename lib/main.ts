/**
 *
 * ALL ICONS
 *
 */
const __addGithubBadge_ICONS = {
  url: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>`,
};

/**
 *
 * ALL addGithubBadge TYPES
 *
 */
type widgetPopupLink = { title?: string; href: string };
type addGithubBadgeExtraOptions = { debug?: boolean };
type addGithubBadgePopupTriggerOptions = { text?: string };
interface addGithubBadgeInitProps {
  github_username: string;
  custom_name?: string;
  trigger_options?: addGithubBadgePopupTriggerOptions;
  options?: addGithubBadgeExtraOptions;
  links: widgetPopupLink[];
}
interface GH_USER {
  name: string | null;
  location: string | null;
  bio: string | null;
  blog: string | null;
  twitter_username: string | null;
  login: string;
}

/**
 *
 * POPUP INTERNAL COMPONENTS
 *
 */
const __addGithubBadge_widgetPopupOverview = (
  username: string,
  location?: string,
  custom_name?: string,
) => {
  return `
 <!-- addGithubBadge POPUP PROFILE OVERVIEW START -->
 <div id="__addGithubBadge_cross_btn">
 X
 </div>
   <div class="__addGithubBadge_overview_upper __addGithubBadge_select_none">
     <img
       id="__addGithubBadge_popup_img"
       class="__addGithubBadge_popup_avatar"
       src="https://github.com/${username}.png"
       alt="${username}"
       draggable="false"
     />
     <p>
       This project is made by
     </p>
     <h3>
      ${custom_name ? custom_name : `@${username}`}
     </h3>
   </div>
   ${
     location
       ? `
   <div class="__addGithubBadge_popup_txt_w_icon">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="2.5"
     stroke="currentColor"
   >
     <path
       stroke-linecap="round"
       stroke-linejoin="round"
       d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
     />
     <path
       stroke-linecap="round"
       stroke-linejoin="round"
       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
     />
   </svg>
   ${location}
 </div>
   `
       : ""
   }
   <hr class="__addGithubBadge_hr" />
 </div>
 <!-- addGithubBadge POPUP PROFILE OVERVIEW END -->
 `;
};

const __addGithubBadge_widgetPopupBio = (bio: string) => {
  return `<!-- addGithubBadge BIO START -->
  <div class="__addGithubBadge_bio">
    <details class="__addGithubBadge_popup_details" open>
      <summary><strong>Bio:-</strong></summary>
      <p>
        ${bio}
      </p>
    </details>
  </div>
  <!-- addGithubBadge BIO END -->
  `;
};

const __addGithubBadge_widgetPopupLinks = (links: Array<widgetPopupLink>) => {
  return `<!-- addGithubBadge LINKS START -->
  <div class="__addGithubBadge_popup_desc">
    <details id="__addGithubBadge_links" class="__addGithubBadge_popup_details" open>
      <summary><strong>Links:-</strong></summary>
      <ol>
        ${links.map((link) => `<li><span>${__addGithubBadge_ICONS.url}</span><a href="${link.href}" target="_blank">${link.title ?? link.href}</a></li>`)}
      </ol>
    </details>
  </div>
  <!-- addGithubBadge LINKS END -->`;
};

/**
 *
 * addGithubBadge Popup Trigger Button
 *
 */
const __addGithubBadge_PopupTriggerBtn = (text: string, username: string) => {
  return `
  <section aria-label="open-addGithubBadge-widget" id="__addGithubBadge_popup_trigger_btn">
  <img src="${`https://github.com/${username}.png`}" alt="${text}" />
  <p>${text}</p></section>
  `;
};

/**
 *
 * addGithubBadge Popup
 *
 */
const __addGithubBadge_Popup = (
  user: GH_USER,
  props: addGithubBadgeInitProps,
) => {
  return `
  <aside class="__addGithubBadge_noscrollbar" id="__addGithubBadge_popup">
  ${__addGithubBadge_widgetPopupOverview(user.login, user.location, props.custom_name)}
  ${user.bio ? __addGithubBadge_widgetPopupBio(user.bio) : ""}
  ${__addGithubBadge_widgetPopupLinks(
    [
      {
        href: "//github.com/" + user.login,
        title: "Github @" + user.login,
      },
      ...(props.links ?? [null]),
    ].filter(Boolean),
  )}
  </aside>
  `;
};

/**
 *
 * addGithubBadge Whole style source
 *
 */
const __addGithubBadge_Styles = () => {
  return `
  /* Popup styles */
  #__addGithubBadge_popup {
    font-family: "Lucida Console", "Courier New", monospace;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow-x: hidden;
    padding: 1rem;
    width: 16rem;
    overflow-wrap: break-word;
    border-radius: 0.7rem 0.7rem 0 0;
    background-color: #0d1117;
    position: fixed;
    left: 0.9rem;
    bottom: 0rem;
    z-index: 60;
    color: white;
    transform: translateY(130%);
    transition-timing-function: ease-in;
    transition: 0.4s;
  }
  
  .__addGithubBadge_popup_open {
    transition: 0.4s !important;
    transition-timing-function: ease-out !important;
    transform: translateY(0) !important;
  }
  
  #__addGithubBadge_cross_btn {
    cursor: pointer;
    margin-top: -0.25rem;
    font-weight: 700;
    text-align: right;
  }
  
  /* Popup trigger btn */
  #__addGithubBadge_popup_trigger_btn {
    font-family: "Lucida Console", "Courier New", monospace;
    display: inline-flex;
    position: fixed;
    bottom: 0rem;
    z-index: 50;
    padding: 0.3rem 0.55rem;
    left: 1rem;
    border-radius: 10px 10px 0 0;
    color: #ffffff;
    background-color: #0d1117;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    p {
      font-size: 12px; 
      font-weight: 700; 
      letter-spacing: 0.025em;
      line-height: 0px;
      text-overflow: ellipsis;
    }
    img {
      aspect-ratio: 1 / 1;
      border-radius: 9999px;
      height: 24px;
      margin-right: 0.5rem;
    }
  }
  
  #__addGithubBadge_popup_trigger_btn:hover {
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }
  
  
  .__addGithubBadge_popup_details > summary {
    cursor: pointer;
    user-select: none;
    font-size: 0.975rem;
    opacity: 0.9;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: left;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  
  .__addGithubBadge_popup_desc {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .__addGithubBadge_popup_avatar {
    margin-bottom: 0.3rem;
    aspect-ratio: 1 / 1;
    border-radius: 9999px;
    height: fit-content;
    margin-right: 0.5rem;
  }
  
  .__addGithubBadge_popup_txt_w_icon {
    opacity: 0.8;
    display: flex;
    justify-content: center;
    margin-bottom: 0.8em;
    align-items: center;
    font-size: 0.75rem;
    height: fit-content;
    text-align: center;
    vertical-align: middle;
    svg {
      width: 0.9rem;
      height: 0.9rem;
      margin-right: 0.1rem;
    }
  }
  
  .__addGithubBadge_bio {
    margin-top: 0.5rem;
  }
  
  .__addGithubBadge_bio > details > p {
    user-select: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 0.55rem;
    font-weight: 400;
    letter-spacing: 0.005em;
    overflow-wrap: break-word;
    opacity: 0.9;
    text-decoration: none;
  }
  
  #__addGithubBadge_links {
    ul {
      user-select: none;
      width: 100%;
      margin-top: 1rem;
    }
    li {
      display: flex;
      align-items: left;
      text-align: left;
      height: fit-content;
    }
    svg {
      width: 1rem;
      height: 1rem;
    }
    a {
      font-weight: 425;
      font-size: 0.9rem;
      line-height: 1.25rem;
      color: white;
      filter: brightness(125);
      text-decoration: none;
    }
    span {
      margin-right: 0.25rem;
    }
  }
  
  #__addGithubBadge_projects {
    border-radius: 0.6rem;
    margin-right: -0.67rem;
    margin-top: 0.67rem;
    display: flex;
    overflow-x: scroll;
    flex-direction: row;
    flex-wrap: nowrap;
    height: fit-content;
  }
  
  #__addGithubBadge_popup_img {
    height: 7em;
    width: auto;
    aspect-rato: 1 / 1;
  }
  
  .__addGithubBadge_overview_upper {
    padding-bottom: 0.3rem;
    display: grid;
    place-items: center;
    p {
      margin-top: 1rem;
      font-weight: 550;
      font-size: 0.75rem;
      letter-spacing: 0.025em;
      color: #d1d5db;
      line-height: 0;
    }
    h3 {
      font-weight: 700;
      font-size: 1.125rem;
      margin-top: 10px;
      line-height: 0;
    }
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .__addGithubBadge_noscrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .__addGithubBadge_noscrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  /* Misc addGithubBadge */
  .__addGithubBadge_hr {
    margin-top: 0.3rem;
    border-width: 0;
    height: 1px;
    background-color: #e5e7eb;
    opacity: 0.3;
  }
  .__addGithubBadge_select_none {
    user-select: none;
  }  
  `;
};

/**
 *
 * addGithubBadge initialization function, to be called by consumer on html side
 *
 */
async function addGithubBadge(props: addGithubBadgeInitProps | string) {
  // if no props
  if (!props)
    throw new Error(
      `[addGithubBadge] addGithubBadge initialized without any props.`,
    );

  // providing functionality even if only username provided
  if (typeof props == "string") {
    props = {
      github_username: props.toString().trim(),
    } as addGithubBadgeInitProps;
  }

  // extra utils function
  const UTILS = {
    log(...anything) {
      if ((props as addGithubBadgeInitProps).options?.debug == true) {
        console.log(`[addGithubBadge]`, ...anything);
      }
    },
  };

  // check user name
  UTILS.log("addGithubBadge widget initialized");
  if (!props?.github_username) return UTILS.log("No Github username provided!");

  // fetching gh user
  const addGithubBadge_GH_REQ = await fetch(
    `https://api.github.com/users/${props.github_username}`,
  );
  if (!addGithubBadge_GH_REQ.ok)
    return UTILS.log("Failed to fetch Github User!");
  const addGithubBadge_GH_USER = await addGithubBadge_GH_REQ.json();
  UTILS.log("Fetched Github User");

  // appending style
  const addGithubBadge_STYLES = document.createElement("style");
  addGithubBadge_STYLES.innerHTML = __addGithubBadge_Styles();
  document.body.appendChild(addGithubBadge_STYLES);
  UTILS.log(`Appended addGithubBadge_STYLES to document body!`);

  // creating trigger
  const addGithubBadge_TRIGGER_BTN_TXT = props.trigger_options?.text
    ? props.trigger_options?.text
        .replace("{{username}}", props.github_username)
        .trim()
    : `Made by @${props.github_username}`;
  document.documentElement.innerHTML += __addGithubBadge_PopupTriggerBtn(
    addGithubBadge_TRIGGER_BTN_TXT,
    addGithubBadge_GH_USER.login,
  );
  UTILS.log(
    `Appended addGithubBadge_TRIGGER_BTN to document body with content :- ${addGithubBadge_TRIGGER_BTN_TXT}`,
  );

  // appending popup
  document.documentElement.innerHTML += __addGithubBadge_Popup(
    addGithubBadge_GH_USER,
    props,
  );
  UTILS.log(`Appended addGithubBadge_POPUP to document body!`);

  // Handlers
  const addGithubBadgePopupHandler = () =>
    document
      .getElementById("__addGithubBadge_popup")
      ?.classList.toggle("__addGithubBadge_popup_open");

  // configuring handlers
  document
    .getElementById("__addGithubBadge_popup_trigger_btn")
    .addEventListener("click", addGithubBadgePopupHandler);
  document
    .getElementById("__addGithubBadge_cross_btn")
    ?.addEventListener("click", addGithubBadgePopupHandler);
  UTILS.log(`Configured addGithubBadge Event Handlers!`);
}
