import React from 'react';

const Header = () => (
  <header id="header" className="full-header">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger"><i className="icon-reorder" /></div>
            {/* Logo
					============================================= */}
            <div id="logo">
              <a href="index.html" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo" /></a>
              <a href="index.html" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo" /></a>
            </div>{/* #logo end */}
            {/* Primary Navigation
					============================================= */}
            <nav id="primary-menu">
              <ul>
                <li className="current"><a href="index.html"><div>Home</div></a>
                  <ul>
                    <li><a href="index-corporate.html"><div>Home - Corporate</div></a>
                      <ul>
                        <li><a href="index-corporate.html"><div>Corporate - Layout 1</div></a></li>
                        <li><a href="index-corporate-2.html"><div>Corporate - Layout 2</div></a></li>
                        <li><a href="index-corporate-3.html"><div>Corporate - Layout 3</div></a></li>
                        <li><a href="index-corporate-4.html"><div>Corporate - Layout 4</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-portfolio.html"><div>Home - Portfolio</div></a>
                      <ul>
                        <li><a href="index-portfolio.html"><div>Portfolio - Layout 1</div></a></li>
                        <li><a href="index-portfolio-2.html"><div>Portfolio - Layout 2</div></a></li>
                        <li><a href="index-portfolio-3.html"><div>Portfolio - Masonry</div></a></li>
                        <li><a href="index-portfolio-4.html"><div>Portfolio - AJAX</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-blog.html"><div>Home - Blog</div></a>
                      <ul>
                        <li><a href="index-blog.html"><div>Blog - Layout 1</div></a></li>
                        <li><a href="index-blog-2.html"><div>Blog - Layout 2</div></a></li>
                        <li><a href="index-blog-3.html"><div>Blog - Layout 3</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-shop.html"><div>Home - Shop</div></a>
                      <ul>
                        <li><a href="index-shop.html"><div>Shop - Layout 1</div></a></li>
                        <li><a href="index-shop-2.html"><div>Shop - Layout 2</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-magazine.html"><div>Home - Magazine</div></a>
                      <ul>
                        <li><a href="index-magazine.html"><div>Magazine - Layout 1</div></a></li>
                        <li><a href="index-magazine-2.html"><div>Magazine - Layout 2</div></a></li>
                        <li><a href="index-magazine-3.html"><div>Magazine - Layout 3</div></a></li>
                      </ul>
                    </li>
                    <li><a href="landing.html"><div>Home - Landing Page</div></a>
                      <ul>
                        <li><a href="landing.html"><div>Landing Page - Layout 1</div></a></li>
                        <li><a href="landing-2.html"><div>Landing Page - Layout 2</div></a></li>
                        <li><a href="landing-3.html"><div>Landing Page - Layout 3</div></a></li>
                        <li><a href="landing-4.html"><div>Landing Page - Layout 4</div></a></li>
                        <li><a href="landing-5.html"><div>Landing Page - Layout 5</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-fullscreen-image.html"><div>Home - Full Screen</div></a>
                      <ul>
                        <li><a href="index-fullscreen-image.html"><div>Full Screen - Image</div></a></li>
                        <li><a href="index-fullscreen-slider.html"><div>Full Screen - Slider</div></a></li>
                        <li><a href="index-fullscreen-video.html"><div>Full Screen - Video</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-onepage.html"><div>Home - One Page</div></a>
                      <ul>
                        <li><a href="index-onepage.html"><div>One Page - Default</div></a></li>
                        <li><a href="index-onepage-2.html"><div>One Page - Submenu</div></a></li>
                        <li><a href="index-onepage-3.html"><div>One Page - Dots Style</div></a></li>
                      </ul>
                    </li>
                    <li><a href="index-wedding.html"><div>Home - Wedding</div></a></li>
                    <li><a href="index-restaurant.html"><div>Home - Restaurant</div></a></li>
                    <li><a href="index-events.html"><div>Home - Events</div></a></li>
                    <li><a href="index-parallax.html"><div>Home - Parallax</div></a></li>
                    <li><a href="index-app-showcase.html"><div>Home - App Showcase</div></a></li>
                    <li><a href="index-boxed.html"><div>Home - Boxed Layout</div></a></li>
                  </ul>
                </li>
                <li><a href="#"><div>Features</div></a>
                  <ul>
                    <li><a href="#"><div><i className="icon-stack" />Sliders</div></a>
                      <ul>
                        <li><a href="slider-revolution.html"><div>Revolution Slider</div></a>
                          <ul>
                            <li><a href="rs-demos.html"><div>Premium Templates</div></a></li>
                            <li><a href="slider-revolution.html"><div>Full Screen</div></a></li>
                            <li><a href="slider-revolution-fullwidth.html"><div>Full Width</div></a></li>
                            <li><a href="slider-revolution-kenburns.html"><div>Kenburns Effect</div></a></li>
                            <li><a href="slider-revolution-html5-videos.html"><div>HTML5 Video</div></a></li>
                          </ul>
                        </li>
                        <li><a href="slider-canvas.html"><div>Canvas Slider</div></a>
                          <ul>
                            <li><a href="slider-canvas.html"><div>Full Width</div></a></li>
                            <li><a href="slider-canvas-fade.html"><div>Fade Transition</div></a></li>
                            <li><a href="slider-canvas-autoplay.html"><div>Autoplay Feature</div></a></li>
                            <li><a href="slider-canvas-video-event.html"><div>Custom Video Event</div></a></li>
                            <li><a href="slider-canvas-pagination.html"><div>Pagination Navigation</div></a></li>
                            <li><a href="slider-canvas-3.html"><div>3 Columns</div></a></li>
                            <li><a href="slider-canvas-4.html"><div>4 Columns</div></a></li>
                            <li><a href="slider-canvas-5.html"><div>5 Columns</div></a></li>
                          </ul>
                        </li>
                        <li><a href="slider-flex.html"><div>Flex Slider</div></a>
                          <ul>
                            <li><a href="slider-flex.html"><div>Default Layout</div></a></li>
                            <li><a href="slider-flex-thumbs.html"><div>with Thumbs</div></a></li>
                          </ul>
                        </li>
                        <li><a href="slider-owl.html"><div>Owl Slider</div></a>
                          <ul>
                            <li><a href="slider-owl-full.html"><div>Full Width</div></a></li>
                            <li><a href="slider-owl.html"><div>Boxed Width</div></a></li>
                            <li><a href="slider-owl-videos.html"><div>Video Slider</div></a></li>
                          </ul>
                        </li>
                        <li><a href="static-parallax.html"><div>Static Media</div></a>
                          <ul>
                            <li><a href="static-parallax.html"><div>Static - Parallax</div></a></li>
                            <li><a href="static-image.html"><div>Static - Image</div></a></li>
                            <li><a href="static-thumbs-grid.html"><div>Static - Thumb Gallery</div></a></li>
                            <li><a href="static-html5-video.html"><div>Static - HTML5 Video</div></a></li>
                            <li><a href="static-embed-video.html"><div>Static - Embedded Video</div></a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="widgets.html"><div><i className="icon-gift" />Widgets</div></a>
                      <ul>
                        <li><a href="widgets.html"><div>Links</div></a></li>
                        <li><a href="widgets.html"><div>Flickr Photostream</div></a></li>
                        <li><a href="widgets.html"><div>Dribbble Shots</div></a></li>
                        <li><a href="widgets.html"><div>Instagram Feed</div></a></li>
                        <li><a href="widgets.html"><div>Posts List</div></a></li>
                        <li><a href="widgets.html"><div>Twitter Feed</div></a></li>
                        <li><a href="widgets.html"><div>Tabbed Widgets</div></a></li>
                        <li><a href="widgets.html"><div>Carousel</div></a></li>
                        <li><a href="widgets.html"><div>Subscribers</div></a></li>
                        <li><a href="widgets.html"><div>Social Icons</div></a></li>
                        <li><a href="widgets.html"><div>Testimonials</div></a></li>
                        <li><a href="widgets.html"><div>Quick Contact</div></a></li>
                        <li><a href="widgets.html"><div>Tags Cloud</div></a></li>
                        <li><a href="widgets.html"><div>Video Embeds</div></a></li>
                        <li><a href="widgets.html"><div>Raw Text/HTML</div></a></li>
                      </ul>
                    </li>
                    <li><a href="#"><div><i className="icon-umbrella" />Headers</div></a>
                      <ul>
                        <li><a href="header-light.html"><div>Light Version</div></a></li>
                        <li><a href="header-dark.html"><div>Dark Version</div></a></li>
                        <li><a href="header-transparent.html"><div>Transparent</div></a></li>
                        <li><a href="header-semi-transparent.html"><div>Semi Transparent</div></a>
                          <ul>
                            <li><a href="header-semi-transparent.html"><div>Light Version</div></a></li>
                            <li><a href="header-semi-transparent-dark.html"><div>Dark Version</div></a></li>
                          </ul>
                        </li>
                        <li><a href="header-side-left.html"><div>Left Side Header</div></a>
                          <ul>
                            <li><a href="header-side-left.html"><div>Fixed Position</div></a></li>
                            <li><a href="header-side-left-open.html"><div>OnClick Open</div></a></li>
                            <li><a href="header-side-left-open-push.html"><div>Push Content</div></a></li>
                          </ul>
                        </li>
                        <li><a href="header-side-right.html"><div>Right Side Header</div></a>
                          <ul>
                            <li><a href="header-side-right.html"><div>Fixed Position</div></a></li>
                            <li><a href="header-side-right-open.html"><div>OnClick Open</div></a></li>
                            <li><a href="header-side-right-open-push.html"><div>Push Content</div></a></li>
                          </ul>
                        </li>
                        <li><a href="header-floating.html"><div>Floating Version</div></a></li>
                        <li><a href="static-sticky.html"><div>Static Sticky</div></a></li>
                        <li><a href="responsive-sticky.html"><div>Responsive Sticky</div></a></li>
                        <li><a href="logo-changer.html"><div>Alternate Logos</div></a></li>
                        <li><a href="alternate-mobile-menu.html"><div>Alternate Mobile Menu</div></a></li>
                      </ul>
                    </li>
                    <li><a href="forms.html"><div><i className="icon-wpforms" />Forms</div></a></li>
                    <li><a href="side-panel.html"><div><i className="icon-line-layout" />Side Panel</div></a>
                      <ul>
                        <li><a href="side-panel-left-overlay.html"><div>Left Overlay</div></a></li>
                        <li><a href="side-panel-left-push.html"><div>Left Push</div></a></li>
                        <li><a href="side-panel-right-overlay.html"><div>Right Overlay</div></a></li>
                        <li><a href="side-panel.html"><div>Right Push</div></a></li>
                        <li><a href="side-panel-light.html"><div>Light Background</div></a></li>
                      </ul>
                    </li>
                    <li><a href="mega-menu.html"><div><i className="icon-line-columns" />Mega Menu</div></a></li>
                    <li><a href="#"><div><i className="icon-align-justify2" />Menu Styles</div></a>
                      <ul>
                        <li><a href="header-light.html"><div>Menu - Style 1</div></a></li>
                        <li><a href="menu-2.html"><div>Menu - Style 2</div></a></li>
                        <li><a href="menu-3.html"><div>Menu - Style 3</div></a></li>
                        <li><a href="menu-4.html"><div>Menu - Style 4</div></a></li>
                        <li><a href="menu-5.html"><div>Menu - Style 5</div></a></li>
                        <li><a href="menu-6.html"><div>Menu - Style 6</div></a></li>
                        <li><a href="menu-7.html"><div>Menu - Style 7</div></a></li>
                        <li><a href="menu-8.html"><div>Menu - Style 8</div></a></li>
                        <li><a href="menu-9.html"><div>Menu - Style 9</div></a></li>
                        <li><a href="menu-10.html"><div>Menu - Overlay</div></a></li>
                        <li><a href="split-menu.html"><div>Menu - Split Layout</div></a></li>
                      </ul>
                    </li>
                    <li><a href="#"><div><i className="icon-ok-sign" />Page Titles</div></a>
                      <ul>
                        <li><a href="page.html"><div>Left Align</div></a></li>
                        <li><a href="page-title-right.html"><div>Right Align</div></a></li>
                        <li><a href="page-title-center.html"><div>Center Align</div></a></li>
                        <li><a href="page-titledark.html"><div>Dark Style</div></a></li>
                        <li><a href="page-title-pattern.html"><div>Pattern Background</div></a></li>
                        <li><a href="page-title-parallax.html"><div>Parallax Background</div></a>
                          <ul>
                            <li><a href="page-title-parallax.html"><div>Default Header</div></a></li>
                            <li><a href="page-title-parallax-header.html"><div>Transparent Header</div></a></li>
                          </ul>
                        </li>
                        <li><a href="page-title-video.html"><div>HTML5 Video</div></a></li>
                        <li><a href="page-title-nobg.html"><div>No Background</div></a></li>
                        <li><a href="page-title-mini.html"><div>Mini Version</div></a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html"><div><i className="icon-envelope-alt" />Contact Pages</div></a>
                      <ul>
                        <li><a href="contact.html">Contact 1</a></li>
                        <li><a href="contact-2.html">Contact 2</a></li>
                        <li><a href="contact-3.html">Contact 3</a></li>
                        <li><a href="contact-4.html">Contact 4</a></li>
                        <li><a href="contact-5.html">Contact 5</a></li>
                        <li><a href="contact-6.html">Contact 6</a></li>
                        <li><a href="contact-7.html">Contact 7</a></li>
                      </ul>
                    </li>
                    <li><a href="#footer" data-scrollto="#footer"><div><i className="icon-th" />Footers</div></a>
                      <ul>
                        <li><a href="sticky-footer.html"><div>Sticky Footer</div></a></li>
                        <li><a href="#footer" data-scrollto="#footer"><div>Footer - Layout 1</div></a></li>
                        <li><a href="footer-2.html#footer"><div>Footer - Layout 2</div></a></li>
                        <li><a href="footer-3.html#footer"><div>Footer - Layout 3</div></a></li>
                        <li><a href="footer-4.html#footer"><div>Footer - Layout 4</div></a></li>
                        <li><a href="footer-5.html#footer"><div>Footer - Layout 5</div></a></li>
                        <li><a href="footer-6.html#footer"><div>Footer - Layout 6</div></a></li>
                        <li><a href="footer-7.html#footer"><div>Footer - Layout 7</div></a></li>
                      </ul>
                    </li>
                    <li><a href="#"><div><i className="icon-calendar3" />Events</div></a>
                      <ul>
                        <li><a href="events-calendar.html"><div>Full Width Calendar</div></a></li>
                        <li><a href="events-list.html"><div>Events List</div></a>
                          <ul>
                            <li><a href="events-list.html"><div>Right Sidebar</div></a></li>
                            <li><a href="events-list-left-sidebar.html"><div>Left Sidebar</div></a></li>
                            <li><a href="events-list-both-sidebar.html"><div>Both Sidebar</div></a></li>
                            <li><a href="events-list-fullwidth.html"><div>Full Width</div></a></li>
                            <li><a href="events-list-parallax.html"><div>Parallax List</div></a></li>
                          </ul>
                        </li>
                        <li><a href="event-single.html"><div>Single Event</div></a>
                          <ul>
                            <li><a href="event-single-right-sidebar.html"><div>Right Sidebar</div></a></li>
                            <li><a href="event-single-left-sidebar.html"><div>Left Sidebar</div></a></li>
                            <li><a href="event-single-both-sidebar.html"><div>Both Sidebar</div></a></li>
                            <li><a href="event-single.html"><div>Full Width</div></a></li>
                          </ul>
                        </li>
                        <li><a href="event-single-full-width-image.html"><div>Single Event - Full</div></a>
                          <ul>
                            <li><a href="event-single-full-width-image.html"><div>Parallax Image</div></a></li>
                            <li><a href="event-single-full-width-map.html"><div>Google Map</div></a></li>
                            <li><a href="event-single-full-width-slider.html"><div>Slider Gallery</div></a></li>
                            <li><a href="event-single-full-width-video.html"><div>HTML5 Video</div></a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="modal-onload.html"><div><i className="icon-line-expand" />Modal OnLoad</div></a>
                      <ul>
                        <li><a href="modal-onload.html"><div>Simple Layout</div></a></li>
                        <li><a href="modal-onload-iframe.html"><div>Video iFrame</div></a></li>
                        <li><a href="modal-onload-subscribe.html"><div>Subscription Form</div></a></li>
                        <li><a href="modal-onload-common-height.html"><div>Common Height</div></a></li>
                        <li><a href="modal-onload-cookie.html"><div>Cookies Enabled</div></a></li>
                      </ul>
                    </li>
                    <li><a href="coming-soon.html"><div><i className="icon-time" />Coming Soon</div></a>
                      <ul>
                        <li><a href="coming-soon.html"><div>Simple Layout</div></a></li>
                        <li><a href="coming-soon-2.html"><div>Parallax Image</div></a></li>
                        <li><a href="coming-soon-3.html"><div>HTML5 Video</div></a></li>
                      </ul>
                    </li>
                    <li><a href="profile.html"><div><i className="icon-user" />User Profile</div></a></li>
                  </ul>
                </li>
                <li className="mega-menu"><a href="#"><div>Pages</div></a>
                  <div className="mega-menu-content style-2 clearfix">
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Introduction</div></a>
                        <ul>
                          <li><a href="about.html"><div>About Us</div></a></li>
                          <li><a href="about-2.html"><div>About Us - Layout 2</div></a></li>
                          <li><a href="about-me.html"><div>About Me</div></a></li>
                          <li><a href="team.html"><div>Team Members</div></a></li>
                          <li><a href="jobs.html"><div>Careers</div></a></li>
                          <li><a href="side-navigation.html"><div>Side Navigation</div></a></li>
                          <li><a href="page-submenu.html"><div>Page Submenu</div></a></li>
                          <li><a href="sitemap.html"><div>Sitemap</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Utility</div></a>
                        <ul>
                          <li><a href="services.html"><div>Services - Layout 1</div></a></li>
                          <li><a href="services-2.html"><div>Services - Layout 2</div></a></li>
                          <li><a href="services-3.html"><div>Services - Layout 3</div></a></li>
                          <li><a href="faqs.html"><div>FAQs - Layout 1</div></a></li>
                          <li><a href="faqs-2.html"><div>FAQs - Layout 2</div></a></li>
                          <li><a href="faqs-3.html"><div>FAQs - Layout 3</div></a></li>
                          <li><a href="faqs-4.html"><div>FAQs - Layout 4</div></a></li>
                          <li><a href="maintenance.html"><div>Maintenance Page</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Layout Grids</div></a>
                        <ul>
                          <li><a href="full-width.html"><div>Full Width</div></a></li>
                          <li><a href="full-width-wide.html"><div>Full Width - Wide</div></a></li>
                          <li><a href="right-sidebar.html"><div>Right Sidebar</div></a></li>
                          <li><a href="left-sidebar.html"><div>Left Sidebar</div></a></li>
                          <li><a href="both-sidebar.html"><div>Both Sidebar</div></a></li>
                          <li><a href="both-right-sidebar.html"><div>Both Right Sidebar</div></a></li>
                          <li><a href="both-left-sidebar.html"><div>Both Left Sidebar</div></a></li>
                          <li><a href="blank-page.html"><div>Blank Page</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Miscellaneous</div></a>
                        <ul>
                          <li><a href="login-register.html"><div>Login/Register</div></a></li>
                          <li><a href="login-register-2.html"><div>Login/Register - Style 2</div></a></li>
                          <li><a href="login-register-3.html"><div>Login/Register - Style 3</div></a></li>
                          <li><a href="login-1.html"><div>Login - Style 1</div></a></li>
                          <li><a href="login-2.html"><div>Login - Style 2</div></a></li>
                          <li><a href="404.html"><div>404 - Simple Layout</div></a></li>
                          <li><a href="404-2.html"><div>404 - Parallax Image</div></a></li>
                          <li><a href="404-3.html"><div>404 - HTML5 Video</div></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu"><a href="#"><div>Portfolio</div></a>
                  <div className="mega-menu-content style-2 clearfix">
                    <ul className="mega-menu-column col-5">
                      <li className="mega-menu-title"><a href="#"><div>Grids</div></a>
                        <ul>
                          <li><a href="portfolio-1.html"><div>1 Column</div></a></li>
                          <li><a href="portfolio-2.html"><div>2 Columns</div></a></li>
                          <li><a href="portfolio-3.html"><div>3 Columns</div></a></li>
                          <li><a href="portfolio.html"><div>4 Columns</div></a></li>
                          <li><a href="portfolio-5.html"><div>5 Columns</div></a></li>
                          <li><a href="portfolio-6.html"><div>6 Columns</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li className="mega-menu-title"><a href="#"><div>Masonry</div></a>
                        <ul>
                          <li><a href="portfolio-mixed-masonry.html"><div>Mixed Columns</div></a></li>
                          <li><a href="portfolio-2-masonry.html"><div>2 Columns</div></a></li>
                          <li><a href="portfolio-3-masonry.html"><div>3 Columns</div></a></li>
                          <li><a href="portfolio-masonry.html"><div>4 Columns</div></a></li>
                          <li><a href="portfolio-5-masonry.html"><div>5 Columns</div></a></li>
                          <li><a href="portfolio-6-masonry.html"><div>6 Columns</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li className="mega-menu-title"><a href="#"><div>Loading Styles</div></a>
                        <ul>
                          <li><a href="portfolio.html"><div>jQuery Filter</div></a></li>
                          <li><a href="portfolio-jpagination.html"><div>jQuery Pagination</div></a></li>
                          <li><a href="portfolio-infinity-scroll.html"><div>Infinity Scroll</div></a></li>
                          <li><a href="portfolio-ajax.html"><div>AJAX In Page</div></a></li>
                          <li><a href="portfolio-ajax-in-modal.html"><div>AJAX In Modal</div></a></li>
                          <li><a href="portfolio-filter-styles.html"><div>Filter Styles</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li className="mega-menu-title"><a href="#"><div>Single Project</div></a>
                        <ul>
                          <li><a href="portfolio-single-extended.html"><div>Extended Item</div></a></li>
                          <li><a href="portfolio-single-fullwidth.html"><div>Parallax Image</div></a></li>
                          <li><a href="portfolio-single-gallery-full.html"><div>Slider Gallery</div></a></li>
                          <li><a href="portfolio-single-video-fullwidth-left-sidebar.html"><div>HTML5 Video</div></a></li>
                          <li><a href="portfolio-single-thumbs-right-sidebar.html"><div>Masonry Thumbs</div></a></li>
                          <li><a href="portfolio-single-video-both-sidebar.html"><div>Embed Video</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li className="mega-menu-title"><a href="#"><div>Layouts</div></a>
                        <ul>
                          <li><a href="portfolio-nomargin.html"><div>Default</div></a></li>
                          <li><a href="portfolio-1-alt-right-sidebar.html"><div>Right Sidebar</div></a></li>
                          <li><a href="portfolio-3-left-sidebar.html"><div>Left Sidebar</div></a></li>
                          <li><a href="portfolio-2-both-sidebar.html"><div>Both Sidebar</div></a></li>
                          <li><a href="portfolio-fullwidth-notitle.html"><div>100% Width</div></a></li>
                          <li><a href="portfolio-parallax.html"><div>Parallax</div></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu"><a href="#"><div>Blog</div></a>
                  <div className="mega-menu-content style-2 clearfix">
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Default</div></a>
                        <ul>
                          <li><a href="blog.html"><div>Right Sidebar</div></a></li>
                          <li><a href="blog-left-sidebar.html"><div>Left Sidebar</div></a></li>
                          <li><a href="blog-both-sidebar.html"><div>Both Sidebar</div></a></li>
                          <li><a href="blog-full-width.html"><div>Full Width</div></a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-title"><a href="#"><div>Timeline</div></a>
                        <ul>
                          <li><a href="blog-timeline-right-sidebar.html"><div>Right Sidebar</div></a></li>
                          <li><a href="blog-timeline-left-sidebar.html"><div>Left Sidebar</div></a></li>
                          <li><a href="blog-timeline.html"><div>Full Width</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Masonry</div></a>
                        <ul>
                          <li><a href="blog-masonry.html"><div>4 Columns</div></a></li>
                          <li><a href="blog-masonry-3.html"><div>3 Columns</div></a></li>
                          <li><a href="blog-masonry-2.html"><div>2 Columns</div></a></li>
                          <li><a href="blog-masonry-full.html"><div>100% Width</div></a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-title"><a href="#"><div>Grid</div></a>
                        <ul>
                          <li><a href="blog-grid.html"><div>4 Columns</div></a></li>
                          <li><a href="blog-grid-3.html"><div>3 Columns</div></a></li>
                          <li><a href="blog-grid-2.html"><div>2 Columns</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Small Thumbs</div></a>
                        <ul>
                          <li><a href="blog-small-left-sidebar.html"><div>Left Sidebar</div></a></li>
                          <li><a href="blog-small.html"><div>Right Sidebar</div></a></li>
                          <li><a href="blog-small-both-sidebar.html"><div>Both Sidebar</div></a></li>
                          <li><a href="blog-small-full-width.html"><div>Full Width</div></a></li>
                          <li><a href="blog-small-alt.html"><div>Alternate Layout</div></a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-title"><a href="#"><div>Item Splitting</div></a>
                        <ul>
                          <li><a href="blog-grid.html"><div>Pagination</div></a></li>
                          <li><a href="blog-masonry.html"><div>Infinite Scroll</div></a></li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="mega-menu-column col-lg-3">
                      <li className="mega-menu-title"><a href="#"><div>Single</div></a>
                        <ul>
                          <li><a href="blog-single.html"><div>Default Layout</div></a></li>
                          <li><a href="blog-single-left-sidebar.html"><div>Left Sidebar</div></a></li>
                          <li><a href="blog-single-full.html"><div>Full Width</div></a></li>
                          <li><a href="blog-single-small.html"><div>Small Image</div></a></li>
                          <li><a href="blog-single-split-right-sidebar.html"><div>Split Layout</div></a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-title"><a href="#"><div>Comments Module</div></a>
                        <ul>
                          <li><a href="blog-single-left-sidebar.html#comments"><div>Facebook Comments</div></a></li>
                          <li><a href="blog-single-small.html#comments"><div>Disqus Comments</div></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><a href="shop.html"><div>Shop</div></a>
                  <ul>
                    <li><a href="shop.html"><div>4 Columns</div></a></li>
                    <li><a href="shop-3.html"><div>3 Columns</div></a>
                      <ul>
                        <li><a href="shop-3.html"><div>Full Width</div></a></li>
                        <li><a href="shop-3-right-sidebar.html"><div>Right Sidebar</div></a></li>
                        <li><a href="shop-3-left-sidebar.html"><div>Left Sidebar</div></a></li>
                      </ul>
                    </li>
                    <li><a href="shop-2.html"><div>2 Columns</div></a>
                      <ul>
                        <li><a href="shop-2-right-sidebar.html"><div>Right Sidebar</div></a></li>
                        <li><a href="shop-2-left-sidebar.html"><div>Left Sidebar</div></a></li>
                        <li><a href="shop-2-both-sidebar.html"><div>Both Sidebar</div></a></li>
                      </ul>
                    </li>
                    <li><a href="shop-1.html"><div>1 Columns</div></a>
                      <ul>
                        <li><a href="shop-1.html"><div>Full Width</div></a></li>
                        <li><a href="shop-1-right-sidebar.html"><div>Right Sidebar</div></a></li>
                        <li><a href="shop-1-left-sidebar.html"><div>Left Sidebar</div></a></li>
                        <li><a href="shop-1-both-sidebar.html"><div>Both Sidebar</div></a></li>
                      </ul>
                    </li>
                    <li><a href="shop-category-parallax.html"><div>Categories - Parallax</div></a></li>
                    <li><a href="shop-combination-filter.html"><div>Combination Filter</div></a></li>
                    <li><a href="shop-single.html"><div>Single Product</div></a>
                      <ul>
                        <li><a href="shop-single.html"><div>Full Width</div></a></li>
                        <li><a href="shop-single-right-sidebar.html"><div>Right Sidebar</div></a></li>
                        <li><a href="shop-single-left-sidebar.html"><div>Left Sidebar</div></a></li>
                        <li><a href="shop-single-both-sidebar.html"><div>Both Sidebar</div></a></li>
                      </ul>
                    </li>
                    <li><a href="cart.html"><div>Cart</div></a></li>
                    <li><a href="checkout.html"><div>Checkout</div></a></li>
                  </ul>
                </li>
                <li className="mega-menu"><a href="#"><div>Shortcodes</div></a>
                  <div className="mega-menu-content clearfix">
                    <ul className="mega-menu-column col-5">
                      <li><a href="animations.html"><div><i className="icon-magic" />Animations</div></a></li>
                      <li><a href="buttons.html"><div><i className="icon-link" />Buttons</div></a></li>
                      <li><a href="carousel.html"><div><i className="icon-heart3" />Carousel</div></a></li>
                      <li><a href="charts.html"><div><i className="icon-bar-chart" />Charts</div></a></li>
                      <li><a href="clients.html"><div><i className="icon-apple" />Clients</div></a></li>
                      <li><a href="columns-grids.html"><div><i className="icon-th-large" />Columns</div></a></li>
                      <li><a href="counters.html"><div><i className="icon-time" />Counters</div></a></li>
                      <li><a href="component-datatable.html"><div><i className="icon-table" />Data Tables</div></a></li>
                      <li><a href="component-datepicker.html"><div><i className="icon-calendar3" />Date &amp; Time Pickers</div></a></li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li><a href="dividers.html"><div><i className="icon-indent-right" />Dividers</div></a></li>
                      <li><a href="featured-boxes.html"><div><i className="icon-lightbulb" />Icon Boxes</div></a></li>
                      <li><a href="gallery.html"><div><i className="icon-picture" />Galleries</div></a></li>
                      <li><a href="headings-dropcaps.html"><div><i className="icon-pencil2" />Heading Styles</div></a></li>
                      <li><a href="icon-lists.html"><div><i className="icon-list-alt" />Icon Lists</div></a></li>
                      <li><a href="labels-badges.html"><div><i className="icon-plus-sign" />Labels</div></a></li>
                      <li><a href="lightbox.html"><div><i className="icon-resize-full" />Lightbox</div></a></li>
                      <li><a href="form-elements.html"><div><i className="icon-edit" />Form Elements</div></a></li>
                      <li><a href="component-uploads.html"><div><i className="icon-line-upload" />File Uploads</div></a></li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li><a href="lists-cards.html"><div><i className="icon-th-list" />Lists &amp; Cards</div></a></li>
                      <li><a href="maps.html"><div><i className="icon-map-marker2" />Maps</div></a></li>
                      <li><a href="media-embeds.html"><div><i className="icon-play" />Media Embeds</div></a></li>
                      <li><a href="modal-popovers.html"><div><i className="icon-move" />Modal Boxes</div></a></li>
                      <li><a href="navigation.html"><div><i className="icon-align-justify2" />Navigations</div></a></li>
                      <li><a href="pagination-progress.html"><div><i className="icon-cogs" />Pagination</div></a></li>
                      <li><a href="pie-skills.html"><div><i className="icon-tasks" />Pies &amp; Skills</div></a></li>
                      <li><a href="component-range-slider.html"><div><i className="icon-line-move" />Range Slider</div></a></li>
                      <li><a href="component-ratings.html"><div><i className="icon-star3" />Star Ratings</div></a></li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li><a href="pricing.html"><div><i className="icon-dollar" />Pricing Boxes</div></a></li>
                      <li><a href="process-steps.html"><div><i className="icon-thumbs-up" />Process Steps</div></a></li>
                      <li><a href="promo-boxes.html"><div><i className="icon-rocket" />Promo Boxes</div></a></li>
                      <li><a href="quotes-blockquotes.html"><div><i className="icon-quote-left" />Blockquotes</div></a></li>
                      <li><a href="responsive.html"><div><i className="icon-laptop2" />Responsive</div></a></li>
                      <li><a href="sections.html"><div><i className="icon-folder-open" />Sections</div></a></li>
                      <li><a href="social-icons.html"><div><i className="icon-facebook2" />Social Icons</div></a></li>
                      <li><a href="component-select-picker.html"><div><i className="icon-select" />Select Picker</div></a></li>
                      <li><a href="component-select-box.html"><div><i className="icon-line-columns" />Select Boxes</div></a></li>
                    </ul>
                    <ul className="mega-menu-column col-5">
                      <li><a href="style-boxes.html"><div><i className="icon-exclamation-sign" />Alert Boxes</div></a></li>
                      <li><a href="styled-icons.html"><div><i className="icon-flag2" />Styled Icons</div></a></li>
                      <li><a href="tables.html"><div><i className="icon-table" />Tables</div></a></li>
                      <li><a href="tabs.html"><div><i className="icon-star3" />Tabs</div></a></li>
                      <li><a href="testimonials-twitter.html"><div><i className="icon-user4" />Testimonials</div></a></li>
                      <li><a href="thumbnails-slider.html"><div><i className="icon-camera3" />Thumbnails</div></a></li>
                      <li><a href="toggles-accordions.html"><div><i className="icon-ok-circle" />Toggles</div></a></li>
                      <li><a href="component-radios-switches.html"><div><i className="icon-line-square-check" />Radios &amp; Switches</div></a></li>
                      <li><a href="flip-cards.html"><div><i className="icon-refresh" />Flip Cards</div></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* Top Cart
						============================================= */}
              <div id="top-cart">
                <a href="#" id="top-cart-trigger"><i className="icon-shopping-cart" /><span>5</span></a>
                <div className="top-cart-content">
                  <div className="top-cart-title">
                    <h4>Shopping Cart</h4>
                  </div>
                  <div className="top-cart-items">
                    <div className="top-cart-item clearfix">
                      <div className="top-cart-item-image">
                        <a href="#"><img src="images/shop/small/1.jpg" alt="Blue Round-Neck Tshirt" /></a>
                      </div>
                      <div className="top-cart-item-desc">
                        <a href="#">Blue Round-Neck Tshirt</a>
                        <span className="top-cart-item-price">$19.99</span>
                        <span className="top-cart-item-quantity">x 2</span>
                      </div>
                    </div>
                    <div className="top-cart-item clearfix">
                      <div className="top-cart-item-image">
                        <a href="#"><img src="images/shop/small/6.jpg" alt="Light Blue Denim Dress" /></a>
                      </div>
                      <div className="top-cart-item-desc">
                        <a href="#">Light Blue Denim Dress</a>
                        <span className="top-cart-item-price">$24.99</span>
                        <span className="top-cart-item-quantity">x 3</span>
                      </div>
                    </div>
                  </div>
                  <div className="top-cart-action clearfix">
                    <span className="fleft top-checkout-price">$114.95</span>
                    <button className="button button-3d button-small nomargin fright">View Cart</button>
                  </div>
                </div>
              </div>{/* #top-cart end */}
              {/* Top Search
						============================================= */}
              <div id="top-search">
                <a href="#" id="top-search-trigger"><i className="icon-search3" /><i className="icon-line-cross" /></a>
                <form action="search.html" method="get">
                  <input type="text" name="q" className="form-control" defaultValue placeholder="Type & Hit Enter.." />
                </form>
              </div>{/* #top-search end */}
            </nav>{/* #primary-menu end */}
          </div>
        </div>
      </header>
);

export default Header;
