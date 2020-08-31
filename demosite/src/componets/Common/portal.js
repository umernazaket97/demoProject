import React, { Component } from "react";
import { Link } from "react-router-dom";


const SubStyle = {
  color: "#fec503",
};

class portal extends Component {
  render() {
    return (
      <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand" href="./adminportal">
            {this.props.PortalName}
          </a>
          <button
            class="btn btn-link btn-sm order-1 order-lg-0"
            id="sidebarToggle"
            href="#"
          >
            <i class="fas fa-bars"></i>
          </button>

          <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div class="input-group">
              <input
                class="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="userDropdown"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user fa-fw"></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a class="dropdown-item" href="#">
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/login">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              class="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div class="sb-sidenav-menu">
                <div class="nav">
                  {/* Heading 1 */}
                  <div class="sb-sidenav-menu-heading">
                    {this.props.mainoption1}
                  </div>
                  <a class="nav-link" href="#">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-tachometer-alt"></i>
                    </div>
                    {/* Small Heading 01 of 1 */}
                    {this.props.smalloption1}
                  </a>

                  {this.props.showOption2 && (
                    <a class="nav-link" href="#">
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-columns"></i>
                      </div>
                      {/* Small Heading 02 of 1 */}
                      {this.props.smalloption2}
                    </a>
                  )}

                  {this.props.showOption3 && (
                    <a class="nav-link" href={this.props.src}>
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-tachometer-alt"></i>
                      </div>
                      {/* Small Heading 03 of 1 */}
                      {this.props.smalloption3}
                    </a>
                  )}

                  {/* Heading 02 */}
                  <div class="sb-sidenav-menu-heading">
                    {this.props.mainoption2}
                  </div>
                  {/* Small Heading 1 on 2 */}
                  {this.props.showOption4 && (
                    <a class="nav-link collapsed" href="#">
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-columns"></i>
                      </div>
                      {this.props.smalloption4}
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                  )}

                  {/* Small Heading 2 on 2 */}
                  {this.props.showOption5 && (
                    <a
                      class="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapsePages"
                      aria-expanded="false"
                      aria-controls="collapsePages"
                    >
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-book-open"></i>
                      </div>
                      {this.props.smalloption5}
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                  )}

                  {/* Small Heading 3 on 2 */}
                  {this.props.showOption6 && (
                    <a
                      class="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapsePages"
                      aria-expanded="false"
                      aria-controls="collapsePages"
                    >
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-book-open"></i>
                      </div>
                      {this.props.smalloption6}
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                  )}

                  {/* Main Heading 3 */}
                  <div class="sb-sidenav-menu-heading">
                    {this.props.mainoption3}
                  </div>
                  {/* Small Heading 1 on 3 */}
                  {this.props.showOption7 && (
                    <a class="nav-link" href="#">
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-chart-area"></i>
                      </div>
                      {this.props.smalloption7}
                    </a>
                  )}
                  {/* Small Heading 2 on 3 */}
                  {this.props.showOption8 && (
                    <a class="nav-link" href="#">
                      <div class="sb-nav-link-icon">
                        <i class="fas fa-table"></i>
                      </div>
                      {this.props.smalloption8}
                    </a>
                  )}
                </div>
              </div>
              <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                {this.props.PersonName}
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <div class="container-fluid">
                <h1 class="mt-4">Dashboard</h1>
                <ol class="breadcrumb mb-4">
                  <li class="breadcrumb-item">
                    <a href="./adminportal">{this.props.PortalName}</a>
                  </li>
                  <li class="breadcrumb-item active">Dashboard</li>
                </ol>

                {/* There is body of the window portal */}

                {this.props.uploadImage && (
                  <div class="card mb-4 w-100">
                    <div class="card-body">
                      {/* <h1 className="tc mt6-ns f1 lh-title" style={SubStyle}>
                      BRAIN TUMOR
                    </h1> */}
                      <div className="tc dib col-xl-6 col-sm-8 mb-8">
                        <div className="tc bg-white rounded shadow-sm py-5 px-4 tc ma4-ns">
                          <h1 className="tc mb-0">
                            <input
                              type="file"
                              id="file"
                              onChange={this.fileChangedHandler}
                            />
                          </h1>
                        </div>

                        <h3 className="mb-0">
                          <Link to="/report">
                            <button
                              type="button"
                              className="ma4 pa3-ns btn btn-outline-warning tc"
                            >
                              Generate Report
                            </button>
                          </Link>
                        </h3>
                      </div>
                    </div>
                    {this.props.children}
                  </div>
                )}
                <div class="card mb-4 w-100">
                  <div class="card-header">
                    <i class="fas fa-table mr-1"></i>
                    There will be some information
                    
                  </div>
                  <div class="card-body">
                    hello there
                   
                  </div>
                </div>
              </div>
            </main>
          </div>          
        </div>
      </body>
      
    );
  }
}

export default portal;
