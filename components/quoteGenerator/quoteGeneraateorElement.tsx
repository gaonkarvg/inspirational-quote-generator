import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackGroundCon = styled.div`
  background: linear-gradient(to right, #000046, #1cb5e0);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  width: 100vw;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: -42px;
  margin-top: -10px;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 25px;
  bottom: 30px;
`;

export const FooterCon = styled.div`
  width: 100vw;
  height: 50px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  z-index: 999;
  position: fixed;
  bottom: 0;
  color: white;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const QuoteGeneratorCon = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 70vw;
  border: 2px solid #ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;

  background: rgba(0, 0, 70, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGeneratorInnerCon = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  background-color: #fff;

  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuoteGeneratorTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #000;
`;

export const QuoteGeneratorSubTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 10px;
`;

export const QuoteGeneratorButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #c0c0c0;
    color: #000;
  }
`;

export const QuoteGeneratorQuote = styled.div`
  width: 400px;
  height: 200px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuoteGeneratorQuoteText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

export const QuoteGeneratorQuoteAuthor = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-top: 10px;
`;

export const QuoteGeneratorQuoteButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
