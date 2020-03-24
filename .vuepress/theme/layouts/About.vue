<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <LogoStaggered class="mt-2" /> 
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">

                <span class="customBig" style="color: red; text-shadow: 2px 2px black"><u>Hi!</u></span> My names Eric, a 20 year old Junior Software developer based in 
                Tallinn Estonia making my first steps into the bigger development world.<br/><br/>

                My programming journey initially started from the <u>Tallinn Polytechnic school</u>
                where I'd study software development for 3 years and end the school with a 
                cool speech and an even cooler gold medal for: <i><u>"Great Contribution to school activities!"</u></i><br/><br/>

                On the journey my <b>curiousity</b> led me to scout into other genres of 
                development, and a big part grew to be "web development", thus most 
                of my "webmastering" has been <u>self thought</u> since my school major concentrated
                specifically on Software development, so <i>software design, design patterns, algorithms</i> and so on.<br/><br/>

                I've grown a <u>big liking</u> toward software <i>UX</i> and <i>Design</i>, thus every day I try to 
                broaden my vocabulary on different design development methods to start crafting 
                much cooler user-experiences more <b>efficiently</b> and <b>faster</b>.<br/><br/>

                <a href="#">Link to my CV!</a>

              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center mt-3">
            <a href="/" type="button" class="customBackButton">Home</a>
            <a href="/projectslist" type="button" class="customBackButton specialBtn">Projects</a>
            <a href="/contact" type="button" class="customBackButton">Contact</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center m-2 mb-4">
              <u>Things i use</u>
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h5 class="text-center m-2">
              Technologies
            </h5>
            <div class="card">
              <div class="card-body">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th>HTML/CSS</th>
                      <th>JS</th>
                      <th>PHP/SQL</th>
                    </tr>
                    <tr>
                      <td>WordPress</td>
                      <td>Nuxt</td>
                      <td>Laravel</td>
                    </tr>
                    <tr>
                      <td>Hugo</td>
                      <td>Vue</td>
                      <td>MySQL</td>
                    </tr>
                    <tr>
                      <td>Surge.sh</td>
                      <td>Jquery</td>
                      <td>MariaDB</td>
                    </tr>
                    <tr>
                      <td>Bootstrap</td>
                      <td>NodeJS</td>
                      <td>SqlLite</td>
                    </tr>
                    <tr>
                      <td>Bulma</td>
                      <td>Express</td>

                    </tr>
                    <tr>
                      <td>Vuetify</td>
                      <td>Vuepress</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h5 class="text-center m-2">Tools</h5>
            <div class="card">
              <div class="card-body">
                <table class="table" style="white-space: nowrap;">
                  <thead class="">
                    <tr>
                      <th>Figma</th>
                      <th>Adobe Photoshop</th>
                      <th>Adobe XD</th>
                    </tr>
                    <tr>
                      <th>Sublime</th>
                      <th>Visual Studio</th>
                      <th>PhpStorm</th>
                    </tr>
                    <tr>
                      <th>Cmder</th>
                      <th>GitHub</th>
                      <th>GitLab</th>
                      <th>Xampp</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>  
        <div class="row">
          <div class="col-md-12">
            <h5 class="text-center m-2">Other Languages</h5>
            <div class="card">
              <div class="card-body">
                <table class="table">
                  <thead class="">
                    <tr>
                      <th>C#</th>
                      <th>Python</th>
                      <th>Arduino(c++)</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
  import LogoStaggered from '../../components/LogoStaggered.vue'

  export default {
    components: {
      LogoStaggered,

    }
  }

</script>

<style scoped>

.customBig {
  font-size: 3rem;
  text-decoration: bold;
}

.customBackButton {
  margin: 5px;
  background-color: transparent;
  border:none;
  outline: none !important;
  font-size: 20px;
  color: black !important;
  text-decoration: none !important;
  transition: all .5s;
}

.specialBtn {
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-left: 15px;
  padding-right: 15px;
  
}

.customBackButton:hover {
  color: red !important;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "Logo Title" "Intro Tech" "Intro Tools" "back-btn Xtra";
}

.Logo { grid-area: Logo; }

.Intro { grid-area: Intro; }

.back-btn { grid-area: back-btn; }

.Title { grid-area: Title; }

.Tech { grid-area: Tech; }

.Tools { grid-area: Tools; }

.Xtra { grid-area: Xtra; }

</style>