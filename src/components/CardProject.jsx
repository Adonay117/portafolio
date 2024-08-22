
import noImage from '../assets/images/no-image.svg'
import Eyes from '../assets/images/eye.svg'
const CardProject = ({ isview, isprototype, linkView, linkPrototype, imgProject = 'no hay imagen', description = 'no hay descripción', tags, titleProject = 'no hay titulo' }) => {
    return (
        <div className=' group bg-white dark:bg-[#26282C] shadow-lg rounded-lg overflow-hidden w-[350px] max-w-sm hover:scale-110 transition ease-in delay-75 relative'>
          
            {imgProject === 'no hay imagen' || imgProject === '' ? (
                <div className='bg-gray-300 dark:bg-white dark:opacity-10 flex items-center justify-center h-48'>
                   <img src={noImage} className=' w-10'/>
                </div>
            ) : (
                <img src={imgProject} className="object-cover w-full h-48 blur-sm group-hover:blur-0" alt={titleProject} />
            )} 
            <div className='p-6'>    
                <h2 className='text-xl font-semibold text-gray-800 mb-2 dark:text-white '>{titleProject}</h2>
                <p className='text-gray-600 text-sm mb-4 dark:text-gray-400'>{description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {tags && tags.map((item, index) => (
                        <span key={index} className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='flex justify-end gap-5'>
                    {isprototype && (
                        <a href={linkPrototype} className=' absolute bottom-2 right-16 text-gray-500'>
                           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 15l16 0" /></svg>
                        </a>
                    )}
                    {isview && (
                        <a href={linkView} className='absolute bottom-2 dark:text-white dark:text-opacity-60'>
                           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
export default CardProject;
