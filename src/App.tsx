import './App.css';

import React from 'react';

import DummyArticle from './components/DummyArticle';

function App() {
    return (
        <React.Fragment>
            <header>
                <h1>Fancy CSS Playground</h1>
            </header>
            <main>
                <DummyArticle
                    heading="Beautiful Gran Canaria"
                    imageName="gran_canaria_mountains.jpg"
                    imagePositionTop={false}
                    altText="Mountainside view on Gran Canaria with the sea in the background"
                />
                <DummyArticle
                    heading="Is it Mars? Nope, Monument Valley!"
                    imageName="monument_valley.jpg"
                    imagePositionTop={true}
                    altText="Mountainside view on Gran Canaria with the sea in the background"
                />
                <DummyArticle
                    heading="Eger River near Karlsbad, Czech Republic"
                    imageName="eger_karlsbad.jpg"
                    imagePositionTop={false}
                    altText="Several Kayaks moored on the Eger river bank"
                />
                <DummyArticle
                    heading="Yosemite National Park"
                    imageName="yosemite_national_park.jpg"
                    imagePositionTop={false}
                    altText="Mountainside view in Yosemite National Park, California, USA"
                />
                <DummyArticle
                    heading="Gran Canaria, still beautiful"
                    imageName="gran_canaria_mountains.jpg"
                    imagePositionTop={false}
                    altText="Mountainside view on Gran Canaria with the sea in the background"
                />
                <DummyArticle
                    heading="Monument Valley, again"
                    imageName="monument_valley.jpg"
                    imagePositionTop={true}
                    altText="Mountainside view on Gran Canaria with the sea in the background"
                />
                <DummyArticle
                    heading="Row, row, row the boat"
                    imageName="eger_karlsbad.jpg"
                    imagePositionTop={false}
                    altText="Several Kayaks moored on the Eger river bank"
                />
                <DummyArticle
                    heading="Yosemite National Park, Take Two"
                    imageName="yosemite_national_park.jpg"
                    imagePositionTop={false}
                    altText="Mountainside view in Yosemite National Park, California, USA"
                />
                <div className="link-wrapper">
                    <a
                        href="https://web.dev/content-visibility/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        More info about content-visibility
                    </a>
                </div>
            </main>
        </React.Fragment>
    );
}

export default App;
