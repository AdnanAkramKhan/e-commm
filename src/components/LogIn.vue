<template>
    <v-form
      ref="form"
      lazy-validationd
      class="col-md-offset-4"
      style="max-width: 30rem; height: 30rem; margin-top: 10rem;"
    >
          <v-card-title class="success darken-2 text-leftfont-weight-bold">
        <span class="white--text">Login </span>
      </v-card-title>
      <v-text-field
        v-model="userData.username"
        :counter="20"
        label="UserName"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="userData.password"
        label="Password"
        required
      ></v-text-field>
      <v-btn
       color="success darken-2"
        class="mr-4"
        @click="Login"
      >
        Login
      </v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      async Login() {                                      //function on login button
        const fetched = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.userData.username,              //input date binds 
            password: this.userData.password,
          }),
        });
  
        const login = await fetched.json();           //change in json
        await localStorage.setItem("Login", JSON.stringify(login));   //store data in localstorage
        if (!login.token) {                           //condition for authentication check
          alert("The username or password is incorrect!");
        } else {
          this.$router.push({ name: "AddCart" });
        }
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
  