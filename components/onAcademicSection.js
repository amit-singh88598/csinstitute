import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

const data = [
	{
		// heading: 'Facilities',
		description: [ 'Quality education', 'Work Culture', 'Human Values', 'Personality Development', 'Team work,' ]
	}
];
const useStyles = makeStyles({
	root: {
		margin: 10,
		backgroundColor: '#ffffff'
	},
	heading: {
		textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 500
	}
});
function OnAcademicSection(props) {
	const classes = useStyles();
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			{data.map((item) => (
				<Grid item xs={12} sm={6} key={item.heading}>
					<Card className={classes.root} elevation={0}>
						<CardContent>
							{item.description.map((item2) => (
								<Typography
									variant="h6"
									color="textSecondary"
									key={item2}
									style={{ textAlign: 'center' }}
								>
									{item2}
								</Typography>
							))}
						</CardContent>
					</Card>
				</Grid>
			))}
		</div>
	);
}

export default OnAcademicSection;
