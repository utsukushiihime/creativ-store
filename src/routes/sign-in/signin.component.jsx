import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	}
	
	return (
	<>
	<h1>Sign In Page</h1>
	<button
		onClick={logGoogleUser}
	>
		Sign In with Google Popup
	</button>
	
	</>
	)
}

export default SignIn;


// It's possible you may encounter a google Authorization error that says 403:restricted_client. If you do, here are the instructions to fix it!

// There should be a Learn More link in the popup, clicking that should take you to the Google APIs console that has three tabs under the header named Credentials, OAuth Consent Screen, and Domain Verification. Go to the OAuth Consent Screen tab and update the Application Name to "crwn-clothing" or any other name you're comfortable with (i.e. the name of your project). Click on save at the bottom, then try logging into your verified Google account thereafter.



// Thanks to Dylan Flohrschutz for the instructions and solution!