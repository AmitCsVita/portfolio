# Amit Kumar - Portfolio Website

A modern, responsive portfolio website for Amit Kumar, a Digital Marketing Specialist & Web Developer. This portfolio website showcases Amit's professional experience, skills, projects, and provides contact information.

## Features

- Modern and clean design
- Fully responsive layout for all device sizes
- Interactive navigation and smooth scrolling
- Sections for showcasing professional experience, skills, education, and projects
- Contact form with basic validation
- Animated elements for better user experience

## Technologies Used

- HTML5
- CSS3 (with CSS variables for easy customization)
- JavaScript (Vanilla JS, no frameworks required)
- Font Awesome for icons
- Google Fonts (Roboto and Montserrat)

## Project Structure

```
portfolio-website/
├── Index.html       # Main HTML file
├── styles.css       # CSS styles
├── script.js        # JavaScript functionality
└── README.md        # Project documentation
```

## Setup and Usage

1. Clone or download this repository
2. Open `Index.html` in your browser to view the website

## Customization

### Personal Information

To update the personal information, edit the corresponding sections in the `Index.html` file:

- Name, professional title, and summary in the hero section
- Contact information in the about and contact sections
- Work experience, education, skills, and projects in their respective sections

### Styling

The website uses CSS variables for easy customization of colors and styles. To change the color scheme, edit the following variables in the `styles.css` file:

```css
:root {
    --primary-color: #3498db;    /* Main accent color */
    --secondary-color: #2c3e50;  /* Secondary color */
    --accent-color: #e74c3c;     /* Highlight color */
    --light-color: #f8f9fa;      /* Light background */
    --dark-color: #343a40;       /* Dark text color */
    --text-color: #333;          /* Main text color */
}
```

### Adding a Profile Picture

To replace the profile picture placeholder with an actual image:

1. Add your profile image to the project folder
2. In `Index.html`, find the `.hero-image` div and replace the placeholder with an image tag:

```html
<div class="hero-image">
    <img src="your-profile-image.jpg" alt="Amit Kumar" class="profile-image">
</div>
```

3. Then style the image in `styles.css`:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--box-shadow);
}
```

## Browser Support

This website is compatible with all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use.

## Contact

For any questions or suggestions, please contact:

Amit Kumar
- Email: amitcsvita@gmail.com
- Phone: +91 7060020814 