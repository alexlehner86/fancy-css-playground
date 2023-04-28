import React, { useEffect, useRef, useState } from 'react';

import styles from './InertAttribute.module.css';

const InertAttributePage: React.FunctionComponent = () => {
    const defaultVisibility = [false, false, false];
    const [isSubMenuVisible, setIsSubMenuVisible] = useState([...defaultVisibility]);
    const subMenu1Ref = useRef<HTMLDivElement>(null);
    const subMenu2Ref = useRef<HTMLDivElement>(null);
    const subMenu3Ref = useRef<HTMLDivElement>(null);

    const toggleSubMenu = (index: number): void => {
        const subMenuRefs = [subMenu1Ref, subMenu2Ref, subMenu3Ref];
        subMenuRefs.forEach(ref => ref.current?.setAttribute('inert', ''));
        const newVisibility = [...defaultVisibility];
        newVisibility[index] = !isSubMenuVisible[index];
        if (newVisibility[index]) {
            subMenuRefs[index].current?.removeAttribute('inert');
        }
        setIsSubMenuVisible(newVisibility);
    }

    useEffect(() => {
        const subMenuRefs = [subMenu1Ref, subMenu2Ref, subMenu3Ref];
        subMenuRefs.forEach(ref => {
            // TypeScript/React doesn't know the inert attribute yet, so we have to use this hacky way to set it.
            ref.current?.setAttribute('inert', '');
            // This is necessary to prevent slide out transition of sub menus on page load.
            // Again: This hack is only necessary because TypeScript/React doesn't know the inert attribute.
            ref.current?.setAttribute('data-is-ready', '');
        });
    }, []);

    return (
        <div className={styles.page}>
            <h2>
                Testing the inert HTML attribute
            </h2>
            <nav className={styles.mainMenu}>
                <ul>
                    <li>
                        <button
                            type="button"
                            aria-expanded={isSubMenuVisible[0]}
                            aria-controls="sub_menu_research"
                            onClick={() => toggleSubMenu(0)}
                        >
                            Research
                        </button>
                        <div
                            id="sub_menu_research"
                            className={styles.subMenu}
                            ref={subMenu1Ref}
                        >
                            <ul>
                                <li>
                                    <a href="/black-holes">Black Holes</a>
                                </li>
                                <li>
                                    <a href="/climate-change">Climate Change</a>
                                </li>
                                <li>
                                    <a href="/modern-way-of-work">Modern Way of Work</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button
                            type="button"
                            aria-expanded={isSubMenuVisible[1]}
                            aria-controls="sub_menu_super_heroes"
                            onClick={() => toggleSubMenu(1)}
                        >
                            Super Heroes
                        </button>
                        <div
                            id="sub_menu_super_heroes"
                            className={styles.subMenu}
                            ref={subMenu2Ref}
                        >
                            <ul>
                                <li>
                                    <a href="/deadpool">Deadpool</a>
                                </li>
                                <li>
                                    <a href="/jean-grey">Jean Grey (Marvel Girl)</a>
                                </li>
                                <li>
                                    <a href="/wolferine">Wolferine</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <button
                            type="button"
                            aria-expanded={isSubMenuVisible[2]}
                            aria-controls="sub_menu_fav_food"
                            onClick={() => toggleSubMenu(2)}
                        >
                            Fav Food
                        </button>
                        <div
                            id="sub_menu_fav_food"
                            className={styles.subMenu}
                            ref={subMenu3Ref}
                        >
                            <ul>
                                <li>
                                    <a href="/pizza">Pizza</a>
                                </li>
                                <li>
                                    <a href="/tortilla">Tortilla</a>
                                </li>
                                <li>
                                    <a href="/risotto">Risotto</a>
                                </li>
                                <li>
                                    <a href="/choco-cookie">Chocolate Cookies</a>
                                </li>
                                <li>
                                    <a href="/crema-catalana">Crema Catalana</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <p>
                Lorem ipsum dolor sit amet, <a href="/consetetur">consetetur</a> sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
            </p>
        </div>
    );
};

export default InertAttributePage;
