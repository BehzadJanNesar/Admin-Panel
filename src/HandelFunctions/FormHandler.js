export default function FormHandler() {
   const input = ["name", "username", "email"];
   return input.map((item) => {
      return (
         <div>
            <label className="block">{item}</label>
            <input type="text" placeholder={`Type your ${item}...`} />
         </div>
      );
   });
}
