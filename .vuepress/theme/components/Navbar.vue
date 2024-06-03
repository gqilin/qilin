<template>
  <header class="navbar" :class="navbarBg ? 'navbar-bg' : ''">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath" class="home-link">
      <img
        class="logo"
        v-if="$themeConfig.logo"
        :src="$withBase($themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span ref="siteName" class="site-name" v-if="$siteTitle">{{
        $siteTitle
      }}</span>
    </router-link>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <Mode />
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox
        v-else-if="
          $themeConfig.search !== false && $frontmatter.search !== false
        "
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from "vue";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "@SearchBox";
import SidebarButton from "@theme/components/SidebarButton";
import NavLinks from "@theme/components/NavLinks";
import Mode from "@theme/components/Mode";
import { useInstance } from "@theme/helpers/composable";

export default defineComponent({
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Mode },

  setup(props, ctx) {
    const instance = useInstance();
    const linksWrapMaxWidth = ref(null);

    const algolia = computed(() => {
      return (
        instance.$themeLocaleConfig.algolia ||
        instance.$themeConfig.algolia ||
        {}
      );
    });
    const navbarBg = ref(false);
    const isAlgoliaSearch = computed(() => {
      return algolia.value && algolia.value.apiKey && algolia.value.indexName;
    });

    function css(el, property) {
      // NOTE: Known bug, will return 'auto' if style value is 'auto'
      const win = el.ownerDocument.defaultView;
      // null means not to return pseudo styles
      return win.getComputedStyle(el, null)[property];
    }

    onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
      const NAVBAR_VERTICAL_PADDING =
        parseInt(css(instance.$el, "paddingLeft")) +
        parseInt(css(instance.$el, "paddingRight"));

      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapMaxWidth.value = null;
        } else {
          linksWrapMaxWidth.value =
            instance.$el.offsetWidth -
            NAVBAR_VERTICAL_PADDING -
            ((instance.$refs.siteName && instance.$refs.siteName.offsetWidth) ||
              0);
        }
      };

      const handleScroll = () => {
        var scroll_top = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scroll_top = document.documentElement.scrollTop;
        } else if (document.body) {
          scroll_top = document.body.scrollTop;
        }
        scroll_top > window.innerHeight
          ? (navbarBg.value = true)
          : (navbarBg.value = false);
      };

      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("scroll", handleScroll,false);
    });

    
    return { linksWrapMaxWidth, algolia, isAlgoliaSearch, css, navbarBg };
  },
});
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  position: relative;
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  box-shadow var(--box-shadow)
  a, span, img
    display inline-block
    position: relative;
    z-index: 9;
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
    border-radius 50%
    position: relative;
    z-index: 9;
  .site-name
    font-size 1.2rem
    font-weight 600
    color var(--text-color)
    position relative
    position: relative;
    z-index: 9;
  .links
    position: relative;
    z-index: 9;
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top
.navbar:after{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color var(--background-color)
  opacity: 0.2;
  pointer-events: none;
  transition: all .5s
}
.navbar:hover:after{
  opacity: 0.9;

}
.navbar-bg{
  background-color var(--background-color)
}
@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left .2rem
</style>
