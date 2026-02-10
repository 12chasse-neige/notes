import { createContentLoader } from 'vitepress'

// Define the shape of the post data
interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    } | null
    excerpt: string | undefined
}

// Declare global global types to avoid TS errors if necessary
declare const data: Post[]
export { data }

/**
 * Load all Markdown files in the current directory.
 * The glob pattern 'physics/*.md' is relative to the source root (docs folder).
 */
export default createContentLoader('maths/*.md', {
    includeSrc: false, // Do not load the raw markdown content (for performance)
    render: true,      // Render the content to HTML (useful for excerpts)
    excerpt: true,     // Extract the excerpt (content before ---)

    // Transform the raw data before returning it to the component
    transform(raw): Post[] {
        return raw
            .filter(({ url }) => !url.endsWith('/')) // Exclude the index.md itself
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title || url.split('/').pop()?.replace('.md', '') || 'Untitled',
                url,
                excerpt,
                date: frontmatter.date ? {
                    time: +new Date(frontmatter.date),
                    string: new Date(frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    })
                } : null
            }))
            // Sort posts by date (newest first)
            .sort((a, b) => {
                const timeA = a.date?.time || 0
                const timeB = b.date?.time || 0
                return timeB - timeA
            })
    }
})