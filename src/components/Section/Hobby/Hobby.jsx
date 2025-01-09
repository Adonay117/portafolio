import React from 'react'

const designs = [
    'https://e98f89a2.delivery.rocketcdn.me/wp-content/uploads/2022/05/Hip-Hop-Flyer-Design-.jpg.webp',
    'https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/32261/image/event%20flyer%20design%20template.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVw8ekzfAP-qmQafuqRSYRuEg1LD3NLVhpDg&s'
    // ...more design URLs
];

const Hobby = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {designs.map((design, index) => (
                <div key={index} className="relative group">
                    <img src={design} alt={`Design ${index}`} className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" style={{ objectFit: 'contain' }} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
                        Design {index + 1}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Hobby
