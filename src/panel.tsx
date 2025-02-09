import { Button, Card, CardContent } from "@react-three/uikit-default";
import { Container, DefaultProperties, Image, Text } from "@react-three/uikit";

import { useState } from "react";

export function PanelUI() {
  const [hovered, setHovered] = useState(false);
  return (
    <Container
      alignItems="center"
      width="100%"
      justifyContent="center"
      flexDirection="column"
    >
      <Card
        width="100%"
        borderWidth={8}
        borderColor="rgb(2,8,23)"
        borderBend={0.5}
        maxWidth={448}
        borderRadius={8}
      >
        <Container overflow="hidden" flexDirection="row">
          <Image
            height="100%"
            src="assets/3dcss.jpeg"
            width="100%"
            aspectRatio={1.3333333333333333}
            borderRadius={8}
            objectFit="cover"
            flexDirection="column"
          ></Image>
        </Container>
        <CardContent md={{ padding: 32 }} paddingTop={24}>
          <Container flexDirection="column" gapRow={16}>
            <Text
              fontSize={24}
              fontWeight={700}
              lineHeight={32}
              flexDirection="column"
              transformTranslateZ={10}
            >
              3D CSS
            </Text>
            <Text
              color="rgb(107,114,128)"
              dark={{ color: "rgb(156,163,175)" }}
              flexDirection="column"
              transformTranslateZ={15}
            >
              3D CSS enables creation of three-dimensional effects and
              transformations on web elements, allowing them to be rotated,
              scaled, and positioned in 3D space.
            </Text>
            <Container
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              transformTranslateZ={hovered ? 10 : 0}
            >
              <Button
                onPointerEnter={() => {
                  setHovered(true);
                }}
                onPointerLeave={() => {
                  setHovered(false);
                }}
              >
                <Text transformTranslateZ={hovered ? 10 : 0}>Learn More</Text>
              </Button>
              <DefaultProperties color="rgb(107,114,128)">
                <Container
                  dark={{ color: "rgb(156,163,175)" }}
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                  gapColumn={8}
                >
                  <Text fontSize={14} lineHeight={20} flexDirection="column">
                    February 8, 2025
                  </Text>
                </Container>
              </DefaultProperties>
            </Container>
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}
