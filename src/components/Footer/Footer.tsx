import React from 'react';
import '../../styles/component/footer.scss';

export interface FooterProps {
  isMenuCollapsed: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer>
      <div>
        <hr />
        {props.isMenuCollapsed && (
          <>
            <p className="text-center footer-copyright">© ADS</p>
            <p className="text-center footer-copyright">2022</p>
          </>
        )}
        {!props.isMenuCollapsed && (
          <>
            <p className="text-center footer-copyright">© Automotive Data Solutions.</p>
            <p className="text-center footer-copyright">All Rights Reserved. 2022</p>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
