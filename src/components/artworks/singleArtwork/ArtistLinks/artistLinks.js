import React from "react"
import styled from "styled-components"
import Button from "../../../buttons/button"
export default function ArtistLinks({ artwork }) {
  const { artistWebLink, instagramLink } = artwork

  return (
    <Root>
      {artistWebLink && (
        <Button
          label={"Website"}
          type={"externalLink"}
          link={artistWebLink}
          color={"red"}
        />
      )}
      {instagramLink && (
        <Button
          label={"Instagram"}
          type={"externalLink"}
          link={instagramLink}
          color={"red"}
        />
      )}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 260px;
  max-width: 100%;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.tablet} {
    width: 320px;
  }
`
