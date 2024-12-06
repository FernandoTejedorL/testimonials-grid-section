import { v4 } from 'uuid';

export const TESTIMONIALS_INFO = [
	{
		id: v4(),
		url: './assets/images/image-daniel.jpg',
		$background: '#733FC8',
		$verified: '#ffffff',
		$bgimage: './public/assets/images/bg-pattern-quotation.svg',
		$circle: '2px solid #A775F1',
		$nameColor: '#fff',
		name: 'Daniel Clifford',
		$headerColor: '#fff',
		header:
			'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
		$speechColor: '#CFCFCF',
		speech:
			'“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”',
		$column: '1/3',
		$row: '1/2'
	},
	{
		id: v4(),
		url: './assets/images/image-jonathan.jpg',
		$background: '#48556A',
		$verified: '#ffffff',
		$nameColor: '#fff',
		name: 'Jonathan Walters',
		$headerColor: '#fff',
		header: 'The team was very supportive and kept me motivated',
		$speechColor: '#fff',
		speech:
			'“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “',
		$column: '3/4',
		$row: '1/2'
	},
	{
		id: v4(),
		url: './assets/images/image-jeanette.jpg',
		$background: '#fff',
		$verified: '#48556A',
		$nameColor: '#48556A',
		name: 'Jeanette Harmon',
		$headerColor: '#48556A',
		header: 'An overall wonderful and rewarding experience',
		$speechColor: '#48556A',
		speech:
			'“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
		$column: '1/2',
		$row: '2/3'
	},
	{
		id: v4(),
		url: './assets/images/image-patrick.jpg',
		$background: '#19202D',
		$verified: '#ffffff',
		$circle: '2px solid #A775F1',
		$nameColor: '#fff',
		name: 'Patrick Abrams',
		$headerColor: '#ECF2F8',
		header:
			'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
		$speechColor: '#fff',
		speech:
			'“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”',
		$column: '2/4',
		$row: '2/3'
	},
	{
		id: v4(),
		url: './assets/images/image-kira.jpg',
		$background: '#fff',
		$verified: '#48556A',
		$nameColor: '#48556A',
		name: 'Kira Whittle',
		$headerColor: '#48556A',
		header: 'Such a life-changing experience. Highly recommended!',
		$speechColor: '#48556A',
		speech:
			'“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”',
		$column: '4/5',
		$row: '1/3'
	}
];
