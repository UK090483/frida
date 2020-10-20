import React, { useCallback, useEffect, useState } from "react"
import Artwork from "../artwork/Artwork"
import styled from "styled-components"
import PropTypes from "prop-types"
import Grid from "./grid"
import useFridaAPI from "../../hooks/useFridaApi"
import { getArtworkApi } from "../helper/getArtwork"

const perPage = 10

function ArtworkContainer({
  artworks,
  handleClick,
  infinite = false,
  filterQuery,
}) {
  const [state, setState] = useState({
    loading: false,
    loadedArtworks: [],
    page: 0,
    hasMore: true,
  })

  const { FetchArtworks } = useFridaAPI()

  const loadMore = () => {
    if (state.hasMore) {
      setState({ ...state, loading: true })
      LoadArtworks(state.page + 1)
    }
  }

  const LoadArtworks = (page, reset = false) => {
    FetchArtworks(page, filterQuery, state.loadedArtworks, reset).then(
      response => {
        const { nextArtworks, hasMore, nextPage } = response

        setState({
          ...state,
          page: nextPage,
          loadedArtworks: nextArtworks,
          loading: false,
          hasMore: hasMore,
        })
      }
    )
  }

  useEffect(() => {
    if (filterQuery) {
      LoadArtworks(1, true)
    }
  }, [filterQuery])

  const viewArtworks =
    state.loadedArtworks.length > 0 ? state.loadedArtworks : artworks

  return (
    <React.Fragment>
      <div>
        <Grid
          loadMore={loadMore}
          hasMore={true}
          page={state.page}
          infinite={infinite}
          loading={state.loading}
        >
          {viewArtworks.map((artwork, index) => (
            <Artwork
              key={artwork.id}
              artwork={artwork}
              handleClick={handleClick}
            ></Artwork>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  )
}

ArtworkContainer.propTypes = {
  handleClick: PropTypes.func,
  artwork: PropTypes.array,
  infinite: PropTypes.bool,
}
export default React.memo(ArtworkContainer)
