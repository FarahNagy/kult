import "./home.css";
import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
function CardRow() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="cardRow">
      <img src="Group 73.png" alt="kult-logo" className="cardItem" />

      <div className="image-overlay">
        <div class="card-1">
          <p className="card-par-1a">
            <span className="card-1a">
              CREATIVE
              <br />
              ENTERTAINMENT
              <br />
              PLATFORMS.
            </span>
          </p>
          <p className="card-par-1b">
            <span span className="card-1b">
              This is what started it all. At Kult,
              <br />
              we believe that no idea is too big
              <br />
              or too bizarre, no matter how
              <br />
              outrageous it might sound.
            </span>
          </p>
        </div>
      </div>

      <img src="Group 73.png" alt="kult-logo" className="cardItem" />
      <div className="image-overlay2">
        <div class="card-2">
          <p className="card-par-2a">
            <span className="card-2a">
              ON GROUND
              <br />
              ACTIVATIONS.
            </span>
          </p>
          <p className="card-par-2b">
            <span span className="card-2b">
              On-Ground Activations are one of
              <br />
              the main keys to delivering your
              <br />
              message to the masses and to make
              <br />
              your campaign a dynamic platform
              <br />
              that directly reaches your clientele.
              <br />
            </span>
          </p>
        </div>
      </div>
      <img src="Group 73.png" alt="kult-logo" className="cardItem" />
      <div className="image-overlay3">
        <div class="card-3">
          <p className="card-par-3a">
            <span className="card-3a">
              PRODUCT &
              <br />
              BTL MARKETING.
            </span>
          </p>
          <p className="card-par-3b">
            <span span className="card-3b">
              To guarantee the best results in all
              <br />
              services offered, Kult alsoproves the
              <br />
              production of anything you desire.
              <br />
              From ushering services, recruitment, production or selling units.
              <br />
            </span>
          </p>
        </div>
      </div>
      
      {/* <div>
      <button className="view-more"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        }) }
      >
        {isExpanded ? 'Collapse' : 'View More'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div> */}
    
    </div>
  );
}

export default CardRow;
