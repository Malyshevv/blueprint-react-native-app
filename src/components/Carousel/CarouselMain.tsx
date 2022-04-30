import {Image, Text, View} from "react-native";
import React, {useRef} from "react";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

export function CarouselMain() {
    const data = [
        {
            title: "Aenean leo",
            body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
            imgUrl: "https://picsum.photos/id/11/200/300",
        },
        {
            title: "In turpis",
            body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
            imgUrl: "https://picsum.photos/id/10/200/300",
        },
    ];

    const isCarousel = useRef(null)
    return (
        <View>
            <Carousel
                layout="default"
                ref={isCarousel}
                data={data}
                loop={true}
                loopClonesPerSide={data.length}
                firstItem={1}
                initialScrollIndex={data.length}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
            />
        </View>
    )
}
