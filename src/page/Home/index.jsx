import banner from '../../assets/image/banner.png'
import '../../assets/sass/home.sass'

const Home = (props) => {
    return (
        <div className="home">
            <img className="banner" src={banner} alt="banner" />
        </div>
    )
}

export default Home