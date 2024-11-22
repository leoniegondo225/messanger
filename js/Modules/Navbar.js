export const Navbar = () => {
    const nav = document.getElementById("navbar")
    nav.innerHTML = `
                <div class="logo">
                   <a href="/accueil.html" class="text-decoration-none">
                       <div class="d-flex align-items-center">
                        <img src="./images/logo.png" class="img-fluid" alt="">
                        <span class="fw-bold d-lg-none mx-2">Messenger</span>
                    </div>
                   </a>
                    <button class="border-0 bg-transparent d-lg-none"><i class="fa fa-search"></i></button>
                </div>
                
                <ul class="list-unstyled flex-style">
                    <li class="item">
                      <a href="/amis.html"><i class="fa fa-users text-color"></i></a>
                    </li>
                    <li class="item">
                      <a href="/group.html"><i class="fa fa-pencil text-color"></i></a>
                    </li>
                    <li class="item item-active">
                      <a href="/accueil.html"><i class="fa fa-commenting text-color"></i></a>
                    </li>
                    <li class="item">
                      <a href="/notif.html"><i class="fas fa-bell text-color"></i></a>
                    </li>
                    <li class="item">
                      <a href="#"><i class="fa fa-sun text-color"></i></a>
                    </li>
                    <li class="item">
                      <a href="#a"><i class="fa fa-cog text-color"></i></a>
                    </li>
                    <li class="item d-none d-lg-block">
                        <a href="/profil.html">
                            <img src="./images/avatar-6.jpg" class="rounded-circle w-50" alt="">
                        </a>
                      </li>
                  </ul>
    `
}