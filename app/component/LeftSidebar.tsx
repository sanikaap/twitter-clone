import{BiHomeCircle} from 'react-icons/bi'
import{HiOutlineHashtag} from 'react-icons/hi'
import{BsBell} from 'react-icons/bs'
import{BsEnvelope} from 'react-icons/bs'
import{BsBookmark} from 'react-icons/bs'
import{BiUser} from 'react-icons/bi'
import{BsTwitter} from 'react-icons/bs'
import{BsThreeDots} from 'react-icons/bs'
import Link from 'next/link'
const NAVIGATION_ITEMS = [
  {
    title:'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notification',
    icon:BsBell
  },
  {
    title:'Message',
    icon:BsEnvelope
  },
  {
    title:'Bookmars',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  },

]

export const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex-col items-stretch flex h-screen px-4 ">
        <div className='flex flex-col items-stretch space-y-4 h-full mt-4'>
        <Link href={'/'} className='p-2 text-2xl'>
          <BsTwitter />
         </Link>
        {
          NAVIGATION_ITEMS.map((item)=>(
            <Link className='hover:bg-white/10 text-2xl transition duration-200 rounded-3xl py-2 px-6 flex items-center justify-start w-fit space-x-2' href={'/${item.title.toLowercase()}'}  key={item.title}>
              <div>
                <item.icon/>
              </div>
              <div>
                {item.title}
              </div>
            </Link>
          ))

        }
        <button className='w-full rounded-full bg-primary mx-2 m-4 p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>Tweet</button>
        </div>
        <div className='flex items-center space-x-2'>
        <button className='rounded-full flex item-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10'>
          <div className='rounded-full bg-slate-400 w-12 h-12'></div>
          <div className='text-left text-sm '>
            <div className='font-semibold'>Sanika Patil</div>
            <div>@__sanika_</div>

          </div>
          <div>
            <BsThreeDots/>
          </div>
        </button>
        </div>
        </section>
  )
}
