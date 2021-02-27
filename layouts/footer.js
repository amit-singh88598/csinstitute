import { Button, Card, Chip, Grid, IconButton, Link, makeStyles, Typography } from '@material-ui/core';
import { Call, Facebook, Instagram, LinkedIn, LocationOn, MailOutline, Opacity } from '@material-ui/icons';
import { useRouter } from 'next/router';
import React, { Component } from 'react';

const useStyles = makeStyles((theme) => ({
	footer: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 40,
		paddingBottom: 40,
		backgroundColor: theme.palette.primary.main
	},
	navLink: {
		color: '#ffffff',
		marginTop: 2,
		marginBottom: 2,
		'&:hover': {
			background: theme.palette.secondary.main,
			color: theme.palette.primary.main,
			marginTop: 2,
			marginBottom: 2
		}
	},
	icon: {
		marginRight: 5,
		color: theme.palette.secondary.white
	},
	anchor: {
		fontSize: 14,
		color: theme.palette.secondary.white
	},
	flex: {
		display: 'flex'
	}
}));

function Footer() {
	const classes = useStyles();
	const router = useRouter();
	return (
		<div>
			<div className={classes.footer}>
				<Grid container>
					{/* this column use for logo and contact */}
					<Grid item xs={12} md={3} sm={3}>
						<img src="/csinstitute.jpg" width="150" height="80" />
						<Grid item xs={12} sm={12}>
							<Chip
								className={classes.navLink}
								color="primary"
								label="HOME"
								onClick={() => router.push('/about')}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Chip
								className={classes.navLink}
								color="primary"
								label="ABOUT US"
								onClick={() => router.push('/about')}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Chip
								className={classes.navLink}
								color="primary"
								label="OUR COURSES"
								onClick={() => router.push('/courses')}
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<Chip
								className={classes.navLink}
								color="primary"
								label="REGISTER"
								onClick={() => router.push('/register')}
							/>
						</Grid>
						<div>
							<IconButton>
								<a
									href="https://m.facebook.com/Login-Academy-The-Best-Known-For-Quality-Of-Education-102231858231955/"
									target="_blank"
								>
									<Facebook className={classes.icon} />
								</a>
							</IconButton>
							<IconButton>
								<a href="#">
									<LinkedIn className={classes.icon} />
								</a>
							</IconButton>
							<IconButton>
								<a href="#">
									<Instagram className={classes.icon} />
								</a>
							</IconButton>
							<Typography style={{ marginLeft: 10, color: '#ffffff' }}>www.esinstitute.com</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={9} sm={9}>
						<Grid container item>
							<Grid item xs={12} sm={3} md={3}>
								<IconButton>
									<Call className={classes.icon} />
									<a href="tel:9819614181" className={classes.anchor}>
										9840852661 , 9819614181
									</a>
								</IconButton>
							</Grid>
							<Grid item xs={12} sm={3} md={3}>
								<IconButton>
									<MailOutline className={classes.icon} />
									<a href="cijaleniwornunil@gmail.com" className={classes.anchor}>
										cijaleniwornunil@gmail.com
									</a>
								</IconButton>
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								<IconButton>
									<LocationOn className={classes.icon} />
									<p className={classes.anchor}>jaleshwor Shankar Chowk - 1. Mabottari Nepal</p>
								</IconButton>
							</Grid>
						</Grid>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6229.460712149188!2d85.79942247580132!3d26.646986998599377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec437ecadc63b1%3A0x401f6fde9aab1b56!2sNew%20Modern%20H.%20S%20School!5e0!3m2!1sen!2sin!4v1614173235361!5m2!1sen!2sin"
							width="100%"
							height="200"
							frameBorder="0"
							aria-hidden="false"
							tabIndex="0"
							style={{ border: '3px dashed white' }}
						/>
					</Grid>
				</Grid>
			</div>
			<div
				style={{
					backgroundColor: 'black',
					height: 40,
					width: '100%',
					textAlign: 'right',
					paddingRight: 20,
					paddingTop: 10
				}}
			>
				<span style={{ fontWeight: 'bold', color: 'white', fontStyle: 'italic' }}>Developed By - </span>{' '}
				<a style={{ color: 'orange' }} href="https://digaut.com/" target="_blank">
					Digaut
				</a>
			</div>
		</div>
	);
}

export default Footer;
