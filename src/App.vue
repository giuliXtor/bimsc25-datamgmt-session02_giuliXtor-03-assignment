<!--<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script> -->

<template>
<!--  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <!--Insert template from project - Assignment-->
  <div id="navBar" class="flexRow spaceBetween alignCenter">
        <div class="flexRow">
            <i class="mdi mdi-food-fork-drink" style="font-size: 25px; padding-right: 10px"></i>
            <h3 style="margin:0">Giulia's Cafe</h3>
        </div>

        <div class="flexRow">
            <span id="about">About</span>
            <span id="content">Contact</span>
        </div>
    </div>
    <div class="flexRow" style="height: calc(100vh - var(--navBarHeight));">
        <div id="sidebar" class="flexColumn">
            <span class="mealTime" id="breakfast" @click="toggleBreakfast">Breakfast</span>
            <span class="mealTime" id="lunch" @click="toggleLunch">Lunch</span>
            <span class="mealTime" id="dinner">Dinner</span>
            <!-- Now we print the value. The syntax to print variable is {{ variable_name }}. -->
            <div class="flexRow emptyRow">
            <!-- Empty row styled with custom classes -->
            </div>
            <p style="margin-left: 8px"> Total order: {{ total_order }} items </p>
        </div>
        <div id="main">
            <div v-if="breakfastShow" id="breakfastFoods" class="flexRow wrap">
                <div class="menuItem">
                    <img src="./assets/breakfastImages/bagel.jpg" width="100%" height="133px">
                    <h4>Bagel</h4>
                    <p>Bagel with cream cheese</p>
                    <!-- Button for Bagel -->
                    <!-- Here we define what function will be called when button is clicked. -->
                    <button @click="increment_bagels">Order a Bagel</button>
                    <!-- Now we print the value. The syntax to print variable is {{ variable_name }}. -->
                    <p style="margin-left: 1px"> Number of Bagels: {{ count_bagels }} </p>
                </div>
                <div class="menuItem">
                    <img src="./assets/breakfastImages/omelet.jpg" width="100%">
                    <h4>Omelet</h4>
                    <p>4 egg omelet with cheese</p>
                    <!-- Button for Omelet -->
                    <!-- Here we define what function will be called when button is clicked. -->
                    <button @click="increment_omelets">Order an Omelet</button>
                    <!-- Now we print the value. The syntax to print variable is {{ variable_name }}. -->
                    <p style="margin-left: 1px"> Number of Omelets: {{ count_omelets }} </p>
                </div>
                <div class="menuItem">
                    <img src="./assets/breakfastImages/pancakes.jpg" width="100%">
                    <h4>Pancakes</h4>
                    <p>Pancakes with syrup</p>
                    <!-- Button for pancakes -->
                    <!-- Here we define what function will be called when button is clicked. -->
                    <button @click="increment_pancakes">Order a Pancake</button>
                    <!-- Now we print the value. The syntax to print variable is {{ variable_name }}. -->
                    <p style="margin-left: 1px"> Number of Pancakes: {{ count_pancakes }} </p>
                </div>
            </div>

            <div v-if="lunchShow" id="lunchFoods" class="flexRow wrap">
                <div class="menuItem">
                    <img src="./assets/lunchImages/soup.jpg" width="100%">
                    <h4>Soup</h4>
                    <p>Tomato</p>
                    <!-- Button for Soup -->
                    <!-- Here we define what function will be called when button is clicked. -->
                    <button @click="increment_soups">Order a Soup</button>
                    <!-- Now we print the value. The syntax to print variable is {{ variable_name }}. -->
                    <p style="margin-left: 1px"> Number of Soups: {{ count_soups }} </p>
                </div>
                <div class="menuItem">
                    <img src="./assets/lunchImages/sandwhich.jpg" width="100%">
                    <h4>Sandwhich</h4>
                    <p>Chicken and Avocado</p>
                    <!-- Button for sandwhich -->
                    <!-- Here we define what function will be called when button is clicked. -->
                    <button @click="increment_sandwhiches">Order a Sandwhich</button>
                    <!-- Now we print the value. The syntax to print variable is {{ variable_name }}. -->
                    <p style="margin-left: 1px"> Number of Sandwhiches: {{ count_sandwhiches }} </p>
                </div>
            </div>

        </div>
    </div>

</template>

<!--Insert script setup from project-Assignment-->
<script setup>

import { ref, computed } from 'vue';

// Define variables and constants
var count_bagels = ref(0);
var count_omelets = ref(0);
var count_pancakes = ref(0);
var count_soups = ref(0);
var count_sandwhiches = ref(0);

// Define functions
function increment_bagels() {
  count_bagels.value++;
}
function increment_omelets() {
  count_omelets.value++;
}
function increment_pancakes() {
  count_pancakes.value++;
}
function increment_soups() {
  count_soups.value++;
}
function increment_sandwhiches() {
  count_sandwhiches.value++;
}

let breakfastShow = ref(true)
let lunchShow = ref(true)

function toggleBreakfast() {
    breakfastShow.value = !breakfastShow.value
    console.log("breakfastShow is" + breakfastShow.value)
}

function toggleLunch() {
    lunchShow.value = !lunchShow.value
    console.log("luncShow is" + lunchShow.value)
}
// Computed property to calculate the total order count
const total_order = computed(() => {
  return count_bagels.value + count_omelets.value + count_pancakes.value + count_soups.value + count_sandwhiches.value
})

</script>

<!--Insert style setup from project-Assignment-->

<!--Delete Hello World style setup

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
-->

<style>
:root {
  --navBarHeight: 30px;
  --sideBarHeight: 200px
}

#navBar {
  background-color: rgb(233, 203, 253);
  height: var(--navBarHeight);
  padding: 20px
}

#sidebar {
  background-color: rgb(102, 102, 139);
  width: var(--sideBarHeight);
  padding: 10px
}

#main {
  background-color: rgb(145, 208, 219);
  width: calc(100vw - var(--sideBarHeight));
  padding: 10px
}

.flexRow {
  display: flex;
}

#about {
  margin-right: 10px;
}

.menuItem {
  width: 200px;
  height: 235px;
  margin: 4px;
}

.flexColumn {
  display: flex;
  flex-direction: column;
}

.box {
  height: 100px;
  width: 100px;
  background-color: azure;
  border: 1px solid black;
  margin: 4px;
}

.spaceBetween {
  justify-content: space-between;
}

.spaceAround {
  justify-content: space-around;
}

.wrap {
  flex-wrap: wrap;
}

.justifyCenter {
  justify-content: center;
}

.alignCenter {
  align-items: center;
}

.flexStart {
  justify-content: flex-start;
}

.flexEnd {
  justify-content: flex-end;
}

.mealTime {
  margin: 10px;
  color: white
}

.emptyRow {
height: 60px;  /* Adjust the height */
margin: 10px 0;  /* Optional margin to create space between sections */
}

h4 {

  padding: 0;
  margin: 0;
}

p {
  margin: 0px;
}

</style>
