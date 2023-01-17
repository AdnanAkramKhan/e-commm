<template>
  
  <!-- Footer -->
    <section id="footer">
      <div class="container">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <h5>About</h5>
            <!-- static About paragraph  -->
            <p class="list-unstyled about quick-links"> 
                 Programmer Force CODE WANT TO BE SIMPLE is an intitative to help the 
                upcomming programmers with the code. Programmer Force focuses on providing
                the most efficient code as code wants to be simple. We will help programmers build to 
                improve the concepts in different programming languages that includes HTML, CSS,
                Bootstap, Javascript, Vue.js, Vuex, Vuetify, Python, Machine Learning etc.. 
          </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <h5>Works</h5>
            <ul class="list-unstyled quick-links">
              <li><a href="https://pf.com.pk/"><i class="fa fa-angle-double-right"></i>Programmer Force</a></li>
              <li><a href="https://pf.com.pk/career/"><i class="fa fa-angle-double-right"></i>Programmer Careers</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Fiverr</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item"><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
              <li class="list-inline-item"><a href="https://twitter.com/?lang=en"><i class="fa fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
              <li class="list-inline-item"><a href="https://www.google.com/"><i class="fa fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank"><i class="fa fa-envelope"></i></a></li>
            </ul>
          </div>
          <hr>
        </div>	
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="https://pf.com.pk/">Programmer Force</a></u> is a Registered Pakistan Telecom, Inc. Pakistan.</p>
            <p class="h6">©2023 All right Reversed.<a class="text-green ml-2" href="https://pf.com.pk/" target="_blank">Programmer Force</a></p>
          </div>
          <hr>
        </div>	
      </div>
    </section>
    <!-- ./Footer -->
    </template>
    <script>
    export default{
      name:'FooterComponent',
    }
  </script>
  <style scoped>
  
  
  /* Footer */
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  section {
      padding: 16px 0;
      height:33rem;
  }
  
  section .section-title {
      text-align: center;
      color: #007b5e;
      margin-bottom: 50px;
      text-transform: uppercase;
  }
  #footer {
      background-color: #345 !important;
  }
  #footer h5{
    padding-left: 10px;
      border-left: 3px solid #eeeeee;
      padding-bottom: 6px;
      margin-bottom: 20px;
      color:#ffffff;
  }
  #footer a {
      color: #ffffff;
      text-decoration: none !important;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
  }
  #footer ul.social li{
    padding: 3px 0;
  }
  .about{
    color: #ffffff;
  }
  #footer ul.social li a i {
      margin-right: 5px;
    font-size:25px;
    -webkit-transition: .5s all ease;
    -moz-transition: .5s all ease;
    transition: .5s all ease;
  }
  #footer ul.social li:hover a i {
    font-size:30px;
    margin-top:-10px;
  }
  #footer ul.social li a,
  #footer ul.quick-links li a{
    color:#ffffff;
  }
  #footer ul.social li a:hover{
    color:#eeeeee;
  }
  #footer ul.quick-links li{
    padding: 3px 0;
    -webkit-transition: .5s all ease;
    -moz-transition: .5s all ease;
    transition: .5s all ease;
  }
  #footer ul.quick-links li:hover{
    padding: 3px 0;
    margin-left:5px;
    font-weight:700;
  }
  #footer ul.quick-links li a i{
    margin-right: 5px;
  }
  #footer ul.quick-links li:hover a i {
      font-weight: 700;
  }
  .paragraph{
    font-weight:50px;
  }
  @media (max-width:767px){
    #footer h5 {
      padding-left: 0;
      border-left: transparent;
      padding-bottom: 0px;
      margin-bottom: 10px;
  }
  }
  </style>
  