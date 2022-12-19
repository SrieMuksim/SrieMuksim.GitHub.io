                <div class="gallery-home sd">
                    <div class="gallery-shows sd">
                        <div class="gallery-date sd wow fadeInUp" data-wow-duration="1s"
                             data-wow-delay="0.2s"><%= form.date %>
                        </div>
                        <a class="gallery-page-title sd wow fadeInUp" data-wow-duration="1s"
                           data-wow-delay="0.2s"
                           id="title" href="https://www.lebel.co.jp/products/mens/theo/theoperm/"><%= form.name %>
                            <br/> <small style="font-size: 12px">By <%= form.author %>. </small> </a>
                        <div class="gallery-page-description sd wow fadeInUp" data-wow-duration="1s"
                             data-wow-delay="0.5s" id="description" style="width: 30%">
                            <p class="gallery-page-des"><%= form.description %></p>
                        </div>
                        <div class="gallery-view-limit sd wow fadeInUp" data-wow-duration="1s"
                             data-wow-delay="0.5s">
                            <a href="" class="gallery-view sd">
                                <p class="community-view-more sd wow fadeInUp" data-wow-duration="1s"
                                   data-wow-delay="0.2s">0 Like</p>
                                <div class="gallery-view-string sd"></div>
                            </a>
                            <a href="" class="gallery-view sd">
                                <p class="community-view-more sd wow fadeInUp" data-wow-duration="1s"
                                   data-wow-delay="0.2s">0 Collect</p>
                                <div class="gallery-view-string sd"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="gallery-design sd">
                    <div class="gallery-title sd wow fadeInUp" data-wow-duration="1s"
                         data-wow-delay="0.8s">
                        <p class="gallery-gallery sd">[Video]</p>
                    </div>
                    <div class="gallery-web-show sd">
                        <div class="community-pic sd wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <video src="/static/media/video.mp4" class="community-img" controls>您的浏览器不支持 HTML5
                                video 标签。
                            </video>
                        </div>
                    </div>
                </div>
                <div class="gallery-design sd">
                    <div class="gallery-title sd wow fadeInUp" data-wow-duration="1s"
                         data-wow-delay="0.8s">
                        <p class="gallery-gallery sd">[Shoots]</p>
                    </div>
                    <div class="gallery-web-show sd">
                        <div class="community-pic sd wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <img src="/static/img/screen1.jpg" alt="" class="community-img">
                            <div class="community-pic-des sd">
                                <p class="gallery-name sd"><%= form.topic1 %></p>
                                <p class="gallery-name-des sd"><%= form.content1 %></p>
                            </div>
                        </div>
                        <div class="community-pic sd wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <img src="/static/img/screen2.jpg" alt="" class="community-img">
                            <div class="community-pic-des sd">
                                <p class="gallery-name sd"><%= form.topic2 %>
                                </p>
                                <p class="gallery-name-des sd"><%= form.content2 %></p>
                            </div>
                        </div>
                        <div class="gallery-view-limit sd">
                            <button class="gallery-view sd" onclick="editItem()" style="background-color: transparent;">
                                <p class="gallery-view-more sd wow fadeInUp" data-wow-duration="1s"
                                   data-wow-delay="0.8s">Edit</p>
                                <div class="gallery-view-string sd"></div>
                            </button>
                            <button class="gallery-view sd" onclick="deleteItem()" style="background-color: transparent;">
                                <p class="gallery-view-more sd wow fadeInUp" data-wow-duration="1s"
                                   data-wow-delay="0.8s">Delete</p>
                                <div class="gallery-view-string sd"></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="gallery-comments sd">
                    <div class="gallery-title sd wow fadeInUp" data-wow-duration="1s"
                         data-wow-delay="0.8s">
                        <p class="gallery-gallery sd">[Comments]</p>
                    </div>
                    <div class="gallery-web-show sd">
                        <div class="community-pic sd wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <div class="community-line sd"></div>
                            <div class="community-comments-des sd">
                                <p class="gallery-name sd">SrieMuksim:</p>
                                <p class="gallery-name-des sd">
                                    朋友，你是否还依稀记得小时候点煤油灯的时代，朋友你是否早已习惯了随手打开电灯，电视，空调的生活；朋友，当你在享用充足电力的惬意中，在几乎感觉不到电力存在的意识里，谁能想到，建国六十年来，祖国电力工业正发生了翻天覆地的变化。</p>
                            </div>
                            <div class="gallery-view-limit sd wow fadeInUp" data-wow-duration="1s"
                                 data-wow-delay="0.5s">
                                <a href="" class="gallery-view sd">
                                    <p class="community-view-more sd wow fadeInUp" data-wow-duration="1s"
                                       data-wow-delay="0.2s">0 Like</p>
                                    <div class="gallery-view-string sd"></div>
                                </a>
                                <a href="" class="gallery-view sd">
                                    <p class="community-view-more sd wow fadeInUp" data-wow-duration="1s"
                                       data-wow-delay="0.2s">Comment</p>
                                    <div class="gallery-view-string sd"></div>
                                </a>
                            </div>
                            <div class="community-line sd"></div>
                            <div class="community-comments-des sd">
                                <p class="gallery-name sd">someone :</p>
                                <p class="gallery-name-des sd">Promice Yourself To be so strong that nothing can
                                    disturb your peace of mind.</p>
                            </div>
                            <div class="gallery-view-limit sd wow fadeInUp" data-wow-duration="1s"
                                 data-wow-delay="0.5s">
                                <a href="" class="gallery-view sd">
                                    <p class="community-view-more sd wow fadeInUp" data-wow-duration="1s"
                                       data-wow-delay="0.2s">0 Like</p>
                                    <div class="gallery-view-string sd"></div>
                                </a>
                                <a href="" class="gallery-view sd">
                                    <p class="community-view-more sd wow fadeInUp" data-wow-duration="1s"
                                       data-wow-delay="0.2s">Comment</p>
                                    <div class="gallery-view-string sd"></div>
                                </a>
                            </div>
                            <div class="community-line2 sd"></div>
                        </div>
                        <div class="gallery-view-limit sd">
                            <a href=""
                               class="gallery-view sd">
                                <p class="gallery-view-more sd wow fadeInUp" data-wow-duration="1s"
                                   data-wow-delay="0.8s">Comment</p>
                                <div class="gallery-view-string sd"></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="login login-animation" id="login">
                    <div class="login-content sd">
                        <div class="login-title sd">
                            <p class="login-login sd">Log in</p>
                        </div>
                        <div class="login-email sd">
                            <p class="login-email-email sd">Email</p>
                            <input type="text" class="login-email-input sd" id="email" value="aaa@qq.com"
                                   placeholder="Please enter your Email"
                            >
                        </div>
                        <div class="login-email sd">
                            <p class="login-email-email sd">Password</p>
                            <input type="text" class="login-email-input sd" id="password" value="123"
                                   placeholder="Please enter your Password"
                            >
                        </div>
                        <div class="login-button sd">
                            <div class="login-signup sd">
                                <div class="login-log sd">
                                    <button class="login-button-text sd" onclick="loginSuccess()">Log in
                                    </button>
                                </div>
                                <div class="login-log sd">
                                    <button class="signup-button-text sd" onclick="doSignup()">Sign up</button>
                                </div>
                            </div>
                            <div class="login-log sd">
                                <button class="login-button-back sd" onclick="doLogin()">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="login login-animation" id="signup">
                    <div class="login-content sd">
                        <div class="login-title sd">
                            <p class="login-login sd">Sign up</p>
                        </div>
                        <div class="login-email sd">
                            <p class="login-email-email sd">Username</p>
                            <input type="text" class="login-email-input sd"
                                   placeholder="Please enter your Username"
                            >
                        </div>
                        <div class="login-email sd">
                            <p class="login-email-email sd">Email</p>
                            <input type="text" class="login-email-input sd" id="remail"
                                   placeholder="Please enter your Email"
                            >
                        </div>
                        <div class="login-email sd">
                            <p class="login-email-email sd">Password</p>
                            <input type="text" class="login-email-input sd" id="rpassword"
                                   placeholder="Please enter your Password"
                            >
                        </div>
                        <div class="login-email sd">
                            <p class="login-email-email sd">Re-enter your Password</p>
                            <input type="text" class="login-email-input sd"
                                   placeholder="Please enter your Password"
                            >
                        </div>
                        <div class="login-button sd">
                            <div class="login-signup sd">
                                <div class="login-log sd">
                                    <button class="login-button-text sd" onclick="register()">Sign up</button>
                                </div>
                                <div class="login-log sd">
                                    <button class="login-button-text sd" onclick="doLogin()">Log in</button>
                                </div>
                            </div>
                            <div class="login-log sd">
                                <button class="login-button-back sd" onclick="doSignup()">Back</button>
                            </div>
                        </div>
                    </div>
                </div>