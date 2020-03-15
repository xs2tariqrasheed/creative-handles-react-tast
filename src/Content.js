import React from 'react';

const Content = () => (
  <section id="content">
    <div className="content-wrap">
      <div className="container clearfix">
        <div className="col_one_third nobottommargin center">
          <a href="#">
            <img
              src="images/appshowcase/s1.png"
              alt="Image"
              className="bottommargin-sm"
            />
          </a>
          <h4>Responsive Layout</h4>
          <p>
            Powerful Layout with Responsive functionality that can be adapted to
            any screen size. Resize browser to view.
          </p>
        </div>
        <div className="col_one_third nobottommargin center">
          <a href="#">
            <img
              src="images/appshowcase/s4.png"
              alt="Image"
              className="bottommargin-sm"
            />
          </a>
          <h4>Retina Ready Graphics</h4>
          <p>
            Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Retina
            Icons, Fonts &amp; all others graphics are optimized.
          </p>
        </div>
        <div className="col_one_third nobottommargin center col_last">
          <a href="#">
            <img
              src="images/appshowcase/s5.png"
              alt="Image"
              className="bottommargin-sm"
            />
          </a>
          <h4>Powerful Performance</h4>
          <p>
            Canvas includes tons of optimized code that are completely
            customizable and deliver unmatched fast performance.
          </p>
        </div>
      </div>
      <div
        className="section nobottommargin"
        style={{ paddingBottom: '150px' }}
      >
        <div
          className="d-none d-lg-block"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'transparent url("images/appshowcase/ipad-section.png") bottom right no-repeat',
          }}
        />
        <div className="container clearfix" style={{ zIndex: 1 }}>
          <div className="col_half nobottommargin">
            <div className="heading-block topmargin-sm">
              <h2>Awesome Scalable Apps</h2>
              <span>Our Template acts &amp; behaves truly as a Canvas.</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              maiores pariatur voluptatem placeat laborum iste accusamus nam
              unde, iure id.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              cumque, perferendis accusamus porro illo exercitationem molestias,
              inventore obcaecati ut omnis voluptatibus ratione odio amet magnam
              quidem tempore necessitatibus quaerat, voluptates excepturi
              voluptatem, veritatis qui temporibus.
            </p>
            <a
              href="#"
              className="button button-border button-rounded button-large button-dark noleftmargin"
            >
              Start Trial
            </a>
          </div>
        </div>
      </div>
      <div className="section notopmargin nobottommargin">
        <div className="container clearfix">
          <div className="col_half nobottommargin topmargin-lg">
            <img
              src="images/appshowcase/iphone-solid.png"
              alt="Image"
              className="center-block"
            />
          </div>
          <div className="col_half nobottommargin topmargin-lg col_last">
            <div className="heading-block topmargin-lg">
              <h2>Typically Responsive</h2>
              <span>Our App scales beautifully to different Devices.</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              cumque, perferendis accusamus porro illo exercitationem molestias,
              inventore obcaecati ut omnis voluptatibus ratione odio amet magnam
              quidem tempore necessitatibus quaerat, voluptates excepturi
              voluptatem, veritatis qui temporibus.
            </p>
            <a
              href="#"
              className="button button-border button-rounded button-large button-dark noleftmargin"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
      <div className="section dark notopmargin" style={{ paddingTop: '60px' }}>
        <div className="container clearfix">
          <div className="col_one_third">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="#">
                  <i className="icon-screen" />
                </a>
              </div>
              <h3>Responsive Layout</h3>
              <p>
                Powerful Layout with Responsive functionality that can be
                adapted to any screen size. Resize browser to view.
              </p>
            </div>
          </div>
          <div className="col_one_third">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="#">
                  <i className="icon-eye" />
                </a>
              </div>
              <h3>Retina Ready Graphics</h3>
              <p>
                Looks beautiful &amp; ultra-sharp on Retina Screen Displays.
                Retina Icons, Fonts &amp; all others graphics are optimized.
              </p>
            </div>
          </div>
          <div className="col_one_third col_last">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="#">
                  <i className="icon-beaker" />
                </a>
              </div>
              <h3>Powerful Performance</h3>
              <p>
                Canvas includes tons of optimized code that are completely
                customizable and deliver unmatched fast performance.
              </p>
            </div>
          </div>
          <div className="clear" />
          <div className="col_one_third nobottommargin">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="#">
                  <i className="icon-ok" />
                </a>
              </div>
              <h3>12+ Header Designs</h3>
              <p>
                We have included 12+ Header + Menu Designs for your convenience
                so that you can match your style.
              </p>
            </div>
          </div>
          <div className="col_one_third nobottommargin">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="#">
                  <i className="icon-thumbs-up" />
                </a>
              </div>
              <h3>Awesome Mega menu</h3>
              <p>
                Completely Customizable 2 Columns, 3 Columns, 4 Columns &amp; 5
                Columns Mega Menus are available with Canvas.
              </p>
            </div>
          </div>
          <div className="col_one_third nobottommargin col_last">
            <div className="feature-box fbox-plain">
              <div className="fbox-icon">
                <a href="#">
                  <i className="icon-magnet" />
                </a>
              </div>
              <h3>Attractive Sticky Menu</h3>
              <p>
                Smooth &amp; Stylish Sticky Menu is what will make your Website
                differentiate with others.
              </p>
            </div>
          </div>
          <div className="clear" />
          <div className="line" />
          <div className="heading-block center">
            <h2>Looks beautiful on all displays.</h2>
          </div>
          <div
            style={{ position: 'relative', marginBottom: '-60px' }}
            data-height-xl={415}
            data-height-lg={342}
            data-height-md={262}
            data-height-sm={160}
            data-height-xs={102}
          >
            <img
              src="images/services/chrome.png"
              style={{ position: 'absolute', top: 0, left: 0 }}
              data-animate="fadeInUp"
              alt="Chrome"
            />
            <img
              src="images/services/ipad3.png"
              style={{ position: 'absolute', top: 0, left: 0 }}
              data-animate="fadeInUp"
              data-delay={300}
              alt="iPad"
            />
          </div>
        </div>
      </div>
      <div className="container clearfix">
        <div className="heading-block center">
          <h3>Available on all Major Platforms.</h3>
          <span>We have made our App available on all Major Platforms</span>
        </div>
        <p className="divcenter center" style={{ maxWidth: '800px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo animi
          ab dolorem deleniti, incidunt, recusandae tenetur eius aut similique
          delectus nisi labore odit temporibus reprehenderit eum iure natus
          voluptatem commodi? Quam ea, placeat quia et dignissimos laboriosam
          unde earum repudiandae?
        </p>
        <div className="col_full center topmargin nobottommargin">
          <a
            href="#"
            className="social-icon si-appstore si-large si-rounded si-colored inline-block"
            title="iOS App Store"
          >
            <i className="icon-appstore" />
            <i className="icon-appstore" />
          </a>
          <a
            href="#"
            className="social-icon si-android si-large si-rounded si-colored inline-block"
            title="Android Store"
          >
            <i className="icon-android" />
            <i className="icon-android" />
          </a>
          <a
            href="#"
            className="social-icon si-gplus si-large si-rounded si-colored inline-block"
            title="Windows Store"
          >
            <i className="icon-windows3" />
            <i className="icon-windows3" />
          </a>
        </div>
        <div className="clear" />
        <div className="divider divider-short divider-vshort divider-line divider-center">
          &nbsp;
        </div>
        <div className="heading-block center">
          <h3>
            Subscribe for more <span>Updates</span>.
          </h3>
        </div>
        <div className="subscribe-widget">
          <div className="widget-subscribe-form-result" />
          <form
            id="widget-subscribe-form2"
            action="include/subscribe.php"
            method="post"
            className="nobottommargin"
          >
            <div
              className="input-group input-group-lg divcenter"
              style={{ maxWidth: '600px' }}
            >
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="icon-email2" />
                </div>
              </div>
              <input
                type="email"
                name="widget-subscribe-form-email"
                className="form-control required email"
                placeholder="Enter your Email"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">
                  Subscribe Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Content;
