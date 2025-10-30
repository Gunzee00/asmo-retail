import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// jQuery, Select2, and Slick Carousel are loaded via CDN in index.html

// Import plugin CSS here to avoid @charset conflicts and deprecation warnings
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "select2/dist/css/select2.css";
import "react-modal-video/css/modal-video.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import custom CSS files
import "./assets/css/bootstrap.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/plyr.css";
import "./assets/css/animate.css";
import "./assets/css/slick.css";

import "./font.css";
import "./globals.scss";
import RouteApp from './RouteApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteApp />
  </StrictMode>
)
