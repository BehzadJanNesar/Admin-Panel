import axios, { Axios } from "axios";

export default async function AxiosFanc() {
   try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      return data;
   } catch (err) {
      console.log(err);
   }
}
