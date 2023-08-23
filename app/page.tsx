import { LeftSidebar } from "./component/LeftSidebar"

import{BsDot} from 'react-icons/bs'
import{BsChat} from 'react-icons/bs'
import{AiOutlineRetweet} from 'react-icons/ai'
import{AiOutlineHeart} from 'react-icons/ai'
import{IoStatsChart} from 'react-icons/io5'

import{IoShareOutline} from 'react-icons/io5'
import { RightSidebar } from "./component/RightSidebar"


export default function RegisterPage() {
  return (
    <>
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar/>

        <main className="ml-[275px] p-6 mx-2 flex w-[600px] min-h-screen h-full min flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-2xl  font-bold my-4 backdrop-blur bg-black/10 sticky top-0 ">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-center py-2 space-x-2 border-gray-600  relative">
            <div className="w-10 h-10 rounded-full flex-none bg-slate-400"></div>
            <div className="flex flex-col w-full h-full">
              
                <input type="text" placeholder="What's Happaning " className="w-full border-b-[0.5px] placeholder:text-gray-600 border-gray-600 p-4 h-full bg-transparent outline-none border-none"/>
              
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full m-4 bg-primary font-bold px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200">Tweet</button>
                </div>

              </div>
            </div>
          </div>
         <div className="flex flex-col">
          {
            Array.from({length:5}).map((_,i)=>(
            <div key={i} className=" p-4  border-gray-600 border-b-[0.5px] flex space-x-4">
              <div className="">
                <div className="w-10 h-10 bg-slate-200 rounded-full"/>
              </div>
              <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1">
                <div className="font-bold">Sanika Patil</div>
                <div className="text-gray-500">@__sanika_</div>
                <div>
                  <BsDot/>
                </div>
                <div>1 hour ago</div>
              </div>
              <div className="text-white text-sm">
                Lorem adipisicing elit. Amet, repellat distinctio. Saepe voluptates quasi totam porro quisquam autem velit! Vero amet rem odio magni non pariatur aut dolorum debitis, evecitationem officiis illo suscipit? Officia animi aliquid ipsum tenetur aliquam reiciendis possimus. Deleniti, libero vel! Quae architecto dolore accusantium itaque consequuntur voluptatum alias. Qui provident vitae numquam quidem sequi sint, placeat illum libero reiciendis unde ducimus molestias nihil nostrum impedit error doloribus deserunt facilis! Obcaecati, alias similique aspernatur minima minus voluptatum eum nulla voluptatem pariatur
              </div>
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl">
               <img className="h-96 w-full "src="https://source.unsplash.com/1600x900/?technology,water" alt="" />
              </div>
              <div className="flex items-center space-x-2 w-full justify-evenly">
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer"><BsChat/></div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer"><AiOutlineRetweet/></div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer"><AiOutlineHeart/></div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer"><IoStatsChart/></div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer"><IoShareOutline/></div>

              </div>
            </div>
            </div>
            ))
          }
          
         </div>
        </main>
        <section>
          <RightSidebar/>
        </section>
      </div>
    </div>
     
    </>
  );
}
