import React from 'react'
import logo from './images/black_circle.png'
import sertisLogo from './images/sertis_logo.png'
import './App.css'
import './Scrollbar.css'
import lax from 'lax.js'
class App extends React.Component {
	componentDidMount() {
		lax.setup()
		window.addEventListener('resize', function() {
			lax.updateElements()
		})
		document.addEventListener('scroll', x => {
			lax.update(window.scrollY)
		})
		lax.update(window.scrollY)
	}
	render() {
		return (
			<div className='App'>
				<section className='title'>
					<div className='title-lastname'>
						<p
							className='lax mongkolkul'
							data-lax-translate-y='800 60, 0 500 | speed=2'
						>
							Mongkolkul.
							<br />
							Software Engineer.
							<br />
							Based In London.
							<br />
							from Bangkok.
						</p>
					</div>
					<div className='black-box'></div>
					<p className='lax paris' data-lax-preset='driftRight-50'>
						Paris
					</p>
					<img
						src={logo}
						className='thaiSoc-logo'
						alt='thaiSoc-logo'
						onClick={() => window.open('https://www.google.com', '_blank')}
					/>
				</section>
				<section className='gif'>
					<img
						className='gif-gif'
						src='https://media.giphy.com/media/BGdeyyPUuPR0A/giphy.gif'
						alt='vampire lmao'
					></img>
				</section>

				<section className='about'>
					<div className='lax' data-lax-preset='linger'>
						<p className='about-title'>who am i ?</p>
					</div>
					<div
						className='lax about-text-container'
						data-lax-opacity='800 0, 700 1'
						data-lax-translate-y='900 200, 800 50, 750 20, 700 0'
						data-lax-anchor='self'
					>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
							vitae cumque, aspernatur incidunt, ducimus sit exercitationem et
							soluta ratione fugiat dolore reiciendis beatae iste nam expedita
							eaque architecto reprehenderit rerum.
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
							dolore quibusdam, culpa fuga ea incidunt aliquid voluptatum
							commodi vel, iure tempora sed suscipit dicta ut consequuntur
							temporibus laudantium fugit possimus!
						</p>
					</div>
				</section>
				<section className='work'>
					<div className='lax' data-lax-preset='linger'>
						<p className='work-title'>some experience</p>
					</div>
					<div className='work-sertis'>
						<img
							src={sertisLogo}
							className='sertis-logo'
							alt='sertis-logo'
							onClick={() => window.open('https://www.google.com', '_blank')}
						/>
						<h1>sertis</h1>
						<p>hello</p>
					</div>
				</section>
				<section className='project'></section>
			</div>
		)
	}
}

export default App
