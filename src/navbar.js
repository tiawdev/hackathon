import React, { useState } from 'react';

const Navbar = ({ onSubmit, searchTerm, setSearchTerm, sidebarClass }) => {
    return (
        <div>
            <nav id="sidebar" className={sidebarClass}>
                <img src="logotc.jpeg" alt="" />
                <div className="sidebar-header">
                    <a
                        className="button button--secondary button--subscribe"
                        rel=""
                        aria-label="Subscribe"
                        data-ga-event-category="global navigation"
                        data-ga-event-action="click"
                        data-ga-event-label="Join TechCrunch+"
                        data-datalayer="{&quot;event&quot;: &quot;navigation&quot;,&quot;clickText&quot;: &quot;Join TechCrunch+&quot;}"
                        href="/subscribe?tpcc=homepagetout"
                    >
                        Join TechCrunch<span className="logo--plus">+</span>
                    </a>
                </div>
                <ul className="list-unstyled components">
                    {/* ... (le reste de votre code pour la barre latérale) */}
                </ul>
            </nav>

            <div className="navbar fixed-top">
                <div className="container-fluid">
                    <a className="font-italic">....Welcome to Techcrunch</a>
                    <form className="d-flex" role="search" onSubmit={onSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-white border-white bg-white" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

