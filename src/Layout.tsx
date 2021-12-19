import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from "./utilities/firebase";
import { ReactNode, useState, useEffect } from "react";
import styled from "styled-components";
import { ShowSearch, Unauthenticated } from "./views";

type LayoutProps = {
  children: ReactNode;
};

const StyledBackground = styled.div<{ BackgroundImage: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) 0% 0% / cover,
    url(${(p) => p.BackgroundImage}) center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledLayout = styled.main`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 50px;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
`;

const SiteTitle = styled.h1`
  font-size: clamp(1rem, 10vw, 10rem);
  font-weight: bold;
  color: #fff;
  margin: 0;
  user-select: none;
`;

export const Layout = ({ children }: LayoutProps) => {
  const [auth] = useState(getAuth(app));
  const [user, loading, error] = useAuthState(auth);
  const [provider] = useState(new GoogleAuthProvider());
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/55138/images")
      .then((res) => res.json())
      .then((img) => {
        const posters = img.filter((i: any) => i.type === "background");
        const index = Math.round(Math.random() * (posters.length - 1));
        setBackgroundImage(posters[index].resolutions.original.url);
      });
  }, []);

  const login = async () => {
    await signInWithPopup(auth, provider);
  };
  const logout = () => {
    signOut(auth);
  };

  if (!loading) {
    return (
      <StyledBackground BackgroundImage={backgroundImage}>
        <StyledLayout>
          <SiteTitle>Showboat</SiteTitle>
          {!user ? <Unauthenticated OnLogin={() => login()} /> : <ShowSearch />}
          {children}
        </StyledLayout>
      </StyledBackground>
    );
  } else {
    return null;
  }
};
