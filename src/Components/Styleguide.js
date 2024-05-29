import React from "react";

const Styleguide = () => {
  return (
    <div className="media-card">
      <div className="media-card__cover">
        <h3 className="media-card__name">Styleguide</h3>
        <p className="media-card__description">
          General Styling -The app is dark-themed. -Follows similar UI elements
          as netflix. -Font used in the ass is a system font stack with a fall
          back to sans-serif fonts for better compatibility. - Use consistent
          naming conventions for classes and components. - Organise CSS files by
          component or functionality to maintain a modular structure. - Use
          semantic HTML tags whenever possible for better accessibility and
          readability. - Ensure that all components have appropriate `aria-`
          attributes for screen readers. - Maintain a consistent colour scheme
          and typography throughout the application. - Optimise images and other
          assets for faster loading times. - Consider using a CSS-in-JS library
          like styled-components for better maintainability and responsiveness.
          Banner Component - Use a more descriptive class name for the banner,
          such as `MamaMooBanner`. - Adjust the font sizes and weights to create
          a better visual hierarchy. - Add hover effects or animations to the
          buttons for better interactivity. - Consider using a background image
          with a lower opacity to make the text more readable. Header Component
          - Use a more specific class name for the header, such as
          `MamaMooHeader`. - Consider using a logo with a transparent background
          for better visibility on different backgrounds. - Add a hover effect
          or animation to the logo and avatar for better interactivity. Cards
          Component - Use a more descriptive class name for the cards, such as
          `MamaMooCard`. - Add a hover effect or animation to the cards for
          better interactivity. - Consider adding a play button overlay on the
          thumbnail to indicate that it's a video. Slider Component - Use a more
          descriptive class name for the slider, such as `MamaMooSlider`. - Add
          a loading state or skeleton loader while the data is being fetched. -
          Consider adding navigation buttons or pagination for better user
          experience. Trailer Modal Component - Use a more descriptive class
          name for the modal, such as `MamaMooTrailerModal`. - Add a loading
          state or spinner while the trailer is being fetched. - Consider adding
          a close button outside the iframe for better accessibility. Responsive
          Design - Ensure that all components are responsive and adapt well to
          different screen sizes. - Use CSS media queries or a CSS-in-JS library
          like styled-components to handle responsive styles. - Test the app on
          various devices and screen sizes to ensure a consistent user
          experience. Accessibility - Ensure that all components have
          appropriate ARIA attributes for screen readers. - Use semantic HTML
          tags whenever possible for better accessibility. - Ensure that all
          colours have sufficient contrast for readability. - Test the app with
          a screen reader to ensure a good user experience for users with
          disabilities. Performance - Optimise images and other assets for
          faster loading times. - Consider using lazy loading or code splitting
          to improve initial load performance. - Measure and monitor the app's
          performance using tools like Lighthouse or PageSpeed Insights.
        </p>
      </div>
    </div>
  );
};

export default Styleguide;
