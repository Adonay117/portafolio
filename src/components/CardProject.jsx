const CardProject = ({ isview, isprototype, linkView, linkPrototype, imgProject = 'no hay imagen', className, id, description = 'no hay descripción', tags, titleProject = 'no hay titulo', isVisible }) => {
    return (
        <div id={id} className={`group bg-[#26282C] shadow-lg rounded-lg overflow-hidden w-[350px] max-w-sm transition-all ease-in-out duration-500 relative ${className} ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          
            {imgProject === 'no hay imagen' || imgProject === '' ? (
                <div className='bg-white opacity-10 flex items-center justify-center h-48'>
                    <img src={noImage} className='w-10'/>
                </div>
            ) : (
                <img src={imgProject} className="object-cover w-full h-48 blur-xl group-hover:blur-0" alt={titleProject} />
            )} 
            <div className='p-6'>    
                <h2 className='text-xl font-semibold text-white '>{titleProject}</h2>
                <p className='text-sm mb-4 text-gray-400'>{description}</p>
                <div className='flex flex-wrap gap-2 pb-10'>
                    {tags && tags.map((item, index) => (
                        <span key={index} className='bg-gray-600/10 text-gray-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded'>
                            {item}
                        </span>
                    ))}
                </div>
                <div className='flex justify-end '>
                    {isprototype && (
                        <a href={linkPrototype} className='absolute bottom-2 right-28 text-gray-300'>
                            <button className='bg-gray-600/10 px-3 py-1 rounded-md'>
                                Prototipo
                            </button>
                        </a>    
                    )}
                    {isview && (
                        <a href={linkView} className='absolute bottom-2 text-gray-300'>
                            <button className='bg-gray-700/90 px-3 py-1 rounded-md'>
                                Demo
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
export default CardProject