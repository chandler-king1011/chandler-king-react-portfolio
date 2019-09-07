import React from 'react';

export default function(props) {
    const portfolioList = props.portItems.map(portItem => {
        return (
            <div key={portItem.id} className="portmanager-sidebar">
              <div className="port-thumb-img">
                  <img src={portItem.thumb_image_url} />
              </div>
              <div className="sidebar-title-wrapper">
                <h1>{portItem.name}</h1>
                <h2>{portItem.id}</h2>
                <a onClick={() => props.handleDeleteClick(portItem)}>Delete</a>
              </div>
            </div>
             )
        });

    return (
        <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
    )
    }
