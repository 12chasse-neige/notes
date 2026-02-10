import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue' // Import custom layout
import RecentProjects from './components/RecentProjects.vue'
import './styles/style.css'
import { Theme } from 'vitepress'

const theme: Theme = {
  extends: DefaultTheme,
  // Override the default Layout with our custom one
  Layout: Layout,

  enhanceApp({ app }) {
    app.component('RecentProjects', RecentProjects)
  }
}

export default theme