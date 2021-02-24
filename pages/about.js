import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../layouts/footer';
import Header from '../layouts/header';
import { Card, Typography } from '@material-ui/core';
import Divider from '../components/divider';
import Layout from '../layouts/layout';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
	introSection: {
		// paddingLeft: 50,
		paddingRight: 30,
		paddingTop: 40,
		paddingBottom: 60,
		backgroundColor: '#ffffff',
		textAlign: 'center'
	},
	headng: {
		textTransform: 'uppercase',
		color: theme.palette.secondary.main
	},
	content: {
		// marginTop: 40,
		marginBottom: 40,
		backgrounColor: '#f5f5f5'
	},
	contentText: {
		color: theme.palette.primary.grey,
		fontSize: '1.1em',
		textAlign: 'justify',
		textJustify: 'interword'
	}
}));

function About() {
	const classes = useStyles();
	return (
		<Layout>
			<div>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>About Us</title>
				</Head>
				<div className={classes.introSection}>
					<h1 className={classes.headng}>INTRODUCTION</h1>
					<Divider />
					<Card className={classes.content} elevation={0}>
						<Typography
							className={classes.contentText}
							style={{
								lineHeight: '50px',
								letterSpacing: '1.6px'
							}}
							variant="body2"
						>
							<ul>
								<li>
									दक्ष अनुभवि शिक्षकहरुको समूह द्वारा पठनपाठनकोको व्यवस्था जलेश्वर उयोग बाणिज्य संघवाट
									मान्यता प्राप्त भएको। विश्वको कुनै कुनाबाट Online CCTV को मद्तले मोबाईल द्वारा
									निगरानी गर्न मिल्ने |
								</li>
								<li>
									"बेटी बचाउँ बेटी पढा" अभियानको ध्यानमा राखी प्रत्येक जाना छात्रालाई Scholership को
									व्यवस्था ।
								</li>
								<li>
									सम्पूर्ण विषयको नोटस भिडियो पन माइनकी जन्मा। भौतिक विज्ञान, रामाइन विज्ञान र
									साम्प्युटर ज्यादा मात्रामा पुस्तकान्यको सुविधा।
								</li>
								<li>
									शहीद परिवार की लियार्थी माई शातप्रिणत को निःशुल्क WI-FIR Internet को मुविधा।
									प्रोजेक्टर र Introctive Panel बोर्डको माध्यमबाट पढाइने । गरिब र जेहन्दार वर्गका
									विद्यार्थीहरुलाई विशेष छुट को व्यवस्था।
								</li>
								<li>
									Computer Lab का लागि एक जनालाई एउटा Computer को व्यवस्थ शैक्षिक मैत्रीपूर्ण वातावरण
									।Online र Offline कक्षाको सुविधा |
								</li>
								<Typography style={{ marginTop: 40, marginBottom: 30, fontSize: '1.3em' }}>
									अनिवार्य रूपले दिनुपर्ने । प्रत्येक मासिक परिक्षा हुने व्यवस्था |
								</Typography>
								<li>प्रत्येक वार्षिकमा राष्ट्रिय लेभलको प्रतियोगीतामा सामिल हुने मौका पाउने ।</li>
								<li>
									Institute को Web-Site र मोबाईल Application बाट कक्षाको नोट्स र Video हेर्न सकिने ।
								</li>
								<li>
									लोकसेवा, Bridge Course र Entrance Preparation को तयारीका लागी काठमान्डौ र जनकपुरका
									शिक्षकहरु मात्र समावेश गराउने ।
								</li>
								<li>समय-समयमा मोटिभेस्नल Speaker हरुवाट निशुल्क कक्षा गराइने |</li>
								<li>प्रत्येक वर्ष शैक्षिक भ्रमण गर्ने मौका पाउने । ठुलो पार्किङको व्यवस्था ।</li>
							</ul>
						</Typography>
					</Card>
				</div>
			</div>
		</Layout>
	);
}

export default About;
