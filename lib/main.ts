/**
 * 
 * LUONUTT DEFAULTS
 */
const __LUONUTT_DEFAULTS = {
  USERNAME: "ArnavK-09",
  AVATAR: "https://avatars.githubusercontent.com/u/69188140?v=4",
  BIO: "lorem ipsum",
  DEMO_IMG:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
};



/**
 *
 * ALL ICONS
 *
 */
const __LUONUTT_ICONS = {
  url: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>`,
};

/**
 *
 * ALL LUONUTT TYPES
 *
 */
type widgetPopupLink = { title?: string; href: string; svg?: string };
type widgetPopupProjectCard = { heading?: string; img: string; url: string };
type LuonuttExtraOptions = { debug?: boolean };
type LuonuttPopupTriggerOptions = { text?: string };
interface LuonuttInitProps {
  github_username: string;
  custom_name?: string;
  trigger_options?: LuonuttPopupTriggerOptions;
  options?: LuonuttExtraOptions;
}
interface GH_USER {
  name: string | null,
  location: string | null,
  bio: string | null,
  blog: string | null,
  twitter_username: string | null,
  login: string,
}

/**
 *
 * POPUP INTERNAL COMPONENTS
 *
 */
const __LUONUTT_widgetPopupOverview = (
  username: string,
  avatar: string = __LUONUTT_DEFAULTS.AVATAR,
  location?: string,
) => {
  return `
 <!-- LUONUTT POPUP PROFILE OVERVIEW START -->
 <div id="__luonutt_cross_btn">
 X
 </div>
   <div class="__luonutt_overview_upper __luonutt_select_none">
     <img
       id="__luonutt_popup_img"
       class="__luonutt_popup_avatar"
       src="${avatar}"
       alt="${username}"
       draggable="false"
     />
     <p>
       This project is made by
     </p>
     <h3>
       @ArnavK-09
     </h3>
   </div>
   ${
     location
       ? `
   <div class="__luonutt_popup_txt_w_icon">
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
   <hr class="__luonutt_hr" />
 </div>
 <!-- LUONUTT POPUP PROFILE OVERVIEW END -->
 `;
};

const __LUONUTT_widgetPopupBio = (bio: string) => {
  return `<!-- LUONUTT BIO START -->
  <div class="__luonutt_bio">
    <details class="__luonutt_popup_details" open>
      <summary><strong>Bio:-</strong></summary>
      <p>
        ${bio}
      </p>
    </details>
  </div>
  <!-- LUONUTT BIO END -->
  `;
};

const __LUONUTT_widgetPopupLinks = (links: Array<widgetPopupLink>) => {
  return `<!-- LUONUTT LINKS START -->
  <div class="__luonutt_popup_desc">
    <details id="__luonutt_links" class="__luonutt_popup_details">
      <summary><strong>Links:-</strong></summary>
      <ul>
        ${links.map((link) => `<li><span>${link.svg ?? __LUONUTT_ICONS.url}</span><a href="${link.href}" target="_blank">${link.title ?? link.href}</a></li>`)}
      </ul>
    </details>
  </div>
  <!-- LUONUTT LINKS END -->`;
};

const __LUONUTT_widgetPopupProjects = (projects: Array<widgetPopupProjectCard>) => {
  return `
  <!-- LUONUTT PROJECTS START -->
  <div class="__luonutt_popup_desc">
  <details class="__luonutt_popup_details" open>
    <summary><strong>My Projects:-</strong></summary>
    <div id="__luonutt_projects" class="__luonutt_noscrollbar">
    ${projects
      .map(
        (project, i) =>
          `
      <div class="__luonutt_select_none" style="min-width: 90%;">
        <a href="${project.url}" target="_blank" aria-label="open project #${i}">
          <article class="__luonutt_project_card">
            <img
              alt="Project #${i}"
              src="${project.img}"
              loading="lazy"
            />
            <div>
              <p>${project.heading ?? `My Project #${i}`}</p>
            </div>
          </article>
        </a>
      </div>
      `,
      )
      .join("")}
    </div>
  </details>
  </div>
  <!-- LUONUTT PROJECTS END -->
`;
};

/**
 *
 * Luonutt Popup Trigger Button
 *
 */
const __LUONUTT_PopupTriggerBtn = (text: string, av?: string) => {
  return `
  <section aria-label="open-luonutt-widget" id="__luonutt_popup_trigger_btn">
  <img src="${av ?? __LUONUTT_DEFAULTS.AVATAR}" alt="${text}" />
  <p>${text}</p></section>
  `;
};

/**
 *
 * Luonutt Popup
 *
 */
const __LUONUTT_Popup = (user: GH_USER) => {
  return `
  <aside class="__luonutt_noscrollbar" id="__luonutt_popup">
  ${__LUONUTT_widgetPopupOverview(__LUONUTT_DEFAULTS.USERNAME, __LUONUTT_DEFAULTS.AVATAR, "India")}
  ${"TODO" ? __LUONUTT_widgetPopupBio("Lorem Ipsum") : ""}
  ${__LUONUTT_widgetPopupLinks([
    {
      href: "//github.com/" + __LUONUTT_DEFAULTS.USERNAME,
      title: "Github @" + __LUONUTT_DEFAULTS.USERNAME,
    },
  ])}
  ${__LUONUTT_widgetPopupProjects([
    {
      img: __LUONUTT_DEFAULTS.DEMO_IMG,
      url: "github.com",
    },
    {
      img: __LUONUTT_DEFAULTS.DEMO_IMG,
      url: "github.com",
    },
    {
      img: __LUONUTT_DEFAULTS.DEMO_IMG,
      url: "github.com",
    },
  ])}
  </aside>
  `;
};

/**
 *
 * Luonutt Whole style source
 *
 */
const __LUONUTT_Styles = () => {
  return `
  /* Popup styles */
  #__luonutt_popup {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    overflow-x: hidden;
    padding: 1rem;
    height: 32rem;
    width: 16rem;
    overflow-wrap: break-word;
    border-radius: 0.7rem 0.7rem 0 0;
    margin-left: 0.2rem;
    background-color: #000000;
    position: fixed;
    bottom: 0rem;
    z-index: 60;
    color: white;
    transform: translateY(130%);
    transition-timing-function: ease-in;
    transition: 0.4s;
  }
  
  .__luonutt_popup_open {
    transition: 0.4s !important;
    transition-timing-function: ease-out !important;
    transform: translateY(0) !important;
  }
  
  #__luonutt_cross_btn {
    cursor: pointer;
    margin-top: -0.25rem;
    font-weight: 700;
    text-align: right;
  }
  
  /* Popup trigger btn */
  #__luonutt_popup_trigger_btn {
    display: inline-flex;
    position: fixed;
    bottom: 0rem;
    z-index: 50;
    padding: 0.3rem 0.55rem;
    left: 1rem;
    border-radius: 10px 10px 0 0;
    color: #ffffff;
    background-color: #000000;
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
  
  #__luonutt_popup_trigger_btn:hover {
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }
  
  
  .__luonutt_popup_details > summary {
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
  
  .__luonutt_popup_desc {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .__luonutt_popup_avatar {
    margin-bottom: 0.3rem;
    aspect-ratio: 1 / 1;
    border-radius: 9999px;
    height: fit-content;
    margin-right: 0.5rem;
  }
  
  .__luonutt_popup_txt_w_icon {
    opacity: 0.8;
    display: flex;
    justify-content: center;
    margin-bottom: 0.8em;
    align-items: center;
    height: fit-content;
    text-align: center;
    vertical-align: middle;
    svg {
      width: 0.9rem;
      height: 0.9rem;
      margin-right: 0.1rem;
    }
  }
  
  .__luonutt_bio {
    margin-top: 0.5rem;
  }
  
  .__luonutt_bio > details > p {
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
  
  #__luonutt_links {
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
  
  #__luonutt_projects {
    border-radius: 0.6rem;
    margin-right: -0.67rem;
    margin-top: 0.67rem;
    display: flex;
    overflow-x: scroll;
    flex-direction: row;
    flex-wrap: nowrap;
    height: fit-content;
  }
  
  .__luonutt_project_card {
    transform: scale(0.9);
    cursor: pointer;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    img {
      object-fit: cover;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 9;
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }
    div {
      padding: 0.6rem;
      background-color: #0d0d0d;
      overflow-wrap: break-word;
      border-bottom-right-radius: 0.75rem;
      border-bottom-left-radius: 0.75rem;
    }
    p {
      margin-top: 0.1rem;
      font-size: 0.8rem;
      line-height: 0.89rem;
      color: #fff;
      opacity: 0.98;
    }
  }

  #__luonutt_popup_img {
    height: 7em;
    width: auto;
    aspect-rato: 1 / 1;
  }
  
  .__luonutt_project_card:hover {
    transform: scale(0.95);
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .__luonutt_overview_upper {
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
  .__luonutt_noscrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .__luonutt_noscrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  /* Misc luonutt */
  .__luonutt_hr {
    margin-top: 0.3rem;
    border-width: 0;
    height: 1px;
    background-color: #e5e7eb;
    opacity: 0.3;
  }
  .__luonutt_select_none {
    user-select: none;
  }  
  `;
};

/**
 *
 * Luonutt initialization function, to be called by consumer on html side
 *
 */
async function initLuoNutt(props: LuonuttInitProps | string) {
  // if no props
  if (!props)
    throw new Error(`[LUONUTT] Luonutt initialized without any props.`);

  // providing functionality even if only username provided
  if (typeof props == "string") {
    props = {
      github_username: props.toString().trim(),
    } as LuonuttInitProps;
  }

  // extra utils function
  const UTILS = {
    log(...anything) {
      if ((props as LuonuttInitProps).options?.debug !== false) {
        console.log(`[LUONUTT] ${anything}`);
      }
    },
  };

  // check user name
  UTILS.log("Luonutt widget initialized")
  if (!props?.github_username) return UTILS.log("No Github username provided!");

  // fetching gh user 
  const LUONUTT_GH_REQ = await fetch(`https://api.github.com/users/${props.github_username}`)
  if(!LUONUTT_GH_REQ.ok) return UTILS.log("Failed to fetch Github User!");
  const LUONUTT_GH_USER = await LUONUTT_GH_REQ.json();
  console.log(12, LUONUTT_GH_USER)
  UTILS.log("Fetched Github User")
  
  // appenidng style
  const LUONUTT_STYLES = document.createElement("style");
  LUONUTT_STYLES.innerHTML = __LUONUTT_Styles();
  document.body.appendChild(LUONUTT_STYLES);
  UTILS.log(`Appended LUONUTT_STYLES to document body!`);

  // creating trigger
  const LUONUTT_TRIGGER_BTN = document.createElement("div");
  const LUONUTT_TRIGGER_BTN_TXT = props.trigger_options?.text
    ? props.trigger_options?.text
        .replace("{{username}}", props.github_username)
        .trim()
    : `Made by @${props.github_username}`;
  LUONUTT_TRIGGER_BTN.innerHTML = __LUONUTT_PopupTriggerBtn(
    LUONUTT_TRIGGER_BTN_TXT,
  );
  document.body.appendChild(LUONUTT_TRIGGER_BTN);
  UTILS.log(
    `Appended LUONUTT_TRIGGER_BTN to document body with content :- ${LUONUTT_TRIGGER_BTN_TXT}`,
  );

  // appending popup
  const LUONUTT_POPUP = document.createElement("div");
  LUONUTT_POPUP.innerHTML = __LUONUTT_Popup(null);
  document.body.appendChild(LUONUTT_POPUP);
  UTILS.log(`Appended LUONUTT_POPUP to document body!`);

  // Handlers
  const luonuttPopupHandler = () =>
    document
      .getElementById("__luonutt_popup")
      ?.classList.toggle("__luonutt_popup_open");

  // configuring handlers
  LUONUTT_TRIGGER_BTN.addEventListener("click", luonuttPopupHandler);
  document
    .getElementById("__luonutt_cross_btn")
    ?.addEventListener("click", luonuttPopupHandler);
  UTILS.log(`Configured LUONUTT Event Handlers!`);
}
