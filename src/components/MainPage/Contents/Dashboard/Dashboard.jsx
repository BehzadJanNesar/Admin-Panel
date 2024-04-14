import React from 'react';

export default function Dashboard() {
   return (
      <form className="w-[50rem] border border-gray-400 rounded-[0.7rem] p-[1.5rem] grid gap-[2.2rem]">
         {/* {getInput()} */}
         <div className="grid gap-[0.8rem]">
            <label htmlFor="city" className="text-[1.3rem]">
               Address
            </label>
            <div className="flex flex-wrap gap-x-[2%] gap-y-[1rem]">
               {/* {getInputGroup()} */}
            </div>
         </div>
         <div className="flex justify-center gap-[2%]">
            {/* {getBtnForm(props)} */}
         </div>
      </form>
   );
   // const [data, setData] = useState(null);

   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          const response = await axios.get('https://api.example.com/data');

   //          setData(response.data);
   //       } catch (error) {
   //          console.error('Error fetching data:', error);
   //       }
   //    };
   //    fetchData();
   // }, []);

   // return (
   //    <div>
   //       {data ? (
   //          <div>
   //             <p>Data: {data}</p>
   //          </div>
   //       ) : (
   //          <p>Loading...</p>
   //       )}
   //    </div>
   // );
}


