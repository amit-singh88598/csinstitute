import React from 'react';
import Header from '../layouts/header';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';
import Heros from '../components/heros';
import CourseSection from '../components/courseSection';
import OnAcademicSection from '../components/onAcademicSection';
import ContactUs from '../components/contactUs';
import Footer from '../layouts/footer';
import HomeCourses from '../components/homeCourses';
import Divider from '../components/divider';
import Layout from '../layouts/layout';

const useStyles = makeStyles((theme) => ({
	root: {
		marginLeft: 0,
		marginRight: 0
	},
	paper: {
		height: 140,
		width: 100
	},
	control: {
		padding: theme.spacing(2)
	},
	introSection: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 60,
		paddingBottom: 80,

		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 20,
			paddingRight: 20,
			paddingTop: 20,
			paddingBottom: 40
		}
	},
	ourCourses: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 60,
		paddingBottom: 80,
		backgroundColor: '#f5f5f5',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 20,
			paddingRight: 20,
			paddingTop: 20,
			paddingBottom: 40
		}
	},
	contactUs: {
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 40,
		paddingBottom: 80,
		backgroundColor: '#f5f5f5',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 20,
			paddingRight: 20,
			paddingTop: 20,
			paddingBottom: 40
		}
	},
	heading: {
		textAlign: 'center',
		marginBottom: 30,
		textTransform: 'uppercase',
		color: theme.palette.secondary.main,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1em',
			marginBottom: 30
		}
	}
}));

function Home() {
	const classes = useStyles();
	return (
		<Layout>
			<div className={classes.root}>
				<Heros />
				<div className={classes.introSection}>
					<h1 className={classes.heading}>INTRODUCTION</h1>
					<Divider />
					<Typography
						style={{
							lineHeight: '50px',
							letterSpacing: '1.6px'
						}}
						variant="h6"
					>
						दक्ष अनुभवि शिक्षकहरुको समूह द्वारा पठनपाठनकोको व्यवस्था जलेश्वर उयोग बाणिज्य संघवाट मान्यता
						प्राप्त भएको। विश्वको कुनै कुनाबाट Online CCTV को मद्तले मोबाईल द्वारा निगरानी गर्न मिल्ने "बेटी
						बचाउँ बेटी पढा" अभियानको ध्यानमा राखी प्रत्येक जाना छात्रालाई Scholership को व्यवस्था ।
					</Typography>
				</div>

				<div className={classes.ourCourses}>
					<h1 className={classes.heading}>Our Courses</h1>
					<Divider />
					<HomeCourses />
				</div>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<h1 className={classes.heading}>Facilities</h1>
						<Divider />
						<OnAcademicSection />
					</Grid>
					<Grid item xs={12} sm={6}>
						<h1 className={classes.heading}>Contact Us</h1>
						<Divider />
						<ContactUs />
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default Home;
