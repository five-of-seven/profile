1. Include the following tags in 'head' section of your index.html file in case you already do not have it there,
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
		<meta
		  name="viewport"
		  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
		/>

2. Create the following folders,
  - Create a folder inside your src folder named, 'ui'
  - Inside 'ui' folder create another folder named, 'theme'
  - Inside 'theme' folder, create a new file named, 'index.js'

3. Copy and paste the following code in the new index.js file you created in step 2,

	import { createMuiTheme } from '@material-ui/core/styles';

	const palette = {
	  primary: { main: '#013859', contrastText: '#ffffff' },
	  secondary: { main: '#eb3e4a', contrastText: '#000000' },
	};
	const themeName = 'Astronaut Blue Amaranth Dove';

	export default createMuiTheme({ palette, themeName });


4. Inside your src folder, add the following code to index.js file,

  - import myTheme from './ui/theme/index';
  - import { MuiThemeProvider } from '@material-ui/core/styles';

	  - Wrap your main App component in the following jsx component as follows,
	  ReactDOM.render(<MuiThemeProvider theme={myTheme}><App /> </MuiThemeProvider>, document.getElementById('root'));

	  OR

	ReactDOM.render(
	  <Provider store={ createSoreWithMiddleware(reducers) } >
	   <HashRouter>
	     <MuiThemeProvider theme={myTheme}>
	      <Switch>
	        <Route path="/profile" component={Profile} />
	        <Route path="/editprofile" component={EditProfile} />
	      </Switch>
	      </MuiThemeProvider>
	    </HashRouter>
	  </Provider>,
	  document.getElementById('root'),
	);

  
