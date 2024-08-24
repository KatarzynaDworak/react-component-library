# Thanks for viewing my Project ✨

## Main goal of my work was to:

- Build Reusable Components: Develop small and large reusable components to create flexible templates for faster web development.

- Create a Modular Structure: Implement a modular structure to enhance code maintainability and scalability, making it easy to reuse components across different parts of the project.

- Enhance User Experience: Design components with user experience in mind, focusing on a clean and responsive UI that provides a seamless experience across devices.

- Implement Component Communication: Allow components to communicate effectively through props, enabling dynamic data handling and flexible rendering.

- Apply Inline Styling: Utilize inline styling to quickly apply and adjust styles directly within the components, ensuring that each component is styled consistently and efficiently.

## Solutions Provided in the Project:
- Header Component:

A flexible header component that includes a logo and navigation menu. The navigation menu dynamically renders based on provided menu items.

      const menuItems = [
          {text: 'News', url: '/'},
          {text: 'Regulations', url: '/regulations'}
      ];
      
      const Header = () => {
          return (
              <div style={headerStyles}>
                  <Logo />
                  <Nav items={menuItems} />
              </div>
          );
      };
- Content Component:

The content area is split into three sections: left, right, and main content. The main content can dynamically render different components, such as a gallery or posts, passed through props.

      const Content = () => {
          return (
              <div style={contentStyles}>
                  <ContentLeft />
                  <ContentMain content={<Gallery />} />
                  <ContentRight />
              </div>
          );
      };

- Gallery Component:

A gallery component that displays a collection of images. It dynamically renders images based on the data passed to it.

      const galleryItems = [
          {photo: 'image1', url: '/image1'},
          {photo: 'image2', url: '/image2'}
      ];
      
      const Gallery = () => {
          return (
              <div style={galleryStyles}>
                  {galleryItems.map(item => (
                      <img key={item.photo} src={item.url} alt={item.photo} style={imgStyles} />
                  ))}
              </div>
          );
      };
- Footer Component:

A footer component that includes copyright information and a navigation menu. It is designed to be flexible and reusable across different pages.

      const Footer = () => {
          return (
              <footer style={footerStyles}>
                  <Copyrights />
                  <Nav items={footerMenuItems} />
              </footer>
          );
      };
- Page Components:

Large components like PagePost, PageCategory, and PageGallery bring together smaller components to create fully functional pages. These components showcase the flexibility of the reusable components.

      const PagePost = () => {
          return (
              <>
                  <Header />
                  <Content main={<Post data={post} />} />
                  <Footer />
              </>
          );
      };

## Installation and Setup
To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/yourusername/react-component-library.git

## Navigate to the project directory:

cd react-component-library

Install dependencies:
      npm install

Start the development server:
      npm run dev

## :blue_heart:  You can find me on: 
<br />

[<img align="left" alt="Katarzyna Dworak LinkedIn" width="40px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />](https://www.linkedin.com/in/katarzynadworakk/)

<br /> 
<br />

If you have any questions feel free to get in touch with me (contact in the [profile readme](https://github.com/katarzynadworak)).

