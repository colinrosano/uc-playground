const checkforConsent = async () => {
	const cookie = await cookieStore.get('osano_consentmanager_uuid');
	if (cookie) {
		console.log(cookie.value);
	} else {
		console.log('cookie not found');
	}
};

checkforConsent();
