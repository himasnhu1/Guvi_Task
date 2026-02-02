# Copilot Instructions for Landing Page 2

## Project Overview

This is a **static HTML landing page** for an online coaching platform ("Askmeidentity"). The project uses:

- **HTML5** with semantic structure
- **Tailwind CSS** (via CDN) for styling with a custom theme
- **Vanilla JavaScript** for minimal interactivity

No build tools, frameworks, or dependencies—pure HTML, CSS, and JS.

## Key Architecture Patterns

### Tailwind CSS Custom Configuration

The project extends Tailwind's default theme with custom primary/secondary colors:

```javascript
colors: {
  primary: "#5b2be0",      // Purple
  secondary: "#6f7cf7",    // Indigo
}
```

All gradient buttons and CTAs use `from-primary to-secondary` or similar gradient pairs.

### Section Structure

The page follows a consistent layout pattern:

1. **Navbar** (sticky header with logo, nav links, auth buttons)
2. **Hero Section** (gradient background with call-to-action, search bar)
3. **Brand Strip** (client logos)
4. **Featured Courses** (grid of 6 course cards)
5. **Why Learn** (3-column feature section with stats and CTA)

Each major section is wrapped in `max-w-7xl mx-auto px-6` for consistent max-width and responsive padding.

### Responsive Design Convention

- Mobile-first Tailwind classes: `md:` prefix for medium screens and up
- Grid layouts scale: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Hero section: `grid-cols-1 md:grid-cols-2` for two-column layout on desktop

## Critical Code Patterns

### Gradient Buttons

Use the custom color gradient for primary CTAs:

```html
<button
  class="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-lg"
>
  Action Text
</button>
```

Secondary buttons use `border border-white` with `hover:bg-white hover:text-indigo-700`.

### Card Components

Course and feature cards follow this pattern:

```html
<div
  class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
>
  <div
    class="bg-gradient-to-br [gradient-colors] h-48 flex items-center justify-center"
  >
    <!-- Icon/Image -->
  </div>
  <div class="p-6">
    <!-- Card content -->
  </div>
</div>
```

Always include `overflow-hidden` for proper border-radius on child elements.

### Hover Effects

- Cards: `hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`
- Icons: JavaScript adds `shadow-md` on hover (see `featureCards` event listeners)
- Links: `hover:text-primary` for text links

## JavaScript Interactivity

Only one interactive feature in [index.html](index.html#L485-L506):

- **Feature card icon hover**: Adds/removes shadow on icon divs when card is hovered
- Targets elements with classes `.bg-blue-100`, `.bg-green-100`, `.bg-purple-100`
- Used for visual feedback on the "Why Learn" section cards

## Asset Management

Images directory structure (`Image/`):

- `LandingImage/` — Hero section images
- `featureCardImage/` — Course card placeholder images
- `NavBar/` — Navbar assets
- `TestimonialImage/`, `FooterCopyImage/`, etc. — Other sections (not yet implemented)

Currently uses Unsplash URLs and Flaticon for course icons. Replace with local assets by updating `src` attributes in `<img>` tags.

## Content Sections to Note

- **Pricing**: All courses hardcoded to "Rs.499"
- **Student counts & duration**: Static text in course cards (e.g., "1,957 Students", "01h 59m")
- **Stats section**: Impact metrics (10,000+ students, 95% placement, 200+ partners)
- **Brand strip**: Placeholder company logos (Spotify, Amazon, Cisco, Logitech)

## Best Practices for Updates

1. **Keep Tailwind classes consistent**: Use custom `primary`/`secondary` colors everywhere
2. **Maintain max-width container**: All sections use `max-w-7xl mx-auto px-6`
3. **Responsive-first**: Always test with `md:` breakpoint changes
4. **Preserve gradient patterns**: Don't replace multi-color gradients with flat colors
5. **Check icon hover state**: If modifying feature cards, update the JavaScript selector list

## Common Edit Scenarios

- **Change colors**: Update Tailwind config theme extension at top of file
- **Add course cards**: Duplicate a course card div, update gradient colors, icon URL, course name, price, student count
- **Modify hero text**: Edit the `<h1>` and `<p>` tags in hero section—preserve `<br />` tags for line breaks
- **Update navbar links**: Modify `<a>` tags in the `<nav>` element (not yet functional, all href="#")
