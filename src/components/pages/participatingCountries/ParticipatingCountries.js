import React from 'react';
import poster from "../../../images/hostMA.png"
import Matches from "../dashboard/Matches/Matches"
import "./participatingCountries.css";
import ShopCard from '../../Elements/ShopCard/ShopCard';
import '../../Elements/ShopCard/ShopCard.css'
import CountryClassement from './components/CountryClassement';
import News from '../dashboard/News/News';

function HostCountry() {
  return (
    <div className='hostCountry'>
      <div className='poster'>
        <img src={poster} />
      </div>
      <div className='info'>
        <Matches team="Morocco" />
        <div className='trait'></div>
        <div className='standings'>
          <div className='standings-title'>
            <h3>Standings</h3>
          </div>
          <div className='standings-list'>
            <CountryClassement team="Morocco" />
          </div>

        </div>
        <div className='trait'></div>
        <div className='standings-title'>
            <h3>Shop</h3>
          </div>
        <ShopCard kit="https://s3-alpha-sig.figma.com/img/5704/2430/81a5c62d7aa6fdbb76726dc8bb3080ce?Expires=1703462400&Signature=DX1PyMnPSxdnNQJHbpwFDra73vZS79WtTWZ9qVhS-va-~ba8sY2tNS66hvUiZYwF6o73YredehpuWlRUw6-B-bae9pCImVFGAEip57p1qlhGYjU9jRZfp7glie9nEFdxTdYQVLPsTsxGjIjayPpRIGCFmJrzGsfxDSvVUtNdNhDNdvVRoQ3NkxWo5NVYvP7BxMinD5~phoCyw4kTQ06ETtegULdaI6dxFFjTfsUfV-TpL4wXJRZLXLZujBvdaTpRdgjuqsuyZnAzeeGteilbOG5w~Js2iTpf7Iot9TVmWGaccmC9Ky-sqIpegv3ZK0WAS3hg51m8idE1tB4KE50o0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <div className='trait'></div>
        <News country="All"/>
      </div>

    </div >
  )
}

export default HostCountry