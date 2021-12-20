import banner from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'
import '../../assets/sass/home.sass'
import SearchBar from '../../components/SeachBar'

const Home = (props) => {
    return (
        <div className="home">
            <img className="logo" src={logo} alt="logo" />
            <div className="home-title">和你一起探索台灣</div>
            <img className="banner" src={banner} alt="banner" />
            <SearchBar className="search-bar"></SearchBar>
        </div>
    )
}

export default Home