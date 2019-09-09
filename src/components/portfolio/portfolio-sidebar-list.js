import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function(props) {
    const portfolioList = props.portItems.map(portItem => {
        return (
            <div key={portItem.id} className="portmanager-sidebar">
              <div className="port-thumb-img">
                  <img src={portItem.thumb_image_url} />
              </div>
              <div className="sidebar-title-wrapper">
                <div className="title">{portItem.name}</div>

                <div className="actions">
                  <a className="action-icon" onClick={() => props.handleEditClick(portItem)}>
                    <FontAwesomeIcon icon="edit" />
                  </a>
                  <a className="action-icon" onClick={() => props.handleDeleteClick(portItem)}>
                    <FontAwesomeIcon icon="trash" />
                  </a>
                </div>
              </div>
            </div>
             )
        });

    return (
        <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
    )
    }
