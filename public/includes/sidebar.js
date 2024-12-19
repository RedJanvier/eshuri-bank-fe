function loadSidebar() {
    const sidebarHTML = `
      <div id="bdSidebar" class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white offcanvas-md offcanvas-start h-100">
                    <ul class="mynav nav nav-pills flex-column mb-auto">
                        <li class="nav-item mb-1">
                            <a href="#" class="nav-link link-light">
                                <i class="bi-house"></i> Home
                            </a>
                        </li>
                        <li class="nav-item mb-1">
                            <a href="#" class="nav-link link-light">
                                <i class="bi-currency-exchange"></i> Transfer
                            </a>
                        </li>
                        <li class="nav-item mb-1">
                            <a href="#" class="nav-link link-light">
                                <i class="bi-bank2"></i> Account
                            </a>
                        </li>
                        <li class="nav-item mb-1">
                            <a href="#" class="nav-link link-light active">
                                <i class="bi-credit-card-fill"></i> Cards
                            </a>
                        </li>
                        <li class="nav-item mb-1">
                            <a href="#" class="nav-link link-light">
                                <i class="bi-person-circle"></i> Profiles
                            </a>
                        </li>
                        <li class="nav-item mb-1">
                            <a href="#" class="nav-link link-light">
                                <i class="bi-credit-card"></i> Apply For Card
                            </a>
                        </li>
                        <li class="sidebar-item nav-item mb-1">
                            <a href="#" class="sidebar-link nav-link link-light collapsed" 
                               data-bs-toggle="collapse" data-bs-target="#settings" aria-expanded="false" aria-controls="settings">
                                <i class="fas fa-cog pe-2"></i> <span class="topic">Settings</span>
                            </a>
                            <ul id="settings" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link nav-link link-light">
                                        <i class="fas fa-sign-in-alt pe-2"></i> <span class="topic">Login</span>
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link nav-link link-light">
                                        <i class="fas fa-user-plus pe-2"></i> <span class="topic">Register</span>
                                    </a>
                                </li>
                                <li class="sidebar-item">
                                    <a href="#" class="sidebar-link nav-link link-light">
                                        <i class="fas fa-sign-out-alt pe-2"></i> <span class="topic">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr>
                </div>
    `;
  
    // Insert the sidebar HTML into the #sidebarContainer
    document.getElementById('sidebarContainer').innerHTML = sidebarHTML;
  }
  
   // Call the function to render the sidebar when the page loads
   loadSidebar();
  