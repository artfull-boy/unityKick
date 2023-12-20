import ShopCard from '../../../Elements/ShopCard/ShopCard';
import './Shop.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function Shop(){
    const kits=["https://s3-alpha-sig.figma.com/img/5704/2430/81a5c62d7aa6fdbb76726dc8bb3080ce?Expires=1703462400&Signature=DX1PyMnPSxdnNQJHbpwFDra73vZS79WtTWZ9qVhS-va-~ba8sY2tNS66hvUiZYwF6o73YredehpuWlRUw6-B-bae9pCImVFGAEip57p1qlhGYjU9jRZfp7glie9nEFdxTdYQVLPsTsxGjIjayPpRIGCFmJrzGsfxDSvVUtNdNhDNdvVRoQ3NkxWo5NVYvP7BxMinD5~phoCyw4kTQ06ETtegULdaI6dxFFjTfsUfV-TpL4wXJRZLXLZujBvdaTpRdgjuqsuyZnAzeeGteilbOG5w~Js2iTpf7Iot9TVmWGaccmC9Ky-sqIpegv3ZK0WAS3hg51m8idE1tB4KE50o0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/6c9c/cd8c/4cae7cd58b7031c1b1ed44f5c40378e1?Expires=1703462400&Signature=E7rGYRHWZuMg7VST7YBg8zQnfGwQCLKv3-6TdrQPA8itRJjorfu3TJ3ItPx289iSrzprfh0jgttuwQojgrE-CEBdNU62AmSzr0jWr1jmibvnRNHEo~Mlei5Va~szsfFfXte3zTeooz0WHXEVCac3YWbUMu~j4bC2IVIGpDXrSmEQ6xhRhBv1Y2vzB5AH0oftFummbarOc2iNRs8L2AJ8ahvM2lqCIFKJxq2C6qeNkx3cVrJ425TxyGsiJeGNUMH~h3shsRUZPyrVwmXoOQTWX234iokg5jx4Ei6YGDqNKmCeqKZQTd7qucG7yzzMPdJGEjDPky-JGGuq7OyVTT9xDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/db9a/c1b2/5cf5204aae83464aac1e8a55dfcf8ac6?Expires=1703462400&Signature=NhYtXBU5MBg9ceuuWjcGUhhMAz8SARJpYFQwoNVFRtNTEeUVcFUQm6rJZLvuu99eurNns~pJ8u9YTeN2lj7zjiROztFe2T3G9EPhegqHDhpAJkmJ3qTQ1s1k2-pI4XvXgxPj3AIygKyNxCdPAkslp3xSLI30XHBK6854qq4~NZIFUADpLVIby0HjBXpdG~IAlkmUgJCV2DXUFp5tHDv74XgnbHd3s2nDeI0a9WyAmpQHYgtAmwNDv1rmlou1pm5z1fXchrNDN0wA-nL4X5ksx3ZBowaAONFjodcIZ1yfTSSgRGY0v2SyzUSFpJvT~ozcut~HOJxXyqhGcRE-h9Akig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/26e3/8564/d1d1f8d0911a136f708308a46860adf5?Expires=1703462400&Signature=NMEi26p4vkO06JcZzDHhmi4iz4qV4vRwSX22dBELydNS9FRah1fqLsYbpkpEPlU9D4J5OzGOq4xqPypTC9zo-EbB~xi3bznLPQ8sXEzo7BuP9ag1Zy1uMgatONDQPx1YuIx~KQSaewvN6msvZiDTDHBs5R5LlvyUDgfNEDG16FhOkynrgAm0VuU1WhYe4cKaZTYoU4JiZFG0aSNM496BvpDs7KIw6FE6yJ34DHVStMkJndcVl2CZrzH6gykXhELl25qzBjUgrli9WcDnJ4EGhf1QieRnAcn98GgWXKuFUAa11K~~5ExHU8~IkapyJ76aOfcvKUpX2HeE8~CK7RZeaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/d354/07d6/3e1eddf7f48df898a2ee4ddab5573f89?Expires=1703462400&Signature=AHNPJIRtguQejrYs5UjGn9kZsjDlIuq0wNP5W4NlVd8LkU4VV3jLX38~f7nzSPZ-yrzEZ8gILzsKgKyzgeghI0a4UVKMhxEOeklCe08SEUuq-yAMueRFi5A6fqcwBmHVJpq1-wuAnJG-ABJfqb7-sWA~tGRGNvarz72CWRfgwTfIOYcB9lxoBK75Ju7sR5FYYNivvp1e0MK6-gcCPNp7SHHvsEinIO81VBawPD9hJYBPaf5y~JHvxt3YJh3M7SynsX-6zRaw-zNKqzOQeAX8h-vIcaUsXlEXqyKa9ejqABO6e6n3VPGwIwiGoAolHluvsnqC~r1dvOzseC4mmhAK0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/5704/2430/81a5c62d7aa6fdbb76726dc8bb3080ce?Expires=1703462400&Signature=DX1PyMnPSxdnNQJHbpwFDra73vZS79WtTWZ9qVhS-va-~ba8sY2tNS66hvUiZYwF6o73YredehpuWlRUw6-B-bae9pCImVFGAEip57p1qlhGYjU9jRZfp7glie9nEFdxTdYQVLPsTsxGjIjayPpRIGCFmJrzGsfxDSvVUtNdNhDNdvVRoQ3NkxWo5NVYvP7BxMinD5~phoCyw4kTQ06ETtegULdaI6dxFFjTfsUfV-TpL4wXJRZLXLZujBvdaTpRdgjuqsuyZnAzeeGteilbOG5w~Js2iTpf7Iot9TVmWGaccmC9Ky-sqIpegv3ZK0WAS3hg51m8idE1tB4KE50o0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/6c9c/cd8c/4cae7cd58b7031c1b1ed44f5c40378e1?Expires=1703462400&Signature=E7rGYRHWZuMg7VST7YBg8zQnfGwQCLKv3-6TdrQPA8itRJjorfu3TJ3ItPx289iSrzprfh0jgttuwQojgrE-CEBdNU62AmSzr0jWr1jmibvnRNHEo~Mlei5Va~szsfFfXte3zTeooz0WHXEVCac3YWbUMu~j4bC2IVIGpDXrSmEQ6xhRhBv1Y2vzB5AH0oftFummbarOc2iNRs8L2AJ8ahvM2lqCIFKJxq2C6qeNkx3cVrJ425TxyGsiJeGNUMH~h3shsRUZPyrVwmXoOQTWX234iokg5jx4Ei6YGDqNKmCeqKZQTd7qucG7yzzMPdJGEjDPky-JGGuq7OyVTT9xDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/db9a/c1b2/5cf5204aae83464aac1e8a55dfcf8ac6?Expires=1703462400&Signature=NhYtXBU5MBg9ceuuWjcGUhhMAz8SARJpYFQwoNVFRtNTEeUVcFUQm6rJZLvuu99eurNns~pJ8u9YTeN2lj7zjiROztFe2T3G9EPhegqHDhpAJkmJ3qTQ1s1k2-pI4XvXgxPj3AIygKyNxCdPAkslp3xSLI30XHBK6854qq4~NZIFUADpLVIby0HjBXpdG~IAlkmUgJCV2DXUFp5tHDv74XgnbHd3s2nDeI0a9WyAmpQHYgtAmwNDv1rmlou1pm5z1fXchrNDN0wA-nL4X5ksx3ZBowaAONFjodcIZ1yfTSSgRGY0v2SyzUSFpJvT~ozcut~HOJxXyqhGcRE-h9Akig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/26e3/8564/d1d1f8d0911a136f708308a46860adf5?Expires=1703462400&Signature=NMEi26p4vkO06JcZzDHhmi4iz4qV4vRwSX22dBELydNS9FRah1fqLsYbpkpEPlU9D4J5OzGOq4xqPypTC9zo-EbB~xi3bznLPQ8sXEzo7BuP9ag1Zy1uMgatONDQPx1YuIx~KQSaewvN6msvZiDTDHBs5R5LlvyUDgfNEDG16FhOkynrgAm0VuU1WhYe4cKaZTYoU4JiZFG0aSNM496BvpDs7KIw6FE6yJ34DHVStMkJndcVl2CZrzH6gykXhELl25qzBjUgrli9WcDnJ4EGhf1QieRnAcn98GgWXKuFUAa11K~~5ExHU8~IkapyJ76aOfcvKUpX2HeE8~CK7RZeaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4","https://s3-alpha-sig.figma.com/img/d354/07d6/3e1eddf7f48df898a2ee4ddab5573f89?Expires=1703462400&Signature=AHNPJIRtguQejrYs5UjGn9kZsjDlIuq0wNP5W4NlVd8LkU4VV3jLX38~f7nzSPZ-yrzEZ8gILzsKgKyzgeghI0a4UVKMhxEOeklCe08SEUuq-yAMueRFi5A6fqcwBmHVJpq1-wuAnJG-ABJfqb7-sWA~tGRGNvarz72CWRfgwTfIOYcB9lxoBK75Ju7sR5FYYNivvp1e0MK6-gcCPNp7SHHvsEinIO81VBawPD9hJYBPaf5y~JHvxt3YJh3M7SynsX-6zRaw-zNKqzOQeAX8h-vIcaUsXlEXqyKa9ejqABO6e6n3VPGwIwiGoAolHluvsnqC~r1dvOzseC4mmhAK0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"]
    return<>
        <div className='shop'>
            <div className='shop-title'>
                <h3>Shop</h3>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 3,
                depth: 300,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                loop={true}
            >
                { kits.map((kit,index)=>(
                    <SwiperSlide className='shop-slide' key={index}>
                        <ShopCard kit={kit}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
}