import React from 'react'
import anime from 'animejs/lib/anime.es.js'
import { eduLine } from './eduLine.js'
import './eduLine.css'
import './App.css'
import './Scrollbar.css'
import lax from 'lax.js'
import Scrollbar from 'smooth-scrollbar'

// logo
import sepLogo from './images/sep_logo.png'
import thaiSocLogo from './images/black_circle.png'
import sertisLogo from './images/sertis_logo.png'
import tftLogo from './images/tft.png'
import githubLogo from './images/github-logo.png'
import playIcon from './images/play-button.png'

class App extends React.Component {
	componentDidMount() {
		// Scrollbar.initAll({ damping: 0.03 })

		lax.setup()
		window.addEventListener('resize', () => {
			lax.updateElements()
		})

		const work = document.querySelector('.work')
		let current = null
		document.addEventListener('scroll', x => {
			console.log('here')
			lax.update(window.scrollY)

			const lineOffsetFromTop = work.offsetTop - window.scrollY + 50
			console.log(lineOffsetFromTop)
			// Paris

			if (lineOffsetFromTop >= 700) {
				current = anime({
					targets: 'path',
					strokeDashoffset: {
						value: 0,
						duration: 700,
						easing: 'easeOutQuart'
					},
					strokeDasharray: {
						value: '50 1411',
						duration: 1700,
						easing: 'easeOutQuart'
					}
				})
				// Imperial
			} else if (lineOffsetFromTop < 700 && lineOffsetFromTop > 500) {
				current = anime({
					targets: 'path',
					strokeDashoffset: {
						value: -827,
						duration: 700,
						easing: 'easeOutQuart'
					},
					strokeDasharray: {
						value: '98 1411',
						duration: 700,
						easing: 'easeOutQuart'
					}
				})
				// Harrow
			} else if (lineOffsetFromTop < 600 && lineOffsetFromTop > 500) {
				current = anime({
					targets: 'path',
					strokeDashoffset: {
						value: -1128,
						duration: 700,
						easing: 'easeOutQuart'
					},
					strokeDasharray: {
						value: '88 1411',
						duration: 700,
						easing: 'easeOutQuart'
					}
				})
			} else if (lineOffsetFromTop < 500 && lineOffsetFromTop > 0) {
				current = anime({
					targets: 'path',
					strokeDashoffset: {
						value: -1204,
						duration: 700,
						easing: 'easeOutQuart'
					},
					strokeDasharray: {
						value: '210 1411',
						duration: 700,
						easing: 'easeOutQuart'
					}
				})
			}
		})
		lax.update(window.scrollY)
	}
	render() {
		return (
			<div className='App' data-scrollbar>
				<section className='title'>
					<div className='title-lastname'>
						<p
							className='lax mongkolkul'
							data-lax-translate-y='750 170, 0 500 | speed=2'
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
					<div className='thaiSoc-logo-container lax' data-lax-preset='spin'>
						<img
							src={thaiSocLogo}
							className='thaiSoc-logo'
							alt='thaiSoc-logo'
							onClick={() =>
								window.open(
									'https://www.facebook.com/groups/139633776127649/',
									'_blank'
								)
							}
						/>
					</div>
				</section>
				<section className='gif'>
					<video autoplay controls loop>
						<source
							src='https://jobs.dorfjungs.com/intro.1271fca1.mp4'
							type='video/mp4'
						/>
					</video>
				</section>

				<section className='about'>
					<div className='lax' data-lax-preset='eager'>
						<p className='about-title'>ABOUT ME</p>
					</div>
					<div
						className='lax about-text-container'
						data-lax-opacity='800 0, 700 1'
						data-lax-translate-y='900 200, 800 50, 750 20, 700 0'
						data-lax-anchor='self'
					>
						<p>
							<div className='line'>{eduLine}</div>
							Hi there. My name is <strong>Paris</strong> Mongkolkul..
							blablablablabla. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Alias distinctio accusantium dolorum commodi rem
							cumque quisquam iure voluptatem consequatur inventore harum
							doloremque minus asperiores doloribus ullam ratione voluptates,
							dolorem rerum!
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
						<p className='work-title'>EXPERIENCE</p>
					</div>
					<div className='work-sertis'>
						<img
							src={sertisLogo}
							className='sertis-logo'
							alt='sertis-logo'
							onClick={() =>
								window.open('https://www.sertiscorp.com', '_blank')
							}
						/>
						<h2> &nbsp;&nbsp; &nbsp;&nbsp;-> Full stack Developer Intern</h2>

						<div className='grid-container'>
							<div
								className='lax sub-grid-container-1'
								data-lax-preset='eager-150'
							>
								<h1>
									Diamonds &nbsp;
									<img
										src={tftLogo}
										className='small-logo'
										alt='tft-logo'
										onClick={() =>
											window.open(
												'http://diamonds.teachforthailand.org/page/home',
												'_blank'
											)
										}
									/>
								</h1>
								<ul>
									Solely developed phase 2 of the web platform used by teachers
									to manage and generate exams using statistics-based
									algorithms. Implemented the question editor page using React &
									Vanilla js for frontend, and Node with Mongo and Redis dockers
									for backend.
								</ul>
							</div>
							<div
								className='lax sub-grid-container-2'
								data-lax-preset='eager-150'
							>
								<h1>
									Fermi &nbsp;
									<img
										src={sepLogo}
										className='small-logo'
										alt='sep-logo'
										onClick={() =>
											window.open(
												'https://www.sertiscorp.com/blockchain?fbclid=IwAR1yzfCNGmx4mlu99KegvfyuWvD0PyvgzFCKo8wylPX1nETVvktlXp6fx4A',
												'_blank'
											)
										}
									/>
								</h1>
								<ul>
									Studied and Refactored the Smart Contracts energy platform
									application, and wrote unit tests using Mocha framework and
									Chai js. Additionally, created my own blockchain voting system
									using Truffle Js.
								</ul>
							</div>
							<div></div>
							<div
								className='lax sub-grid-container-3'
								data-lax-preset='eager-150'
							>
								<h1>Big Upload RESTful API</h1>
								<ul>
									Implemented a Node API for uploading and storing big data to
									be used by the Data Science team. Further integrated
									authorization protocols with JWT and Passport Js with Google
									OAuth2.0 service.
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className='project'>
					<div
						className='lax project-title-container'
						data-lax-translate-x='1900 170, 2500 800, 2900 890, 3200 950'
					>
						<p className='project-title'>PROJECTS</p>
					</div>
					<div className='Obeo'>
						<h1>Obeo</h1>
						<ul>
							<strong>Problem</strong>: Not able to get the full experience from
							a holiday. Only so much you can learn from the internet.
						</ul>
						<ul>
							<strong>Solution</strong>: An <u>Android</u> app to connect
							tourists with locals, and vice versa. Encouraging people to
							interact with others around the world - understand another culture
							better and simply, to make a friend.
						</ul>
						<ul>
							<ul>
								-> Vanilla <u>Java</u> for both frontend and backend.
							</ul>
							<ul>
								-> Integrated Google Maps API and Mesibo messaging service.
							</ul>
							<ul>
								-> AWS: CodePipeline [CI/CD], S3 & RDS [Storage & Database], EC2
								[Deployment].
							</ul>
						</ul>
						<div
							className='github_container'
							onClick={() => {
								window.open('http://google.com', '_blank')
							}}
						>
							<img className='github_logo' src={githubLogo} alt='github logo' />
							<div className='github_text'>click for code</div>
						</div>
					</div>
					<div className='Obeo'>
						<h1>Thai Society Web</h1>
						<ul>
							<strong>Problem</strong>: I'm the only who does Computing in Thai
							Soc.
						</ul>
						<ul>
							<strong>Solution</strong>: A <u>Webapp</u> app used to welcome
							freshers, store members' records, and update event's information.
						</ul>
						<ul>
							<ul>
								-> <u>Node & React Js</u> for backend and frontend.
							</ul>
							<ul>-> Improved UX/UI with Anime Js and other CSS magic.</ul>
							<ul>
								-> Deployed using Nginx through Google Cloud Compute Engine.
							</ul>
						</ul>
						<div
							className='github_container'
							onClick={() => {
								window.open(
									'https://github.com/kawmaiparis/sertis-thaisoc',
									'_blank'
								)
							}}
						>
							<img className='github_logo' src={githubLogo} alt='github logo' />
							<div className='github_text'>click for code</div>
						</div>
						<div
							className='github_container'
							onClick={() => {
								window.open('http://35.186.152.253/', '_blank')
							}}
						>
							<img className='github_logo' src={playIcon} alt='livecode logo' />
							<div className='github_text'>live code</div>
						</div>
					</div>
				</section>
				<section className='other'>
					<div className='lax other-title-container' data-lax-preset='zoomOut'>
						<p className='other-title'>OTHERS</p>
					</div>
				</section>
				<section className='footer'>
					<div>
						<p>FACEBOOK</p>
					</div>
					<div>
						<p>INSTAGRAM</p>
					</div>
					<div>
						<p>GITHUB</p>
					</div>
					<div>
						<p>LINKEDIN</p>
					</div>
				</section>
			</div>
		)
	}
}

export default App
