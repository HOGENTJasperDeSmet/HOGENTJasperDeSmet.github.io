// 1. Define route components.
// These can be imported from other files
const Albums = {
  template: `<main class="workShowcase">
                <router-link to="/travel" class="travel hvr-bob"><div class="">Travel</div></router-link>
                <router-link to="/knokke"><div class="knokke hvr-bob">Knokke-Heist</div></router-link>
                <router-link to="/concerts"><div class="concerts hvr-bob">Concerts</div></router-link>
                <router-link to="/aalst"><div class="aalst hvr-bob">Aalst Carnaval</div></router-link>
                <router-link to="/student"><div class="studentKickOff hvr-bob">Student Kick-Off 2019</div></router-link>
            </main>`,
};
const Travel = {
    template: `<main class="showcase">
                    <img src="images/travel/1.jpg">
                    <img src="images/travel/2.jpg">
                    <img src="images/travel/3.jpg">
                    <img src="images/travel/5.jpg">
                    <img src="images/travel/6.jpg">
                    <img src="images/travel/4.jpg">
                </main>`,
  };
  const Knokke = {
    template: `<main class="showcase">
                    <img src="images/knokke/1.jpg">
                    <img src="images/knokke/2.jpg">
                    <img src="images/knokke/3.jpg">
                    <img src="images/knokke/5.jpg">
                    <img src="images/knokke/6.jpg">
                    <img src="images/knokke/7.jpg">
                    <img src="images/knokke/8.jpg">
                    <img src="images/knokke/9.jpg">
                    <img src="images/knokke/10.jpg">
                    <img src="images/knokke/11.jpg">
                    <img src="images/knokke/12.jpg">
                    <img src="images/knokke/13.jpg">
               </main>`,
  };
  const Concerts = {
    template: `<main class="showcase">
                    <img src="images/concerts/1.jpg">
                    <img src="images/concerts/2.jpg">
                    <img src="images/concerts/3.jpg">
                    <img src="images/concerts/4.jpg">
                    <img src="images/concerts/5.jpg">
                    <img src="images/concerts/6.jpg">
                    <img src="images/concerts/7.jpg">
                    <img src="images/concerts/8.jpg">
                    <img src="images/concerts/9.jpg">
                    <img src="images/concerts/10.jpg"> 
                  </main>`,
  };
  const Aalst = {
    template: `<main class="showcase">
                  <img src="images/aalstcarnaval/1.jpg">
                  <img src="images/aalstcarnaval/2.jpg">
                  <img src="images/aalstcarnaval/3.jpg">
                  <img src="images/aalstcarnaval/4.jpg">
                  <img src="images/aalstcarnaval/5.jpg">
                  <img src="images/aalstcarnaval/6.jpg">

                </main>`,
  };
  const Student = {
    template: `<main class="showcase">
                <img src="images/student-kickoff/1.jpg">
                <img src="images/student-kickoff/2.jpg">
                <iframe class="ytplayer" src="https://www.youtube.com/embed/Q8LGHWTlgbs?autoplay=1&mute=1&controls=0"  allow="autoplay" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
  </main>`,
  };
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Albums },
  { path: "/travel", component: Travel },
  { path: "/knokke", component: Knokke },
  { path: "/concerts", component: Concerts },
  { path: "/aalst", component: Aalst },
  { path: "/student", component: Student },

];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

var app = new Vue({
  router,
  el: "#workShowcase",
  data: {
    product: "Socks",
  },
});

var xd = fetch("https://api.chucknorris.io/jokes/random")
.then(response => response.json())
.then(data => console.log(data));
