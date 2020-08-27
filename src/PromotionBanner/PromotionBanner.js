import React from 'react';
import classes from './PromotionBanner.module.css';
import LineIllustration from '../assests/landing-illustration.png';
import IconAnnouncement from '../assests//img-celeb.png';
import IconRightArrowOrange from '../assests/img-arrow-right.png';



const PromotionBanner = () => {
    return(
        <div className={classes.BannerSection}>
       <img className={classes.BannerIllustration} src={LineIllustration} alt="Landing Banner Illustration" />

       <div className={classes.BannerMetaWrapper}>
                        <h3 className={classes.BannerHeading}>$0 delivery for 30 days! <img className={classes.CelebIcon} src={IconAnnouncement} alt="Announcements" /></h3>
                        <p className={classes.BannerDescription}>$0 delivery fee for orders over $10 for 30days</p>
                        
                        <p className={classes.LearnMoreText}>Learn More <img className={classes.IconRightOrange} src={IconRightArrowOrange} alt="Right Arrow" /></p>
                    </div>
                </div>
    );
}


export default PromotionBanner;