export const MessageRecu = () => {
    let messageR = document.getElementById("message-reçu")
    messageR.innerHTML = `
        <h2 class="fw-bold h5 pt-3">Messages reçus</h2>

                <!--recherche-->
                <div class="form d-none d-lg-block">
                      <div class="input-group mb-3">
                        <input type="email" class="form-control border-end-0" id="floatingInput" placeholder="Rechercher les messages...">
                        <span class="input-group-text bg-white border-start-0" id="basic-addon1"><i class="fa-search fa"></i></span>
                    </div>
                </div>
                <!--message reçu-->
                <div class="amis">

                        <!--item-->
                        <a href="/conversation.html" class="text-decoration-none">
                            <div class="card rounded-3 mb-3 border-0 hover-effet" id="Idmessage">
                                <div class="card-body d-flex align-items-center">
                                    <div class="image position-relative">
                                        <img src="./images/im1.jpg" class="rounded-circle" width="50" alt="">
                                        <span class="position-absolute bottom-0 translate-middle p-2 bg-danger border border-light rounded-circle">
                                            <span class="visually-hidden">New alerts</span>
                                          </span>
                                    </div>
                                    <div class="mx-3 d-flex justify-content-between">
                                        <div class="text-simple">
                                            <p>
                                                <span class="h5 fw-bold block">Yvan Users</span>
                                                <br>
                                                Lorem ipsum, dolor sit amet
                                            </p>
                                        </div>
                                        <p class="text-muted small">12h10</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                </div>
    
    `
}