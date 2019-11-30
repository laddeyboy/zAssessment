import zCard from "../images/zoovu-logo-z.png";
import oCard from "../images/zoovu-logo-o1.png";
import o2Card from "../images/zoovu-logo-o2.png";
import vCard from "../images/zoovu-logo-v.png";
import uCard from "../images/zoovu-logo-u.png";

export interface CardType {
  imgSrc: string;
  id: string;
}

export const LOGO_IMAGES: Array<CardType> = [
  { imgSrc: zCard, id: "zCard" },
  { imgSrc: oCard, id: "oCard" },
  { imgSrc: o2Card, id: "o2Card" },
  { imgSrc: vCard, id: "vCard" },
  { imgSrc: uCard, id: "uCard" }
];
