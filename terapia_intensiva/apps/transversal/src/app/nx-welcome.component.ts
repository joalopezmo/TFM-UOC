import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'terapia-intensiva-nx-welcome',
  template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <style>
      :root {
        /**
     * colors
     */

        --imperial-red_12: hsla(357, 86%, 57%, 0.12);
        --pacific-blue_12: hsla(188, 78%, 41%, 0.12);
        --davys-gray_12: hsla(210, 9%, 31%, 0.12);
        --imperial-red: hsl(357, 86%, 57%);
        --sonic-sliver: hsl(0, 0%, 47%);
        --pacific-blue: hsl(188, 78%, 41%);
        --blue-ryb_12: hsla(220, 100%, 50%, 0.12);
        --space-cadet: hsl(220, 41%, 20%);
        --eerie-black: hsl(214, 10%, 13%);
        --davys-gray: hsl(210, 9%, 31%);
        --emerald_12: hsla(144, 62%, 53%, 0.12);
        --cool-gray: hsl(225, 11%, 59%);
        --cultured: hsl(225, 20%, 96%);
        --blue-ryb: hsl(220, 100%, 50%);
        --black_08: hsla(0, 0%, 0%, 0.06);
        --black_12: hsla(0, 0%, 0%, 0.12);
        --coral_12: hsla(15, 100%, 65%, 0.12);
        --sunglow: hsl(44, 100%, 61%);
        --emerald: hsl(144, 62%, 53%);
        --onyx-2: hsl(210, 10%, 23%);
        --coral: hsl(15, 100%, 65%);
        --white: hsl(0, 0%, 100%);
        --onyx: hsl(207, 8%, 21%);

        /**
     * typography
     */

        --ff-vietnam: 'Be Vietnam Pro', sans-serif;

        --fs-1: 1.563rem;
        --fs-2: 1.5rem;
        --fs-3: 1.25rem;
        --fs-4: 1.078rem;
        --fs-5: 1rem;
        --fs-6: 0.938rem;
        --fs-7: 0.875rem;
        --fs-8: 0.844rem;
        --fs-9: 0.813rem;
        --fs-10: 0.769rem;

        --fw-500: 500;
        --fw-600: 600;

        /**
     * transition
     */

        --transition: 0.25s ease;
        --cubic-out: cubic-bezier(0.45, 0.85, 0.5, 1);
        --cubic-in: cubic-bezier(0.5, 0, 0.5, 0.95);

        /**
     * radius
     */

        --radius-6: 6px;

        /**
     * shadow
     */

        --shadow-1: 0 12px 20px hsla(210, 10%, 23%, 0.07);
        --shadow-2: 0 2px 10px hsla(0, 0%, 0%, 0.04);
        --shadow-3: 0 2px 20px var(--black_08);
      }

      /*-----------------------------------*    #RESET
  *-----------------------------------*/

      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      a,
      img,
      span,
      data,
      time,
      input,
      button,
      span.icon {
        display: block;
      }

      button {
        font: inherit;
        background: none;
        border: none;
        cursor: pointer;
        text-align: left;
      }

      html {
        font-family: var(--ff-vietnam);
        scroll-behavior: smooth;
      }

      body {
        padding-block-start: 72px;
        background: var(--cultured);
      }

      :focus-visible {
        outline: 2px solid var(--onyx);
        outline-offset: 1px;
      }

      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: hsl(0, 0%, 95%);
      }

      ::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 80%);
      }

      ::-webkit-scrollbar-thumb:hover {
        background: hsl(0, 0%, 70%);
      }

      /*-----------------------------------*    #REUSED STYLE
  *-----------------------------------*/

      .container {
        padding-inline: 15px;
      }

      .icon-box {
        font-variation-settings: 'wght' 300;
      }

      .icon-box .icon {
        font-size: 22px;
      }

      .h2,
      .h3 {
        color: var(--onyx-2);
        font-weight: var(--fw-600);
      }

      .h2 {
        font-size: var(--fs-3);
      }

      .card {
        background: var(--white);
        position: relative;
        padding: 24px;
        border-radius: var(--radius-6);
        box-shadow: var(--shadow-2);
      }

      .card-menu-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        color: var(--cool-gray);
        padding: 6px;
        border-radius: var(--radius-6);
      }

      .card-menu-btn:is(:hover, :focus) {
        background: var(--black_08);
      }

      .ctx-menu {
        background: var(--white);
        position: absolute;
        top: 55px;
        right: 16px;
        width: 180px;
        padding: 10px 5px;
        box-shadow: var(--shadow-1);
        border-radius: var(--radius-6);
        display: none;
      }

      .ctx-menu.active {
        display: block;
      }

      .ctx-menu-btn {
        color: var(--color, var(--sonic-sliver));
        font-size: var(--fs-6);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        gap: 8px;
        padding: 5px 25px;
        border-radius: var(--radius-6);
      }

      .ctx-menu-btn:is(:hover, :focus) {
        color: var(--hover-color, var(--eerie-black));
        background: var(--black_08);
      }

      .ctx-menu-btn.red {
        --hover-color: var(--imperial-red);
        --color: var(--imperial-red);
      }

      .divider {
        height: 1px;
        background: var(--bg, var(--black_08));
        margin-block: var(--mb, 8px);
      }

      .card-divider {
        --bg: var(--black_12);
        --mb: 25px;
      }

      .section-title-wrapper {
        padding-block: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
      }

      .section-title {
        color: var(--onyx);
        font-size: var(--fs-5);
        font-weight: var(--fw-600);
      }

      .btn {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: var(--fs-9);
        font-weight: var(--fw-600);
        padding: 8px 16px;
        border-radius: var(--radius-6);
      }

      .btn .icon {
        font-size: 16px;
        font-variation-settings: 'wght' 400;
      }

      .btn-link {
        color: var(--blue-ryb);
      }

      .btn-link:is(:hover, :focus) {
        background: var(--blue-ryb_12);
      }

      .btn-primary {
        color: var(--blue-ryb);
        border: 1px solid var(--blue-ryb);
        transition: var(--transition);
      }

      .btn-primary:is(:hover, :focus) {
        background: var(--blue-ryb);
        color: var(--white);
        box-shadow: 0 10px 10px -8px var(--blue-ryb);
      }

      .card-badge {
        background: var(--bg, var(--davys-gray_12));
        color: var(--color, var(--davys-gray));
        font-size: var(--fs-10);
        font-weight: var(--fw-600);
        width: max-content;
        padding: 3px 8px;
        border-radius: var(--radius-6);
      }

      .card-badge.blue {
        --bg: var(--blue-ryb_12);
        --color: var(--blue-ryb);
      }

      .card-badge.orange {
        --bg: var(--coral_12);
        --color: var(--coral);
      }

      .card-badge.cyan {
        --bg: var(--pacific-blue_12);
        --color: var(--pacific-blue);
      }

      .card-badge.red {
        --bg: var(--imperial-red_12);
        --color: var(--imperial-red);
      }

      .card-badge.green {
        --bg: var(--emerald_12);
        --color: var(--emerald);
      }

      .card-badge.radius-pill {
        border-radius: 50px;
      }

      /*-----------------------------------*    #HEADER
  *-----------------------------------*/

      .header {
        background: var(--white);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 72px;
        padding-block: 20px;
        overflow: hidden;
        transition: 0.3s var(--cubic-in);
        box-shadow: var(--shadow-3);
        z-index: 1;
      }

      .header.active {
        height: 370px;
        transition: 0.5s var(--cubic-out);
      }

      .header > .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-size: var(--fs-1);
        font-weight: var(--fw-600);
        color: var(--space-cadet);
      }

      .menu-toggle-btn .icon {
        font-size: 28px;
      }

      .navbar {
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        background: var(--white);
        opacity: 0;
        visibility: hidden;
        transition: 0.5s var(--cubic-out);
      }

      .header.active .navbar {
        opacity: 1;
        visibility: visible;
      }

      .navbar-list {
        padding-inline: 15px;
        margin-bottom: 15px;
      }

      .navbar-link {
        color: var(--onyx);
        font-size: var(--fs-6);
        font-weight: var(--fw-500);
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px;
        border-radius: var(--radius-6);
      }

      :is(.navbar-link, .notification, .header-profile):is(:hover, :focus) {
        background: var(--black_08);
      }

      .navbar-link.active {
        color: var(--blue-ryb);
      }

      .user-action-list {
        padding-inline: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
      }

      .notification {
        color: var(--onyx);
        padding: 8px;
        border-radius: var(--radius-6);
      }

      .header-profile {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        padding-right: 15px;
        border-radius: var(--radius-6);
      }

      .profile-avatar {
        overflow: hidden;
        border-radius: var(--radius-6);
      }

      .header :is(.profile-title, .profile-subtitle) {
        font-size: var(--fs-9);
      }

      .header .profile-title {
        color: var(--onyx);
        margin-bottom: 2px;
        font-weight: var(--fw-600);
      }

      .header .profile-subtitle {
        color: var(--cool-gray);
        font-weight: var(--fw-500);
      }

      /*-----------------------------------*    #HOME
  *-----------------------------------*/

      .article.container {
        padding: 20px 14px;
      }

      .home {
        display: grid;
        gap: 25px;
      }

      .article-title {
        margin-bottom: 10px;
      }

      .article-subtitle {
        color: var(--davys-gray);
        font-size: var(--fs-6);
        font-weight: var(--fw-500);
        margin-bottom: 25px;
      }

      .profile-card-wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        margin-bottom: 32px;
      }

      .card-avatar {
        overflow: hidden;
        border-radius: var(--radius-6);
      }

      .card-title {
        color: var(--onyx);
        font-weight: var(--fw-600);
        margin-bottom: 5px;
      }

      .card-subtitle {
        color: var(--cool-gray);
        font-size: var(--fs-7);
      }

      .contact-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 16px;
      }

      .contact-link {
        color: var(--cool-gray);
        font-size: var(--fs-7);
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .progress-item:not(:last-child) {
        margin-bottom: 25px;
      }

      .progress-label {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .progress-title {
        color: var(--onyx-2);
        font-size: var(--fs-8);
        font-weight: var(--fw-500);
      }

      .progress-data {
        color: var(--davys-gray);
        font-size: var(--fs-6);
      }

      .progress-bar {
        margin-top: 15px;
        width: 100%;
        height: 6px;
        background: var(--cultured);
        border-radius: var(--radius-6);
        overflow: hidden;
      }

      .progress {
        width: var(--width, 100%);
        height: 100%;
        background: var(--bg, var(--onyx));
      }

      .home .card-wrapper {
        display: grid;
        gap: 25px;
      }

      .home .task-card {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .home .task-card .card-icon.green {
        --background: var(--emerald_12);
        --color: var(--emerald);
      }

      .home .task-card .card-icon.blue {
        --background: var(--pacific-blue_12);
        --color: var(--pacific-blue);
      }

      .home .task-card .icon {
        font-size: 28px;
        color: var(--color);
      }

      .home .task-card .card-icon {
        background: var(--background);
        padding: 10px;
        border-radius: var(--radius-6);
      }

      .home .task-card .card-data {
        color: var(--onyx-2);
        font-size: var(--fs-3);
        font-weight: var(--fw-600);
        margin-bottom: 5px;
      }

      .home .task-card .card-text {
        color: var(--cool-gray);
        font-size: var(--fs-6);
      }

      .revenue-card .card-title {
        margin-bottom: 15px;
      }

      .card-price {
        color: var(--onyx);
        font-size: var(--fs-2);
        font-weight: var(--fw-600);
        margin-bottom: 12px;
      }

      .revenue-card .card-text {
        color: var(--cool-gray);
        font-size: var(--fs-6);
      }

      .revenue-item {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .revenue-item:first-child {
        margin-bottom: 10px;
      }

      .revenue-item .icon {
        font-size: 30px;
      }

      .revenue-item .icon.green {
        color: var(--emerald);
      }

      .revenue-item .icon.red {
        color: var(--imperial-red);
      }

      .revenue-item-data {
        color: var(--onyx);
        font-size: var(--fs-6);
        font-weight: var(--fw-600);
        margin-bottom: 5px;
      }

      .revenue-item-text {
        color: var(--cool-gray);
        font-size: var(--fs-9);
      }

      /*-----------------------------------*    #PROJECTS
  *-----------------------------------*/

      .project-list {
        display: grid;
        gap: 25px;
      }

      .project-card .card-date {
        color: var(--cool-gray);
        font-size: var(--fs-9);
        font-weight: var(--fw-500);
        margin-bottom: 20px;
      }

      .project-card .card-title {
        color: var(--onyx);
        font-size: var(--fs-4);
        margin-bottom: 8px;
      }

      .project-card .card-title > a {
        color: inherit;
        transition: var(--transition);
      }

      .project-card .card-title > a:is(:hover, :focus) {
        color: var(--blue-ryb);
      }

      .project-card .card-badge {
        margin-bottom: 20px;
      }

      .project-card .card-text {
        color: var(--cool-gray);
        font-size: var(--fs-7);
        line-height: 1.7;
        margin-bottom: 15px;
      }

      .project-card .card-progress-box {
        margin-bottom: 15px;
      }

      .project-card .progress-title {
        font-weight: var(--fw-600);
      }

      .project-card .progress-data {
        color: var(--onyx);
        font-size: var(--fs-9);
        font-weight: var(--fw-600);
      }

      .project-card .progress-bar {
        margin-top: 10px;
      }

      .card-avatar-list {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .card-avatar-item > a {
        border: 2px solid var(--white);
        border-radius: 50%;
        overflow: hidden;
      }

      .card-avatar-item:not(:first-child) {
        margin-left: -15px;
      }

      /*-----------------------------------*    #TASKS
  *-----------------------------------*/

      .tasks-item:not(:last-child) {
        margin-bottom: 10px;
      }

      .tasks .task-card {
        display: grid;
        gap: 15px;
      }

      .tasks .card-input {
        display: flex;
        align-items: flex-start;
        gap: 8px;
      }

      .tasks .card-input > input {
        margin-top: 2px;
        accent-color: var(--blue-ryb);
      }

      .tasks .card-input > input:checked {
        filter: drop-shadow(0 0 2px var(--blue-ryb));
      }

      .tasks .task-label {
        color: var(--davys-gray);
        font-size: var(--fs-9);
        font-weight: var(--fw-600);
        line-height: 1.5;
      }

      .tasks .card-meta-list {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
      }

      .tasks .meta-box {
        color: var(--davys-gray);
        font-size: var(--fs-9);
        font-weight: var(--fw-600);
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .tasks .btn-primary {
        margin-block: 25px;
        margin-inline: auto;
      }

      .tasks .btn-primary .spiner {
        padding: 6px;
        border: 2px solid var(--blue-ryb);
        border-top-color: transparent;
        border-radius: 50%;
        animation: rotate 0.75s linear infinite;
        display: none;
      }

      .tasks .btn-primary:is(:hover, :focus) .spiner {
        border-color: var(--white);
        border-top-color: transparent;
      }

      @keyframes rotate {
        0% {
          transform: rotate(0);
        }

        100% {
          transform: rotate(1turn);
        }
      }

      .tasks .btn-primary.active .spiner {
        display: block;
      }
      @media (min-width: 400px) {
        /**
   * HOME
   */

        .revenue-item:first-child {
          margin-bottom: 0;
        }

        .revenue-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }

      /**
 * responsive for larger than 570px screen
 */

      @media (min-width: 570px) {
        /**
   * REUSED STYLE
   */

        .container {
          max-width: 550px;
          margin-inline: auto;
        }

        /**
   * HEADER
   */

        .navbar-list,
        .user-action-list {
          padding-inline: 0;
        }

        /**
   * HOME
   */

        .card-price {
          --fs-2: 1.625rem;
        }

        /**
   * TASKS
   */

        .tasks .card-meta-list {
          justify-content: flex-end;
        }
      }

      /**
 * responsive for larger than 768px screen
 */

      @media (min-width: 768px) {
        /**
   * REUSED STYLE
   */

        .container {
          max-width: 700px;
        }

        /**
   * HOME
   */

        .progress-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .progress-item:not(:last-child) {
          margin-bottom: 0;
        }

        .home .card-wrapper {
          grid-template-columns: 1fr 1fr;
        }
      }

      /**
 * responsive for larger than 992px screen
 */

      @media (min-width: 992px) {
        /**
   * REUSED STYLE
   */

        .container {
          max-width: 950px;
        }

        /**
   * HEADER
   */

        .menu-toggle-btn {
          display: none;
        }

        .header {
          height: unset;
          padding-block: 10px;
        }

        .header.active {
          height: unset;
        }

        .navbar {
          all: unset;
          flex-grow: 1;
        }

        .navbar .container {
          display: flex;
        }

        .navbar-list {
          margin-bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-inline: auto;
        }

        .user-action-list {
          flex-direction: row;
          gap: 20px;
        }

        /**
   * HOME
   */

        .article.container {
          padding-block: 35px;
        }

        .home {
          grid-template-columns: 1.25fr 0.75fr 1fr;
        }

        .home .card-wrapper {
          grid-template-columns: 1fr;
        }

        .progress-list {
          align-items: flex-end;
        }

        /**
   * PROJECTS
   */

        .project-list {
          grid-template-columns: repeat(3, 1fr);
        }

        /**
   * TASKS
   */

        .tasks .task-card {
          grid-template-columns: 1fr 0.5fr 0.5fr;
          align-items: center;
        }

        /**
   * FOOTER
   */

        .footer-list {
          margin-bottom: 0;
        }

        .footer .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }

      /**
 * responsive for larger than 1200px screen
 */

      @media (min-width: 1200px) {
        /**
   * REUSED STYLE
   */

        .container {
          max-width: 1150px;
        }

        /**
   * HEADER
   */

        .navbar-list {
          gap: 25px;
        }

        /**
   * HOME
   */

        .card-price {
          --fs-2: 1.78rem;
        }
      }
    </style>
    <head>
      <meta charset="utf-8" />
      <title>Angulardemos</title>
      <base href="/" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />

      <!-- 
    - google font link
  -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;900&display=swap"
        rel="stylesheet"
      />
      <!-- 
    - material icon link
  -->
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
    </head>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <main>
          <article class="container article">
            <h2 class="h2 article-title">Hola Jorge</h2>
            <p class="article-subtitle">Bienvenido al Dashboard!</p>

            <section class="home">
              <div class="card profile-card">
                <button
                  class="card-menu-btn icon-box"
                  aria-label="More"
                  data-menu-btn
                >
                  <span class="material-symbols-rounded  icon">more_horiz</span>
                </button>
                <ul class="ctx-menu">
                  <li class="ctx-item">
                    <button class="ctx-menu-btn icon-box">
                      <span
                        class="material-symbols-rounded  icon"
                        aria-hidden="true"
                        >edit</span
                      >
                      <span class="ctx-menu-text">Edit</span>
                    </button>
                  </li>
                  <li class="ctx-item">
                    <button class="ctx-menu-btn icon-box">
                      <span
                        class="material-symbols-rounded  icon"
                        aria-hidden="true"
                        >cached</span
                      >
                      <span class="ctx-menu-text">Refresh</span>
                    </button>
                  </li>
                  <li class="divider"></li>
                  <li class="ctx-item">
                    <button class="ctx-menu-btn red icon-box">
                      <span
                        class="material-symbols-rounded  icon"
                        aria-hidden="true"
                        >delete</span
                      >
                      <span class="ctx-menu-text">Deactivate</span>
                    </button>
                  </li>
                </ul>
                <div class="profile-card-wrapper">
                  <figure class="card-avatar">
                    <img
                      src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                      alt="Jorge Lopez"
                      width="48"
                      height="48"
                    />
                  </figure>
                  <div>
                    <p class="card-title">Jorge Lopez</p>
                    <p class="card-subtitle">Gerente</p>
                  </div>
                </div>
                <ul class="contact-list">
                  <li>
                    <a
                      href="mailto:therichposts@gmail.com"
                      class="contact-link icon-box"
                    >
                      <span class="material-symbols-rounded  icon">mail</span>
                      <p class="text">joalopezmo@uoc.edu</p>
                    </a>
                  </li>
                  <li>
                    <a href="tel:00123456789" class="contact-link icon-box">
                      <span class="material-symbols-rounded  icon">call</span>
                      <p class="text">+00 123-456-789</p>
                    </a>
                  </li>
                </ul>
                <div class="divider card-divider"></div>
                <ul class="progress-list">
                  <li class="progress-item">
                    <div class="progress-label">
                      <p class="progress-title">Project Completion</p>
                      <data class="progress-data" value="85">85%</data>
                    </div>
                    <div class="progress-bar">
                      <div
                        class="progress"
                        style="--width: 85%; --bg: var(--blue-ryb);"
                      ></div>
                    </div>
                  </li>
                  <li class="progress-item">
                    <div class="progress-label">
                      <p class="progress-title">Overall Rating</p>
                      <data class="progress-data" value="1.0">1.0</data>
                    </div>
                    <div class="progress-bar">
                      <div
                        class="progress"
                        style="--width: 10%; --bg: var(--emerald);"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card-wrapper">
                <div class="card task-card">
                  <div class="card-icon icon-box green">
                    <span class="material-symbols-rounded  icon">task_alt</span>
                  </div>
                  <div>
                    <data class="card-data" value="21">21</data>
                    <p class="card-text">Tareas completas</p>
                  </div>
                </div>
                <div class="card task-card">
                  <div class="card-icon icon-box blue">
                    <span class="material-symbols-rounded  icon"
                      >drive_file_rename_outline</span
                    >
                  </div>
                  <div>
                    <data class="card-data" value="21">21</data>
                    <p class="card-text">Tareas en progreso</p>
                  </div>
                </div>
              </div>
              <div class="card revenue-card">
                <button
                  class="card-menu-btn icon-box"
                  aria-label="More"
                  data-menu-btn
                >
                  <span class="material-symbols-rounded  icon">more_horiz</span>
                </button>
                <ul class="ctx-menu">
                  <li class="ctx-item">
                    <button class="ctx-menu-btn icon-box">
                      <span
                        class="material-symbols-rounded  icon"
                        aria-hidden="true"
                        >edit</span
                      >
                      <span class="ctx-menu-text">Edit</span>
                    </button>
                  </li>
                  <li class="ctx-item">
                    <button class="ctx-menu-btn icon-box">
                      <span
                        class="material-symbols-rounded  icon"
                        aria-hidden="true"
                        >cached</span
                      >
                      <span class="ctx-menu-text">Refresh</span>
                    </button>
                  </li>
                </ul>
                <p class="card-title">Ingresos netos</p>
                <data class="card-price" value="50300">€50,300</data>
                <p class="card-text">Semana Anterior</p>
                <div class="divider card-divider"></div>
                <ul class="revenue-list">
                  <li class="revenue-item icon-box">
                    <span class="material-symbols-rounded  icon  green"
                      >trending_up</span
                    >
                    <div>
                      <data class="revenue-item-data" value="15">15%</data>
                      <p class="revenue-item-text">Mes Anterior</p>
                    </div>
                  </li>
                  <li class="revenue-item icon-box">
                    <span class="material-symbols-rounded  icon  red"
                      >trending_down</span
                    >
                    <div>
                      <data class="revenue-item-data" value="10">10%</data>
                      <p class="revenue-item-text">Semana Anterior</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <!-- 
        - #PROJECTS
      -->
            <section class="projects">
              <div class="section-title-wrapper">
                <h2 class="section-title">Unidades De Cuidado Intensivo</h2>
                <button class="btn btn-link icon-box">
                  <span>View All</span>
                  <span
                    class="material-symbols-rounded  icon"
                    aria-hidden="true"
                    >arrow_forward</span
                  >
                </button>
              </div>
              <ul class="project-list">
                <li class="project-item">
                  <div class="card project-card">
                    <button
                      class="card-menu-btn icon-box"
                      aria-label="More"
                      data-menu-btn
                    >
                      <span class="material-symbols-rounded  icon"
                        >more_horiz</span
                      >
                    </button>
                    <ul class="ctx-menu">
                      <li class="ctx-item">
                        <button class="ctx-menu-btn icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >visibility</span
                          >
                          <span class="ctx-menu-text">View</span>
                        </button>
                      </li>
                      <li class="ctx-item">
                        <button class="ctx-menu-btn icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >edit</span
                          >
                          <span class="ctx-menu-text">Edit</span>
                        </button>
                      </li>
                      <li class="divider"></li>
                      <li class="ctx-item">
                        <button class="ctx-menu-btn red icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >delete</span
                          >
                          <span class="ctx-menu-text">Delete</span>
                        </button>
                      </li>
                    </ul>
                    <time class="card-date" datetime="2022-04-09"
                      >May 03, 2023</time
                    >
                    <h3 class="card-title">
                      <a href="#">Clinica del prado</a>
                    </h3>
                    <div class="card-badge blue">Verificando</div>
                    <p class="card-text">
                      Actualizacion material medico-quirurjico...
                    </p>
                    <div class="card-progress-box">
                      <div class="progress-label">
                        <span class="progress-title">Progreso</span>
                        <data class="progress-data" value="75">75%</data>
                      </div>
                      <div class="progress-bar">
                        <div
                          class="progress"
                          style="--width: 75%; --bg: var(--emerald);"
                        ></div>
                      </div>
                    </div>
                    <ul class="card-avatar-list">
                      <li class="card-avatar-item">
                        <a href="#">
                          <img
                            src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                            alt="Jassa Foster"
                            width="32"
                            height="32"
                          />
                        </a>
                      </li>
                      <li class="card-avatar-item">
                        <a href="#">
                          <img
                            src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                            alt="John Foster"
                            width="32"
                            height="32"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="project-item">
                  <div class="card project-card">
                    <button
                      class="card-menu-btn icon-box"
                      aria-label="More"
                      data-menu-btn
                    >
                      <span class="material-symbols-rounded  icon"
                        >more_horiz</span
                      >
                    </button>
                    <ul class="ctx-menu">
                      <li class="ctx-item">
                        <button class="ctx-menu-btn icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >visibility</span
                          >
                          <span class="ctx-menu-text">View</span>
                        </button>
                      </li>
                      <li class="ctx-item">
                        <button class="ctx-menu-btn icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >edit</span
                          >
                          <span class="ctx-menu-text">Edit</span>
                        </button>
                      </li>
                      <li class="divider"></li>
                      <li class="ctx-item">
                        <button class="ctx-menu-btn red icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >delete</span
                          >
                          <span class="ctx-menu-text">Delete</span>
                        </button>
                      </li>
                    </ul>
                    <time class="card-date" datetime="2022-04-09"
                      >Feb 09, 2022</time
                    >
                    <h3 class="card-title">
                      <a href="#">Clinica Antioquia</a>
                    </h3>
                    <div class="card-badge orange">Planeando</div>
                    <p class="card-text">
                      Plan de negocio con nuevas utilidades...
                    </p>
                    <div class="card-progress-box">
                      <div class="progress-label">
                        <span class="progress-title">Progreso</span>
                        <data class="progress-data" value="50">50%</data>
                      </div>
                      <div class="progress-bar">
                        <div
                          class="progress"
                          style="--width: 50%; --bg: var(--imperial-red);"
                        ></div>
                      </div>
                    </div>
                    <ul class="card-avatar-list">
                      <li class="card-avatar-item">
                        <a href="#">
                          <img
                            src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                            alt="Jassa Foster"
                            width="32"
                            height="32"
                          />
                        </a>
                      </li>
                      <li class="card-avatar-item">
                        <a href="#">
                          <img
                            src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                            alt="John Foster"
                            width="32"
                            height="32"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="project-item">
                  <div class="card project-card">
                    <button
                      class="card-menu-btn icon-box"
                      aria-label="More"
                      data-menu-btn
                    >
                      <span class="material-symbols-rounded  icon"
                        >more_horiz</span
                      >
                    </button>
                    <ul class="ctx-menu">
                      <li class="ctx-item">
                        <button class="ctx-menu-btn icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >visibility</span
                          >
                          <span class="ctx-menu-text">View</span>
                        </button>
                      </li>
                      <li class="ctx-item">
                        <button class="ctx-menu-btn icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >edit</span
                          >
                          <span class="ctx-menu-text">Edit</span>
                        </button>
                      </li>
                      <li class="divider"></li>
                      <li class="ctx-item">
                        <button class="ctx-menu-btn red icon-box">
                          <span
                            class="material-symbols-rounded  icon"
                            aria-hidden="true"
                            >delete</span
                          >
                          <span class="ctx-menu-text">Delete</span>
                        </button>
                      </li>
                    </ul>
                    <time class="card-date" datetime="2022-04-09"
                      >Jun 09, 2023</time
                    >
                    <h3 class="card-title">
                      <a href="#">Hospital la Maria</a>
                    </h3>
                    <div class="card-badge cyan">Desarrollo</div>
                    <p class="card-text">
                      Actualizacion y compra de biomedicos, analisis...
                    </p>
                    <div class="card-progress-box">
                      <div class="progress-label">
                        <span class="progress-title">Progreso</span>
                        <data class="progress-data" value="60">60%</data>
                      </div>
                      <div class="progress-bar">
                        <div
                          class="progress"
                          style="--width: 60%; --bg: var(--sunglow);"
                        ></div>
                      </div>
                    </div>
                    <ul class="card-avatar-list">
                      <li class="card-avatar-item">
                        <a href="#">
                          <img
                            src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                            alt="Jassa Foster"
                            width="32"
                            height="32"
                          />
                        </a>
                      </li>
                      <li class="card-avatar-item">
                        <a href="#">
                          <img
                            src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"
                            alt="John Foster"
                            width="32"
                            height="32"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>
            <!-- 
        - #TASKS
      -->
            <section class="tasks">
              <div class="section-title-wrapper">
                <h2 class="section-title">Tareas</h2>
                <button class="btn btn-link icon-box">
                  <span>View All</span>
                  <span
                    class="material-symbols-rounded  icon"
                    aria-hidden="true"
                    >arrow_forward</span
                  >
                </button>
              </div>
              <ul class="tasks-list">
                <li class="tasks-item">
                  <div class="card task-card">
                    <div class="card-input">
                      <input type="checkbox" name="task-1" id="task-1" />
                      <label for="task-1" class="task-label">
                        Definir nuevo contrato de servicios con clinica B con el
                        equipo de ventas
                      </label>
                    </div>
                    <div class="card-badge cyan radius-pill">Hoy 10pm</div>
                    <ul class="card-meta-list">
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >list</span
                          >
                          <span>3/7</span>
                        </div>
                      </li>
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >comment</span
                          >
                          <data value="21">21</data>
                        </div>
                      </li>
                      <li>
                        <div class="card-badge red">High</div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="tasks-item">
                  <div class="card task-card">
                    <div class="card-input">
                      <input type="checkbox" name="task-2" id="task-2" />
                      <label for="task-2" class="task-label">
                        Diseño y revision plan de trabajo 2023
                      </label>
                    </div>
                    <div class="card-badge cyan radius-pill">Hoy 5pm</div>
                    <ul class="card-meta-list">
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >list</span
                          >
                          <span>10/11</span>
                        </div>
                      </li>
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >comment</span
                          >
                          <data value="5">5</data>
                        </div>
                      </li>
                      <li>
                        <div class="card-badge orange">Medium</div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="tasks-item">
                  <div class="card task-card">
                    <div class="card-input">
                      <input type="checkbox" name="task-3" id="task-3" />
                      <label for="task-3" class="task-label">
                        Verificar nuevas metricas con el equipo de analitica
                      </label>
                    </div>
                    <div class="card-badge radius-pill">Mañana 5pm</div>
                    <ul class="card-meta-list">
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >list</span
                          >
                          <span>5/11</span>
                        </div>
                      </li>
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >comment</span
                          >
                          <data value="7">7</data>
                        </div>
                      </li>
                      <li>
                        <div class="card-badge orange">Medium</div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="tasks-item">
                  <div class="card task-card">
                    <div class="card-input">
                      <input type="checkbox" name="task-4" id="task-4" />
                      <label for="task-4" class="task-label">
                        Reunion parte medico Clinica del prado
                      </label>
                    </div>
                    <div class="card-badge radius-pill">Jun 11, 3pm</div>
                    <ul class="card-meta-list">
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >list</span
                          >
                          <span>0/5</span>
                        </div>
                      </li>
                      <li>
                        <div class="meta-box icon-box">
                          <span class="material-symbols-rounded  icon"
                            >comment</span
                          >
                          <data value="3">3</data>
                        </div>
                      </li>
                      <li>
                        <div class="card-badge green">Low</div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button class="btn btn-primary" data-load-more>
                <span class="spiner"></span>
                <span>Load More</span>
              </button>
            </section>
          </article>
        </main>
        -->
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
