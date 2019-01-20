<template>
<div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
>
    <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
    />

    <div
        class="sidebar-mask"
        @click="toggleSidebar(false)"
    ></div>

    <Sidebar
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
    >
        <slot
            name="sidebar-top"
            slot="top"
        />
        <slot
            name="sidebar-bottom"
            slot="bottom"
        />
    </Sidebar>
    <div class="grad-landing-page">
        <div class="grad-landing-page__heading-wrapper">
            <img class="grad-landing-page__icon" :src="$withBase('/adlerkopp.png')" />
            <h1 class="grad-landing-page__heading">Gruppe Adler Wiki</h1>
        </div>
        <div class="grad-landing-page__input-wrapper">
            <SearchBox/>
        </div>
        <div class="grad-landing-page__link-wrapper">
            <a href="wiki-index.html">Index</a>
            <a href="infrastruktur/wiki-how-to.html">Wiki How-To</a>
        </div>
    </div>
    <Page :sidebar-items="sidebarItems" />
</div>
</template>

<script>
import Navbar from '@parent-theme/components/Navbar.vue'
import Page from '@parent-theme/components/Page.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@parent-theme/util'
import SearchBox from '@SearchBox'

export default {
    components: { Page, Sidebar, Navbar, SearchBox },

    data () {
        return {
            isSidebarOpen: false
        }
    },

    computed: {
        shouldShowNavbar () {
            const { themeConfig } = this.$site
            const { frontmatter } = this.$page
            if (
                frontmatter.navbar === false ||
                themeConfig.navbar === false) {
                return false
            }
            return (
                this.$title ||
                themeConfig.logo ||
                themeConfig.repo ||
                themeConfig.nav ||
                this.$themeLocaleConfig.nav
            )
        },

        shouldShowSidebar () {
            const { frontmatter } = this.$page
            return (
                !frontmatter.home &&
                frontmatter.sidebar !== false &&
                this.sidebarItems.length
            )
        },

        sidebarItems () {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            )
        },

        pageClasses () {
            const userPageClass = this.$page.frontmatter.pageClass
            return [
                {
                'no-navbar': !this.shouldShowNavbar,
                'sidebar-open': this.isSidebarOpen,
                'no-sidebar': !this.shouldShowSidebar
                },
                userPageClass
            ]
        }
    },

    mounted () {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false
        })
    },

    methods: {
        toggleSidebar (to) {
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        },

    // side swipe
        onTouchStart (e) {
            this.touchStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            }
        },

        onTouchEnd (e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x
            const dy = e.changedTouches[0].clientY - this.touchStart.y
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx > 0 && this.touchStart.x <= 80) {
                    this.toggleSidebar(true)
                } else {
                    this.toggleSidebar(false)
                }
            }
        }
    }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="@parent-theme/styles/theme.styl" lang="stylus"></style>
<style lang="scss">
.grad-landing-page {
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__heading-wrapper {
        align-items: center;
        display: flex;
    }

    &__link-wrapper {
        display: flex;
        margin-top: 20px;
        a {
            margin: 0px 20px;
            color: #AAA;
        }
    }

    &__icon {
        height: 3rem;
        margin-right: 0.5rem;
    }

    >*:last-child {
        margin-bottom: 5rem;
    }

    &__input-wrapper .search-box {
        margin-right: 0px;

        input {
            background-size: 2rem;
            height: 4rem;
            width: 40rem;
            max-width: 95vw;
            padding-left:4rem;
            box-sizing: border-box;
            background-position: 1.2rem 1rem;
            font-size: 1.8rem;
            border-color: #cfd4db;
            left: auto;
            right: auto;

            &:focus {
                border-color: #d18d1f;
            }
        }

        .suggestions {
            width: 40rem;
            max-width: 95vw;
            box-sizing: border-box;
            top: 3rem;
        }
    }

    .navbar .search-box {
        display: none;
    }
}
.page {
    display: none !important;
}
</style>
