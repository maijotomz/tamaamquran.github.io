import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "card-header": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#56b68b",
        "color": "white"
    },
    "card": {
        "boxShadow": "0 1px 1px rgba(0, 0, 0, .1)"
    },
    "top-header": {
        "paddingTop": 20,
        "paddingRight": 50,
        "paddingBottom": 20,
        "paddingLeft": 50
    },
    "quran-img": {
        "width": "7vw !important",
        "float": "left"
    },
    "header-text": {
        "height": "3vw !important",
        "float": "left",
        "transform": "translateY(55%)",
        "paddingLeft": 20
    },
    "macca": {
        "width": "7vw !important",
        "float": "left",
        "height": 7 * vw
    },
    "madeena": {
        "width": "7vw !important",
        "float": "left",
        "height": 7 * vw
    },
    "second-header": {
        "position": "relative",
        "zIndex": "200 !important",
        "width": "90%",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "smooth-scroll": {
        "color": "#089858 !important"
    },
    "first-section-row": {
        "width": "90%",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "first-section-column1": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "carousel-home": {
        "marginTop": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "carousel-img": {
        "height": 300
    },
    "carousal-text": {
        "lineHeight": 50,
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "partner-comp": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "margin-0": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "marq-images": {
        "width": "60px !important",
        "transform": "translateY(17%)"
    },
    "news-section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10
    },
    "news-section-card": {
        "minHeight": 240
    },
    "marq-news-section": {
        "minHeight": 195
    },
    "marq-news-text": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontWeight": "bold"
    },
    "carousel1-img": {
        "height": 180,
        "backgroundSize": "cover"
    }
});