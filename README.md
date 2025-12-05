# Personal Portfolio Website

A modern, responsive personal portfolio website built with Jekyll (Ruby-based static site generator). This website showcases CV, education details, projects, and professional information.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **Clean Navigation**: Easy-to-use navigation between sections
- **CV & Education**: Detailed academic background and marksheet
- **Projects Showcase**: Portfolio of work and side projects
- **Contact Information**: Easy ways to get in touch
- **SEO Optimized**: Built-in SEO features with Jekyll SEO tag
- **Fast Loading**: Static site generation for optimal performance

## Project Structure

```
personal-website/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Custom layout templates
│   ├── default.html     # Main layout template
│   ├── home.html        # Homepage layout
│   └── page.html        # Page layout
├── _posts/              # Blog posts (if needed)
├── assets/              # Static assets
│   └── css/             # Custom CSS files
│       ├── custom.css   # Main custom styles
│       └── style.css    # Additional styles
├── cv.markdown          # CV and education page
├── projects.markdown    # Projects showcase page
├── about.markdown       # About and contact page
├── index.markdown       # Homepage
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Ruby (version 3.0 or higher)
- Bundler gem
- Jekyll gem

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Build the site**
   ```bash
   bundle exec jekyll build
   ```

4. **Serve locally**
   ```bash
   bundle exec jekyll serve
   ```

5. **View your site**
   Open your browser and go to `http://localhost:4000`

## Customization

### Personal Information

Update the following files with your information:

1. **`_config.yml`**: Update site title, email, description, and social links
2. **`cv.markdown`**: Add your education details, marksheet, and skills
3. **`projects.markdown`**: Showcase your projects and work
4. **`about.markdown`**: Personal information and contact details
5. **`index.markdown`**: Homepage content and introduction

### Styling

The website uses custom CSS with CSS variables for easy theming:

- **`assets/css/custom.css`**: Main stylesheet with modern design
- **`assets/css/style.css`**: Additional utility styles

Key CSS variables you can customize:
```css
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --secondary-color: #1e40af; /* Secondary color */
  --accent-color: #3b82f6;    /* Accent color */
  --text-color: #1f2937;      /* Main text color */
  --background-color: #ffffff; /* Background color */
}
```

### Adding New Pages

1. Create a new `.markdown` file in the root directory
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   permalink: /your-page-url/
   ---
   ```
3. Add your content in Markdown
4. Update navigation in `_layouts/default.html`

## Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`
4. Deploy!

### Other Hosting Services

Since Jekyll generates static files, you can host on any static hosting service:
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront
- Any web server

## Development

### Local Development

```bash
# Start development server with auto-reload
bundle exec jekyll serve --watch

# Build for production
bundle exec jekyll build

# Clean build (remove _site directory)
bundle exec jekyll clean
```

### Adding Dependencies

Add new gems to `Gemfile`:
```ruby
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag", "~> 2.6"
```

Then run:
```bash
bundle install
```

## Content Management

### Markdown Support

The site supports full Markdown syntax including:
- Headers
- Lists
- Links
- Images
- Tables
- Code blocks
- Blockquotes

### Front Matter

Each page can include front matter for configuration:
```yaml
---
layout: page
title: Page Title
permalink: /page-url/
description: Page description for SEO
---
```

## Troubleshooting

### Common Issues

1. **Jekyll not found**: Install Jekyll with `gem install jekyll bundler`
2. **Build errors**: Check `_config.yml` syntax
3. **CSS not loading**: Ensure CSS files are in `assets/css/` directory
4. **Navigation not working**: Check permalink URLs in navigation

### Getting Help

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll GitHub](https://github.com/jekyll/jekyll)
- [Jekyll Community](https://talk.jekyllrb.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider contributing back to the community!

---

**Built with ❤️ using Jekyll and modern web technologies**
