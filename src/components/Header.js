import "./Header.css";

export const Header = () => {

  


  return (
  

   

    <div className="header-container">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="header-background"
        alt=""
      />
      <div className="header-overlay">
        <div className="header-content">
          <div className="header-text-section">
            <h2 className="header-title">
              The quick, brown fox <br className="hidden md:block" />
              jumps over a{' '}
              <span className="header-highlight">lazy dog</span>
            </h2>
            <p className="header-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <a
              href="/"
              aria-label=""
              className="header-link"
            >
              Learn more
              <svg
                className="header-link-icon"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
