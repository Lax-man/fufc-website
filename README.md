# Featherston United FC Website

This is a simple, lightweight website for the Featherston United Football Club. It uses pure HTML and CSS, making it easy to maintain and edit without any complex software.

## Project Structure

- **`index.html`**: The main page of the website. It contains all the text and sections (Home, About, Fixtures, Contact).
- **`styles.css`**: The design file. It controls the colors (Royal Blue & Black), fonts, and layout.
- **`assets/`**: (Create this folder) store your images here.

## How to Initialize & Edit this Repository

1.  **Open the Folder**: You are arguably already here! Customarily, you would open this folder in a code editor like VS Code.
2.  **View the Website**: Simply double-click `index.html` to open it in your web browser. No server required.
3.  **Edit Content**:
    - To change text, open `index.html` and edit the text between the tags (e.g., `<h1>Featherston United FC</h1>`).
    - To add the real Registration Link: Find the "Register Now" button in `index.html` and replace `href="#"` with your Google Form URL.
    - To add the Fixtures Widget: Connect with Capital Football to get their "embed code" (iframe) and paste it into the "Fixtures" section in `index.html`.

## Deployment (Getting it Online)

Since this is a static site, you can host it for free on **GitHub Pages** or **Netlify**:

1.  Create a GitHub repository.
2.  Upload these files (`index.html`, `styles.css`).
3.  Go to Settings -> Pages and enable GitHub Pages.

## Implementation Plan (Reference)

### Goal
Create a lightweight, professional website starter for Featherston United FC using Royal Blue & Black theme.

### Features Implemented
- **Landing Page**: Hero section with "Register" Call-to-Action.
- **About/Info**: Section for club details.
- **Fixtures**: Placeholder for table or embed.
- **Contact**: Simple form structure (configured to `mailto` by default).

### Future Improvements
- [ ] Replace `hero-bg.jpg` with a real photo of the team or club grounds.
- [ ] Link the Contact Form to a service like Formspree or Google Apps Script so emails send automatically without opening the user's mail app.
