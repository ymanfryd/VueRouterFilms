<template>
  <div id="app">

    <MyComponent />
    <hr>
    <Names />
    <hr>
    <PhotoRedactor />
    <hr>
    <ProductList />
    <hr>
    <UserForm />
    <hr>
    <SignUp />
    <hr>
    <UserPage />
    <hr>
    <TextEditor />
    <hr>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";
import Names from "./components/Names";
import PhotoRedactor from "./components/PhotoRedactor";
import ProductList from "@/components/ProductList";
import UserForm from "./components/UserForm";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import TextEditor from "./components/TextEditor";


export default {
  name: 'App',
  components: {
    MyComponent,
    Names,
    PhotoRedactor,
    ProductList,
    UserForm,
    SignUp,
    UserPage,
    TextEditor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
