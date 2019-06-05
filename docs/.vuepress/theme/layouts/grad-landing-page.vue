<template>
<div :class="['theme-container', 'grad-landing-page', isSidebarOpen ? 'sidebar-open' : '']">
    <Navbar 
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
</template>

<script>
import SearchBox from '@SearchBox'
import Navbar from '@parent-theme/components/Navbar.vue'
import Sidebar from '@parent-theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@parent-theme/util'

export default {
    components: { SearchBox, Navbar, Sidebar },
    
    data () {
        return {
            isSidebarOpen: false
        }
    },
    methods: {
        toggleSidebar (to) {
            this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
        },
    },
    computed: {
        sidebarItems () {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            )
        },
    }
}
</script>

<style src="@parent-theme/styles/index.styl" lang="stylus"></style>
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

@media(min-width: 719px) {
    .grad-landing-page .sidebar {
        display: none;
    }
}

</style>
