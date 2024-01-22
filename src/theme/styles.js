import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
	colors: {
		gray: {
			700: '#1f2733'
		}
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode('#F8F8F8', 'purple.900')(props),
				fontFamily: "'Roboto', sans-serif"
			},
			html: {
				fontFamily: "'Roboto', sans-serif"
			}
		})
	}
};
