import { proxy } from "valtio";

const state = proxy({
  isAuthenticated: false,
  user: { name: "", email: "", password: "" },
});

export default state;
