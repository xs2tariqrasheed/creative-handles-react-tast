import React from 'react';

const Footer = () => (
  <footer id="footer" className="dark">
    <div className="container">
      <div className="footer-widgets-wrap clearfix">
        <div className="col_two_third">
          <div className="col_one_third">
            <div className="widget clearfix">
              <img
                src="images/footer-widget-logo.png"
                alt=""
                className="footer-logo"
              />

              <p>
                We believe in <strong>Simple</strong>, <strong>Creative</strong>{' '}
                &amp;
                <strong>Flexible</strong> Design Standards.
              </p>

              <div
                style={{
                  background: `url('images/world-map.png') no-repeat center center`,
                  backgroundSize: '100%',
                }}
              >
                <address>
                  <strong>Headquarters:</strong>
                  <br />
                  795 Folsom Ave, Suite 600<br />
                  San Francisco, CA 94107<br />
                </address>
                <abbr title="Phone Number">
                  <strong>Phone:</strong>
                </abbr>{' '}
                (91) 8547 632521<br />
                <abbr title="Fax">
                  <strong>Fax:</strong>
                </abbr>{' '}
                (91) 11 4752 1433<br />
                <abbr title="Email Address">
                  <strong>Email:</strong>
                </abbr>{' '}
                info@canvas.com
              </div>
            </div>
          </div>

          <div className="col_one_third">
            <div className="widget widget_links clearfix">
              <h4>Blogroll</h4>

              <ul>
                <li>
                  <a href="https://codex.wordpress.org/">Documentation</a>
                </li>
                <li>
                  <a href="https://wordpress.org/support/forum/requests-and-feedback">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="https://wordpress.org/extend/plugins/">Plugins</a>
                </li>
                <li>
                  <a href="https://wordpress.org/support/">Support Forums</a>
                </li>
                <li>
                  <a href="https://wordpress.org/extend/themes/">Themes</a>
                </li>
                <li>
                  <a href="https://wordpress.org/news/">WordPress Blog</a>
                </li>
                <li>
                  <a href="https://planet.wordpress.org/">WordPress Planet</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col_one_third col_last">
            <div className="widget clearfix">
              <h4>Recent Posts</h4>

              <div id="post-list-footer">
                <div className="spost clearfix">
                  <div className="entry-c">
                    <div className="entry-title">
                      <h4>
                        <a href="#">Lorem ipsum dolor sit amet, consectetur</a>
                      </h4>
                    </div>
                    <ul className="entry-meta">
                      <li>10th July 2014</li>
                    </ul>
                  </div>
                </div>

                <div className="spost clearfix">
                  <div className="entry-c">
                    <div className="entry-title">
                      <h4>
                        <a href="#">Elit Assumenda vel amet dolorum quasi</a>
                      </h4>
                    </div>
                    <ul className="entry-meta">
                      <li>10th July 2014</li>
                    </ul>
                  </div>
                </div>

                <div className="spost clearfix">
                  <div className="entry-c">
                    <div className="entry-title">
                      <h4>
                        <a href="#">Debitis nihil placeat, illum est nisi</a>
                      </h4>
                    </div>
                    <ul className="entry-meta">
                      <li>10th July 2014</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col_one_third col_last">
          <div
            className="widget clearfix"
            style={{
              marginBottom: -20,
            }}
          >
            <div className="row">
              <div className="col-lg-6 bottommargin-sm">
                <div className="counter counter-small">
                  <span
                    data-from="50"
                    data-to="15065421"
                    data-refresh-interval="80"
                    data-speed="3000"
                    data-comma="true"
                  />
                </div>
                <h5 className="nobottommargin">Total Downloads</h5>
              </div>

              <div className="col-lg-6 bottommargin-sm">
                <div className="counter counter-small">
                  <span
                    data-from="100"
                    data-to="18465"
                    data-refresh-interval="50"
                    data-speed="2000"
                    data-comma="true"
                  />
                </div>
                <h5 className="nobottommargin">Clients</h5>
              </div>
            </div>
          </div>

          <div className="widget subscribe-widget clearfix">
            <h5>
              <strong>Subscribe</strong> to Our Newsletter to get Important
              News, Amazing Offers &amp; Inside Scoops:
            </h5>
            <div className="widget-subscribe-form-result" />
            <form
              id="widget-subscribe-form"
              action="include/subscribe.php"
              method="post"
              className="nobottommargin"
            >
              <div className="input-group divcenter">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="icon-email2" />
                  </div>
                </div>
                <input
                  type="email"
                  id="widget-subscribe-form-email"
                  name="widget-subscribe-form-email"
                  className="form-control required email"
                  placeholder="Enter your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-success" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div
            className="widget clearfix"
            style={{
              marginBottom: -20,
            }}
          >
            <div className="row">
              <div className="col-lg-6 clearfix bottommargin-sm">
                <a
                  href="#"
                  className="social-icon si-dark si-colored si-facebook nobottommargin"
                  style={{
                    marginRight: 10,
                  }}
                >
                  <i className="icon-facebook" />
                  <i className="icon-facebook" />
                </a>
                <a href="#">
                  <small
                    style={{
                      display: 'block',
                      marginTop: 3,
                    }}
                  >
                    <strong>Like us</strong>
                    <br />on Facebook
                  </small>
                </a>
              </div>
              <div className="col-lg-6 clearfix">
                <a
                  href="#"
                  className="social-icon si-dark si-colored si-rss nobottommargin"
                  style={{
                    marginRight: 10,
                  }}
                >
                  <i className="icon-rss" />
                  <i className="icon-rss" />
                </a>
                <a href="#">
                  <small
                    style={{
                      display: 'block',
                      marginTop: 3,
                    }}
                  >
                    <strong>Subscribe</strong>
                    <br />to RSS Feeds
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="copyrights">
      <div className="container clearfix">
        <div className="col_half">
          Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.<br />
          <div className="copyright-links">
            <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="col_half col_last tright">
          <div className="fright clearfix">
            <a
              href="#"
              className="social-icon si-small si-borderless si-facebook"
            >
              <i className="icon-facebook" />
              <i className="icon-facebook" />
            </a>

            <a
              href="#"
              className="social-icon si-small si-borderless si-twitter"
            >
              <i className="icon-twitter" />
              <i className="icon-twitter" />
            </a>

            <a href="#" className="social-icon si-small si-borderless si-gplus">
              <i className="icon-gplus" />
              <i className="icon-gplus" />
            </a>

            <a
              href="#"
              className="social-icon si-small si-borderless si-pinterest"
            >
              <i className="icon-pinterest" />
              <i className="icon-pinterest" />
            </a>

            <a href="#" className="social-icon si-small si-borderless si-vimeo">
              <i className="icon-vimeo" />
              <i className="icon-vimeo" />
            </a>

            <a
              href="#"
              className="social-icon si-small si-borderless si-github"
            >
              <i className="icon-github" />
              <i className="icon-github" />
            </a>

            <a href="#" className="social-icon si-small si-borderless si-yahoo">
              <i className="icon-yahoo" />
              <i className="icon-yahoo" />
            </a>

            <a
              href="#"
              className="social-icon si-small si-borderless si-linkedin"
            >
              <i className="icon-linkedin" />
              <i className="icon-linkedin" />
            </a>
          </div>
          <div className="clear" />
          <i className="icon-envelope2" /> info@canvas.com{' '}
          <span className="middot">&middot;</span>
          <i className="icon-headphones" /> +91-11-6541-6369{' '}
          <span className="middot">&middot;</span>
          <i className="icon-skype2" /> CanvasOnSkype
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

