import { Button, Card } from "@nextui-org/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { CarouselImage } from "./type";
import { Icon } from "@iconify/react";

type Props = {
    images: CarouselImage[];
};

type Direction = 'left' | 'right';

export const CarouselImages = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollToCenter = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const imageElement = container.children[index] as HTMLElement;
            const containerWidth = container.offsetWidth;
            const imageWidth = imageElement.offsetWidth;
            const scrollLeft = imageElement.offsetLeft - (containerWidth / 2) + (imageWidth / 2);
          
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = (direction: Direction) => {
        const newIndex = direction === 'left' 
          ? Math.max(0, activeIndex - 1)
          : Math.min(props.images.length - 1, activeIndex + 1);
        
        setActiveIndex(newIndex);
        scrollToCenter(newIndex);
    };

    const handleImageClick = (index: number) => {
        setActiveIndex(index);
        scrollToCenter(index);
    };

    return (
        <Card
            radius="lg"
            className="relative h-[250px] sm:h-[350px] md:h-[400px] bg-black/10 rounded-lg mb-6 sm:mb-8"
        >
            <div
                className="absolute inset-0 flex items-center justify-around"
            >
                <Button
                    isIconOnly
                    color="primary"
                    radius="full"
                    size="sm"
                    className="absolute left-1 sm:left-2 z-10 xl:ml-5"
                    style={{ display: activeIndex === 0 ? "none" : "block" }}
                    isDisabled={activeIndex === 0}
                    onPress={() => handleScroll('left')}
                >
                    <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 inline"
                        icon="solar:alt-arrow-left-line-duotone"
                    />
                </Button>

                <div
                    ref={scrollContainerRef}
                    className="flex items-center gap-2 sm:gap-4 px-8 sm:px-12 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {props.images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index)}
                            className={`flex-shrink-0 cursor-pointer relative transition-all duration-500
                                ${
                                    index === activeIndex
                                        ? 'w-[240px] sm:w-[320px] md:w-[400px] h-[200px] sm:h-[280px] md:h-[320px]'
                                        : 'w-[80px] sm:w-[140px] md:w-[160px] h-[140px] sm:h-[200px] md:h-[240px] opacity-70 hover:opacity-100'
                                }`}
                        >
                            <Image
                                className="w-full h-full object-cover rounded-lg"
                                fill
                                sizes="100vw"
                                src={image.imagePath}
                                alt="image"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 rounded-lg" />
                        </div>
                    ))}
                </div>

                <Button
                    isIconOnly
                    className="absolute right-1 sm:right-2 w-2 xl:mr-5"
                    size="sm"
                    color="primary"
                    radius="full"
                    onPress={() => handleScroll('right')}
                    style={{ display: activeIndex === props.images.length - 1 ? "none" : "block" }}
                >
                    <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5 inline"
                        icon="solar:alt-arrow-right-line-duotone"
                    />
                </Button>
            </div>
        </Card>
    );
};
