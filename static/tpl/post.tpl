<!-- tpl/post.tpl -->


                                <% form.forEach(function(link){ %>
                                <a class="gallery-pic sd wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s"
                                   href="/webDisplay.html?id=<%= link.id %>" >
                                    <img src="/static/img/screen1.jpg" alt="" class="gallery-img">
                                    <div class="gallery-pic-des sd">
                                        <p class="gallery-name sd"><%= link.date %> <br/> <%= link.name %></p>
                                        <p class="gallery-name-des sd"><%= link.description %></p>
                                        <p class="gallery-name sd">By <%= link.author %>.</p>
                                    </div>
                                </a>
                               <% }) %>
                                <div class="gallery-view-limit sd ">
                                    <a href="" class="gallery-view sd">
                                        <p class="gallery-view-more sd wow fadeInUp" data-wow-duration="1s"
                                           data-wow-delay="0.2s">Previous</p>
                                        <div class="gallery-view-string sd"></div>
                                    </a>
                                    <a href="" class="gallery-view sd">
                                        <p class="gallery-view-more sd wow fadeInUp" data-wow-duration="1s"
                                           data-wow-delay="0.2s">Next</p>
                                        <div class="gallery-view-string sd"></div>
                                    </a>
                                </div>