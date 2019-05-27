<template>
  <div>

    <v-container fluid grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap>
        <v-flex xs12 lg10 offset-lg1 d-flex>
          <div class="Border1"></div>
          <br>
        </v-flex>

        <v-flex xs12 sm6 md3 offset-lg1 d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color max-width="600">
              <v-img
                style="height:100%"
                src="https://scontent.fbll1-1.fna.fbcdn.net/v/t1.0-9/60069865_1688794517889668_6134994305661534208_n.jpg?_nc_cat=110&_nc_ht=scontent.fbll1-1.fna&oh=d669eb60bd8f44bb996cb566d004309d&oe=5D50D661"
                aspect-ratio
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                    
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 sm6 md4>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                src="http://computerfysik.dk/wp-content/uploads/2016/11/Counterstrike-Global-Offensive.jpg"
                aspect-ratio
                contain
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                   
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>

          <v-divider class="mx-1" inset vertical style="visibility: hidden;"></v-divider>

          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                aspect-ratio
                contain
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
               
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 sm6 md3 d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color max-width="600">
              <v-img
                style="background-color:#121723; height:100% "
                src="http://www.esport-esbjerg.dk/media/1051/logo2000x2000.png"
                aspect-ratio
                contain
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                    
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <p></p>
        <br>

        <v-flex xs12 lg10 offset-lg1 d-flex>
          <div class="Border1"></div>
          <br>
        </v-flex>

        <v-flex xs12 lg3 offset-lg1 d-flex>
           <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
              style="height:100%; position:relative;" 
                src="https://mlstaticquic-a.akamaihd.net/counter-strike-global-offensive-cs-go-original-steam-xgamesz-D_NQ_NP_784486-MLU26572713582_122017-F.jpg"
                aspect-ratio
                
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                   
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 lg4 auto d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
                src="https://icdn2.digitaltrends.com/image/ninja-skin-featured-image-fortnite-season-8-patch-8-0-7126.jpg"
                aspect-ratio
                contain
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                   
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 lg3 d-flex>
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              <v-img
              
              style="height:100%;"
                src="https://image.redbull.com/rbcom/010/2014-11-13/1331690088299_2/0100/0/1/overwatch.jpg"
                aspect-ratio
                
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                  
                    color:white; "
                  >Esbjerg Lan party</div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs10 md7 offset-lg1 d-flex>
          <div class="Border1"></div>
        </v-flex>
        <v-flex xs2 md3 offset-lg0 offset-lg>
          <div class="Border1"></div>
        </v-flex>

        <!--Instagram-->
        <v-flex xs12 lg7 offset-lg1 d-flex>
          <iframe
          loading="lazy"
            src="http://instaembedder.com/gallery-v2.php?width=140&cols=5&rows=3&margin=8&color=gray&likes=1&share_buttons=1&comments=1&link=1&frame=1&image_border=4&frame_color=transparent&cid=11584&"
            frameborder="0"
            width="100%"
            height="528"
          ></iframe>
        </v-flex>

        <!--FACEBOOK-->
        <v-flex xs12 lg2 offset-lg d-flex>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/eSportEsbjerg/"
            data-tabs="timeline"
            data-width="358 "
            data-height="500"
            data-small-header="false"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/facebook">Facebook</a>
            </blockquote>
          </div>
        </v-flex>

        <v-flex xs10 md3 offset-lg1 d-flex>
          <div class="Border1"></div>
        </v-flex>
        <v-flex xs2 md7 offset-lg0 offset-lg>
          <div class="Border1"></div>
        </v-flex>

<v-flex xs10 md3 offset-lg1 d-flex>
         DISCORD APP HER
        </v-flex>


         <v-flex xs2 md7 offset-lg0 offset-lg>
    <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto transparent" color>
              
              <v-img
              style="height:100%; "
                src="https://gamerpackaging.com/wp-content/uploads/2016/09/Why-us-Staircase-Group-Shot-Web.jpg"
                aspect-ratio
                
              >
              <h1 style="font-family: tenby-seven, sans-serif; font-weight: 700!important; font-size: 450%; color:white; opacity:1;" auto>Tilmeld dig idag!</h1>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-2"
                    style="height: 100%; 
                    
                    color:white; "
                  >
                    <div>
                      <p>kage</p>
                    </div>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>

          
        </v-flex>





      </v-layout>
    </v-container>
  </div>

  <!-- 
   <v-container grid-list-md text-xs-center style="max-width: 1500px;">
      <v-layout row wrap >
        <v-flex xs10>
       

     

         
            <div class="events">
              <v-hover value>
                <v-card hover slot-scope="{ hover }" contain color="grey lighten-5" max-width="600">
                  <v-img
                    :aspect-ratio="0"
                    src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/60069865_1688794517889668_6134994305661534208_n.jpg?_nc_cat=110&_nc_ht=scontent-ams4-1.xx&oh=0a9c83b723886512d3a028f7eecf21d3&oe=5D50D661"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;"
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
        </v-flex>

           
              <v-hover value>
                <v-card
                  hover
                  slot-scope="{ hover }"
                  color="grey lighten-5"
                  max-width="600"
                  height="100%"
                >
                  <v-img
                    height="100%"
                    :aspect-ratio="2"
                    src="http://computerfysik.dk/wp-content/uploads/2016/11/Counterstrike-Global-Offensive.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
     

            <div class="ft1">
              <v-hover value>
                <v-card
                  hover
                  slot-scope="{ hover }"
                  contain
                  color="grey lighten-5"
                  max-width="600"
                  height="100%"
                >
                  <v-img
                    :aspect-ratio="0"
                    height="100%"
                    src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div class="placeholder1">
              <v-hover value>
                <v-card hover slot-scope="{ hover }" contain color="grey lighten-5" max-width="600">
                  <v-img
                    :aspect-ratio="0.7"
                    src="http://www.esport-esbjerg.dk/media/1051/logo2000x2000.png"
                    style="background-color:#121723"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
          </div>
          <br>
          <div class="Border1"></div>
          <br>
        
            <div class="Game1">
              <v-hover value>
                <v-card
                  hover
                  slot-scope="{ hover }"
                  contain
                  color="grey lighten-5"
                  max-width="600"
                  height="100%"
                >
                  <v-img
                    :aspect-ratio="0"
                    height="100%"
                    src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div class="Game-2">
              <v-hover value>
                <v-card
                  hover
                  slot-scope="{ hover }"
                  contain
                  color="grey lighten-5"
                  max-width="600"
                  height="100%"
                >
                  <v-img
                    :aspect-ratio="0"
                    height="100%"
                    src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div class="Game-3">
              <v-hover value>
                <v-card
                  hover
                  slot-scope="{ hover }"
                  contain
                  color="grey lighten-5"
                  max-width="600"
                  height="100%"
                >
                  <v-img
                    :aspect-ratio="0"
                    height="100%"
                    src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
            <div class="Game-4">
              <v-hover value>
                <v-card
                  hover
                  slot-scope="{ hover }"
                  contain
                  color="grey lighten-5"
                  max-width="600"
                  height="100%"
                >
                  <v-img
                    :aspect-ratio="0"
                    height="100%"
                    src="https://cdn.wccftech.com/wp-content/uploads/2018/12/fortnite_characters.jpg"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex v-card--reveal display-2"
                        style="height: 100%; background-color:#15537d;  "
                      ></div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </div>
      

          <br>
          <div class="Border1"></div>
          <br>

     


            <div class="Insta-Galleri">
              <blockquote
                class="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/BnOlb6PCl3J/"
                data-instgrm-version="12"
                style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
              >
                <div style="padding:16px;">
                  <a
                    href="https://www.instagram.com/p/BnOlb6PCl3J/"
                    style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;"
                    target="_blank"
                  >
                    <div style=" display: flex; flex-direction: row; align-items: center;">
                      <div
                        style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"
                      ></div>
                      <div
                        style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"
                      >
                        <div
                          style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"
                        ></div>
                        <div
                          style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"
                        ></div>
                      </div>
                    </div>
                    <div style="padding: 19% 0;"></div>
                    <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 60 60"
                        version="1.1"
                        xmlns="https://www.w3.org/2000/svg"
                        xmlns:xlink="https://www.w3.org/1999/xlink"
                      >
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                              <path
                                d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div style="padding-top: 8px;">
                      <div
                        style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"
                      >Vis dette opslag på Instagram</div>
                    </div>
                    
                    <div
                      style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"
                    >
                      <div>
                        <div
                          style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"
                        ></div>
                        <div
                          style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"
                        ></div>
                        <div
                          style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"
                        ></div>
                      </div>
                      <div style="margin-left: 8px;">
                        <div
                          style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"
                        ></div>
                        <div
                          style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"
                        ></div>
                      </div>
                      <div style="margin-left: auto;">
                        <div
                          style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"
                        ></div>
                        <div
                          style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"
                        ></div>
                        <div
                          style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"
                        ></div>
                      </div>
                    </div>
                    <div
                      style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"
                    >
                      <div
                        style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"
                      ></div>
                      <div
                        style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"
                      ></div>
                    </div>
                  </a>
                  <p
                    style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"
                  >
                    <a
                      href="https://www.instagram.com/p/BnOlb6PCl3J/"
                      style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;"
                      target="_blank"
                    >Et opslag delt af Stefan Jepsen (@stefanjepsen)</a> den
                    <time
                      style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;"
                      datetime="2018-09-02T14:57:06+00:00"
                    >2. Sep, 2018 kl. 7.57 PDT</time>
                  </p>
                </div>
              </blockquote>
              
              
              <p>
                anders
                ASD
                S
                SA
                D
                SA
                D
                SA
                DS
              </p>
            </div>
            <div class="Discord-server">
              <p>anders</p>
            </div>
       
          <br>
          <div class="Border1"></div>
          <br>
       
            <div class="facebookpost">
              <p>anders</p>
            </div>
            <div class="medlemidag">
              <p>Anders</p>
            </div>
      

          <br>
          <div class="Border1"></div>
          <br>
     
      </v-layout>
      
    </v-container>
  -->
</template>

<script>
export default {};
</script>

<style lang="scss">
.Border1 {
  width: 100%;

  height: 25px;

  border: solid 2.5px #2b93c6;

  background-color: #15537d;
}

.ff1 {
  opacity: 1 !important; 
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
 opacity: 0.9;
  position: absolute;
  width: 100%;
  background-color:#121723;
}



</style>

