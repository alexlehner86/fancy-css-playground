import React from 'react';

import DummyArticle from '../DummyArticle/DummyArticle';

interface DummyBlogProps {
    contentVisibilityAuto: boolean;
    containIntrinsicSize: boolean;
}

const DummyBlog: React.FunctionComponent<DummyBlogProps> = props => {
    let blogClass = 'blog-standard';
    if (props.contentVisibilityAuto && props.containIntrinsicSize) {
        blogClass = 'blog-content-visibility-and-size';
    } else if (props.contentVisibilityAuto) {
        blogClass = 'blog-content-visibility';
    }
    return (
        <div className={blogClass}>
            <DummyArticle
                heading="Beautiful Gran Canaria"
                imageName="gran_canaria_mountains.jpg"
                imagePositionTop={false}
                altText="Mountainside view on Gran Canaria with the sea in the background"
                videoUrl="https://www.youtube.com/embed/JMe1OanTjN8?controls=0"
            />
            <DummyArticle
                heading="Is it Mars? Nope, Monument Valley!"
                imageName="monument_valley.jpg"
                imagePositionTop={true}
                altText="Mountainside view on Gran Canaria with the sea in the background"
                videoUrl="https://www.youtube.com/embed/yg0As_HOvJk?controls=0"
            />
            <DummyArticle
                heading="Eger River near Karlsbad, Czech Republic"
                imageName="eger_karlsbad.jpg"
                imagePositionTop={false}
                altText="Several Kayaks moored on the Eger river bank"
                videoUrl="https://www.youtube.com/embed/6nDBIFnbNSc?controls=0"
            />
            <DummyArticle
                heading="Yosemite National Park"
                imageName="yosemite_national_park.jpg"
                imagePositionTop={false}
                altText="Mountainside view in Yosemite National Park, California, USA"
                videoUrl="https://www.youtube.com/embed/9fJEFi3ccwI?controls=0"
            />
            <DummyArticle
                heading="Gran Canaria, still beautiful"
                imageName="gran_canaria_mountains.jpg"
                imagePositionTop={false}
                altText="Mountainside view on Gran Canaria with the sea in the background"
                videoUrl="https://www.youtube.com/embed/JMe1OanTjN8?controls=0"
            />
            <DummyArticle
                heading="Monument Valley, again"
                imageName="monument_valley.jpg"
                imagePositionTop={true}
                altText="Mountainside view on Gran Canaria with the sea in the background"
                videoUrl="https://www.youtube.com/embed/yg0As_HOvJk?controls=0"
            />
            <DummyArticle
                heading="Row, row, row the boat"
                imageName="eger_karlsbad.jpg"
                imagePositionTop={false}
                altText="Several Kayaks moored on the Eger river bank"
                videoUrl="https://www.youtube.com/embed/6nDBIFnbNSc?controls=0"
            />
            <DummyArticle
                heading="Yosemite National Park, Take Two"
                imageName="yosemite_national_park.jpg"
                imagePositionTop={false}
                altText="Mountainside view in Yosemite National Park, California, USA"
                videoUrl="https://www.youtube.com/embed/9fJEFi3ccwI?controls=0"
            />
        </div>
    );
};

export default DummyBlog;
