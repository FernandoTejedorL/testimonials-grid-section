import { TESTIMONIALS_INFO } from './constants/testimonials-info';
import Main from './components/main/Main';
import Testimonial from './components/testimonial/Testimonial';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Main>
				{TESTIMONIALS_INFO.map(testimonial => (
					<Testimonial key={testimonial.id} {...testimonial} />
				))}
			</Main>
		</>
	);
};

export default App;
