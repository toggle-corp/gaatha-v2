import { _cs } from '@togglecorp/fujs';
import SideNavbar from 'components/PageWithSideBar/SideNav';
import Image from 'next/image';

import styles from './styles.module.css';

function About() {
    return (
        <div className={_cs(
            styles.studio,
        )}
        >
            <div className={styles.bgWrap}>
                <SideNavbar
                    transparentMode
                />
                <div className={styles.leftBackground}>
                    <Image
                        alt="Left Image"
                        src="about_left.png"
                        placeholder="blur"
                        quality={100}
                        width={1104}
                        height={920}
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
                <div className={styles.rightBackground}>
                    <Image
                        alt="Right Image"
                        src="office-desk.png"
                        placeholder="blur"
                        quality={100}
                        width={700}
                        height={1000}
                        sizes="100vw"
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <div className={styles.studioContent}>
                    <Image
                        src="logo-dark.png"
                        alt="Gaatha"
                        width={145}
                        height={100}
                    />
                    <div className={styles.studioDescription}>
                        While our workspace follows basic fundamentals and layouts of
                        any design office, the studio isn’t just limited to that but expands
                        to our working site and related collaboration offices working together
                        in a regulated structure. We have organized our workspace such that there
                        are events of critical brainstorming and planning
                        while having interactive sessions within the team building up connections
                        and unity, all adding up to create a
                        joyful experience and story of its own.
                    </div>
                    <div className={styles.studioRoutes}>
                        <div className={styles.studioDescription}>
                            <h4>
                                studio
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Corrupti praesentium
                                impedit libero voluptatum officiis. Vero
                                iure cumque inventore. Animi, sit?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;