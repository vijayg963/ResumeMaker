const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "269504695768-9t6d0hk6sltvn68t1c6irkc0n21mhdnf.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			// console.log(accessToken, profile)
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
