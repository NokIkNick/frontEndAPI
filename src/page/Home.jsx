import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {fetchProfile} from '../services/apiFacade'

const Container = styled.div`
  border: 0.1em solid red;
  padding: 2%;

`;

const GridContainer = styled.div`
  display: grid;
  border: 0.1em solid lime;
  grid-template-columns: 1fr 1fr;
  margin: 2% 0;
`;

const InnerLeftContainer = styled.div`
  border: 0.1em solid yellow;
  padding: 2%;
  border-radius: 0.5em;
  
`;

const InnerRightContainer = styled.div`
  border: 0.1em solid orange;
  padding: 8%;

`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 0.2em solid var(--light-blue);
  box-shadow: 0.2em 0.2em 0.5em var(--teal);
  curser: pointer;

`;

export const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const data = fetchProfile();
    data.then((data) => {
      setProfile(data);
    })
  }, [])

  return (
    <>
      <Container>
        <h1>{profile.name}</h1>
        <h3>{profile.login}</h3>
        <GridContainer>
          <InnerLeftContainer>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </h4>
          </InnerLeftContainer>
          <InnerRightContainer>
            <ProfileImage onClick={() => {window.location.href = profile.html_url}} src={profile.avatar_url} alt="Profile Image" />
          </InnerRightContainer>
        </GridContainer>
      </Container>
    </>
  )
}
